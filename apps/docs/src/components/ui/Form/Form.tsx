"use client";

import * as React from "react";
import * as RadixLabel from "@radix-ui/react-label";
import { Slot } from "@radix-ui/react-slot";
import {
  type FieldValues,
  FormProvider,
  type SubmitHandler,
  type UseFormReturn,
  Controller,
  FieldPath,
  ControllerProps,
  useFormContext,
  useForm as useRHFForm,
  UseFormProps,
} from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Label } from "@/components/ui/Label";
import { cn } from "@/lib/utils";
import { type TypeOf } from "zod";

type FormFieldContext<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
> = {
  name: TName;
};

const FormFieldContext = React.createContext({} as FormFieldContext);

const FormField = <
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
>(
  props: ControllerProps<TFieldValues, TName>
) => {
  return (
    <FormFieldContext.Provider value={{ name: props.name }}>
      <Controller {...props} />
    </FormFieldContext.Provider>
  );
};

type FormItemContext = {
  id: string;
};

const FormItemContext = React.createContext({} as FormItemContext);

const FormItem = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...rest }, passedRef) => {
    const id = React.useId();

    return (
      <FormItemContext.Provider value={{ id }}>
        <div className={cn("space-y-2", className)} {...rest} ref={passedRef} />
      </FormItemContext.Provider>
    );
  }
);
FormItem.displayName = "FormItem";

const useFormField = () => {
  const fieldContext = React.useContext(FormFieldContext);
  const itemContext = React.useContext(FormItemContext);
  const { getFieldState, formState } = useFormContext();

  const fieldState = getFieldState(fieldContext.name, formState);

  if (!fieldContext) {
    throw new Error("useFormField should be used within <FormField>");
  }

  const { id } = itemContext;

  return {
    id,
    name: fieldContext.name,
    formItemId: `${id}-form-item`,
    formDescriptionId: `${id}-form-item-description`,
    formMessageId: `${id}-form-item-message`,
    ...fieldState,
  };
};

const FormLabel = React.forwardRef<
  React.ElementRef<typeof RadixLabel.Root>,
  React.ComponentPropsWithoutRef<typeof RadixLabel.Root>
>(({ className, ...rest }, passedRef) => {
  const { error, formItemId } = useFormField();

  return <Label className={cn(error && "text-invalid", className)} htmlFor={formItemId} {...rest} ref={passedRef} />;
});
FormLabel.displayName = "FormLabel";

const FormControl = React.forwardRef<React.ElementRef<typeof Slot>, React.ComponentPropsWithoutRef<typeof Slot>>(
  (props, passedRef) => {
    const { error, formItemId, formDescriptionId, formMessageId } = useFormField();

    return (
      <Slot
        id={formItemId}
        aria-describedby={!error ? `${formDescriptionId}` : `${formDescriptionId} ${formMessageId}`}
        aria-invalid={!!error}
        {...props}
        ref={passedRef}
      />
    );
  }
);
FormControl.displayName = "FormControl";

const FormDescription = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLParagraphElement>>(
  ({ className, ...rest }, passedRef) => {
    const { formDescriptionId } = useFormField();

    return (
      <p id={formDescriptionId} className={cn("text-muted-foreground text-sm", className)} {...rest} ref={passedRef} />
    );
  }
);
FormDescription.displayName = "FormDescription";

const FormMessage = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLParagraphElement>>(
  ({ className, children, ...rest }, passedRef) => {
    const { error, formMessageId } = useFormField();
    const body = error ? String(error?.message) : children;

    if (!body) {
      return null;
    }

    return (
      <p id={formMessageId} className={cn("text-sm font-medium text-danger", className)} {...rest} ref={passedRef}>
        {body}
      </p>
    );
  }
);
FormMessage.displayName = "FormMessage";

const useForm = <TFormSchema extends Zod.Schema>({
  schema,
  ...rest
}: Omit<UseFormProps<TypeOf<TFormSchema>>, "resolver"> & {
  schema: TFormSchema;
}) => {
  const form = useRHFForm({
    ...rest,
    resolver: zodResolver(schema),
  });

  return form;
};

const Form = <T extends FieldValues>({
  children,
  form,
  disabled: passedDisabled = false,
  onSubmit,
  ...rest
}: Omit<React.ComponentProps<"form">, "onSubmit"> & {
  form: UseFormReturn<T>;
  onSubmit?: SubmitHandler<T>;
  disabled?: boolean;
  preventSubmitWhileDisabled?: boolean;
}) => {
  const disabled = passedDisabled || form.formState.isSubmitting;

  const handleSubmit = form.handleSubmit((...args) => {
    if (disabled) {
      return;
    }
    if (onSubmit) {
      onSubmit(...args);
    }
  });

  return (
    <FormProvider {...form}>
      <form {...rest} onSubmit={handleSubmit}>
        <fieldset disabled={disabled}>{children}</fieldset>
      </form>
    </FormProvider>
  );
};

export { useFormField, Form, FormItem, FormLabel, FormControl, FormDescription, FormMessage, FormField, useForm };
