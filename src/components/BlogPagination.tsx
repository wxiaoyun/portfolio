import {
  Pagination,
  PaginationEllipsis,
  PaginationItem,
  PaginationItems,
  PaginationNext,
  PaginationPrevious,
} from "@components/ui/pagination";
import type { CollectionEntry } from "astro:content";
import type { Component } from "solid-js";

export type BlogPaginationProps = {
  blogEntries: CollectionEntry<"blog">[];
  index: number;
};

export const BlogPagination: Component<BlogPaginationProps> = (props) => {
  const isFirstPage = () => props.index === 0;
  const isLastPage = () => props.index === props.blogEntries.length - 1;

  return (
    <Pagination
      count={props.blogEntries.length}
      page={props.index + 1}
      itemComponent={(itemProps) => (
        <a href={`/blog/${props.blogEntries[itemProps.page - 1].id}`}>
          {/* Page is 1 indexed */}
          <PaginationItem page={itemProps.page}>
            {itemProps.page}
          </PaginationItem>
        </a>
      )}
      ellipsisComponent={() => <PaginationEllipsis />}
    >
      <a
        href={
          isFirstPage()
            ? undefined
            : `/blog/${props.blogEntries[props.index - 1].id}`
        }
      >
        <PaginationPrevious disabled={isFirstPage()} />
      </a>
      <PaginationItems />
      <a
        href={
          isLastPage()
            ? undefined
            : `/blog/${props.blogEntries[props.index + 1].id}`
        }
      >
        <PaginationNext disabled={isLastPage()} />
      </a>
    </Pagination>
  );
};
