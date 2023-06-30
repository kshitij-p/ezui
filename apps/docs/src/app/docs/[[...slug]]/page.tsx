import { Component, allComponents, allDocs } from "contentlayer/generated";
import { notFound } from "next/navigation";
import React from "react";
import MDXComponents from "@/components/docs/MDXComponents";
import { Badge } from "@/components/ui/Badge";
import Link from "next/link";
import RadixLogo from "@/components/docs/RadixLogo";

const getDoc = (slug: string[] | undefined) => {
  //When navigating to /docs the slug will be empty
  if (slug === undefined) {
    return allDocs.find((doc) => doc._id === "introduction.mdx");
  }

  if (slug.length <= 0) return undefined;

  const path = slug.join("/");

  if (slug[0] === "components") {
    return allComponents.find((component) => {
      return component._raw.flattenedPath === path;
    });
  }

  return allDocs.find((doc) => doc._raw.flattenedPath === path);
};

export const generateStaticParams = async () =>
  allComponents.map((component) => ({ slug: component._raw.flattenedPath.split("/") }));

export const generateMetadata = ({ params }: { params: { slug: string[] } }) => {
  const doc = getDoc(params.slug);
  if (!doc) throw new Error(`Component not found for slug: ${params.slug}`);

  return { title: doc.title };
};

const ComponentLayout = ({ params }: { params: { slug: string[] } }) => {
  const doc = getDoc(params.slug);

  // 404 if the component does not exist.
  if (!doc) notFound();

  return (
    <div className="flex w-full flex-col ">
      <article className="flex w-full max-w-4xl flex-col">
        <div className="mb-8 flex flex-col gap-2">
          <h1 className="mt-2 scroll-m-20 text-4xl font-bold">{doc.title}</h1>
          {doc.description && <p className="text-lg text-light-text">{doc.description}</p>}
          {(doc as Component)?.radixApiReference && (
            <Badge className="max-w-max border-2" variants={{ type: "secondary" }}>
              <Link
                className="inline-flex items-center"
                href={(doc as Component).radixApiReference}
                target="_blank"
                rel="noreferrer"
              >
                <RadixLogo className="h-3 w-3" /> Radix API Reference
              </Link>
            </Badge>
          )}
        </div>
        <MDXComponents content={doc.body.code} />
      </article>
    </div>
  );
};

export default ComponentLayout;
