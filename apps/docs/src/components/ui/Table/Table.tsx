import * as React from "react";

import { cn } from "@/lib/utils";

const Table = React.forwardRef<HTMLTableElement, React.HTMLAttributes<HTMLTableElement>>(
  ({ className, ...rest }, passedRef) => (
    <div className="w-full overflow-auto">
      <table {...rest} className={cn("w-full caption-bottom text-sm", className)} ref={passedRef} />
    </div>
  )
);
Table.displayName = "Table";

const TableHeader = React.forwardRef<HTMLTableSectionElement, React.HTMLAttributes<HTMLTableSectionElement>>(
  ({ className, ...rest }, passedRef) => (
    <thead {...rest} className={cn("[&_tr]:border-b", className)} ref={passedRef} />
  )
);
TableHeader.displayName = "TableHeader";

const TableBody = React.forwardRef<HTMLTableSectionElement, React.HTMLAttributes<HTMLTableSectionElement>>(
  ({ className, ...rest }, passedRef) => (
    <tbody {...rest} className={cn("[&_tr:last-child]:border-0", className)} ref={passedRef} />
  )
);
TableBody.displayName = "TableBody";

const TableFooter = React.forwardRef<HTMLTableSectionElement, React.HTMLAttributes<HTMLTableSectionElement>>(
  ({ className, ...rest }, passedRef) => (
    <tfoot {...rest} className={cn("bg-muted font-medium", className)} ref={passedRef} />
  )
);
TableFooter.displayName = "TableFooter";

const TableRow = React.forwardRef<HTMLTableRowElement, React.HTMLAttributes<HTMLTableRowElement>>(
  ({ className, ...rest }, passedRef) => (
    <tr
      {...rest}
      className={cn("border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted", className)}
      ref={passedRef}
    />
  )
);
TableRow.displayName = "TableRow";

const TableHead = React.forwardRef<HTMLTableCellElement, React.ThHTMLAttributes<HTMLTableCellElement>>(
  ({ className, ...rest }, passedRef) => (
    <th
      {...rest}
      className={cn(
        "h-12 px-4 text-left align-middle font-medium text-light-text [&:has([role=checkbox])]:pr-0",
        className
      )}
      ref={passedRef}
    />
  )
);
TableHead.displayName = "TableHead";

const TableCell = React.forwardRef<HTMLTableCellElement, React.TdHTMLAttributes<HTMLTableCellElement>>(
  ({ className, ...rest }, passedRef) => (
    <td {...rest} className={cn("p-4 align-middle [&:has([role=checkbox])]:pr-0", className)} ref={passedRef} />
  )
);
TableCell.displayName = "TableCell";

const TableCaption = React.forwardRef<HTMLTableCaptionElement, React.HTMLAttributes<HTMLTableCaptionElement>>(
  ({ className, ...rest }, passedRef) => (
    <caption {...rest} className={cn("mt-4 text-sm text-light-text", className)} ref={passedRef} />
  )
);
TableCaption.displayName = "TableCaption";

export { Table, TableHeader, TableBody, TableFooter, TableHead, TableRow, TableCell, TableCaption };
