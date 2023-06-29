import { format, parseISO } from "date-fns";
import { allComponents } from "contentlayer/generated";
import { notFound } from "next/navigation";
import { useMDXComponent } from "next-contentlayer/hooks";
import React from "react";
import ComponentDemo from "@/components/docs/ComponentDemo";

export const generateStaticParams = async () =>
  allComponents.map((component) => ({ slug: component._raw.flattenedPath }));

export const generateMetadata = ({ params }: { params: { slug: string } }) => {
  const component = allComponents.find((component) => component._raw.flattenedPath === params.slug);
  if (!component) throw new Error(`Component not found for slug: ${params.slug}`);

  return { title: component.title };
};

const mdxComponents = {
  ComponentDemo: ComponentDemo,
};

const ComponentLayout = ({ params }: { params: { slug: string } }) => {
  const component = allComponents.find((component) => component._raw.flattenedPath === params.slug);

  // 404 if the component does not exist.
  if (!component) notFound();

  // Parse the MDX file via the useMDXComponent hook.
  const MDXContent = useMDXComponent(component.body.code);

  return (
    <article className="mx-auto max-w-xl py-8">
      <div className="mb-8 text-center">
        <time dateTime={component.date} className="mb-1 text-xs text-gray-600">
          {format(parseISO(component.date), "LLLL d, yyyy")}
        </time>
        <h1 className="text-3xl font-bold">{component.title}</h1>
      </div>
      <MDXContent components={mdxComponents} />
    </article>
  );
};

export default ComponentLayout;
