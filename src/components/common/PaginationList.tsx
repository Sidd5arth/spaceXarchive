import React from "react";

import { Pagination, Center, SimpleGrid } from "@mantine/core";

interface PaginatedListProps<T> {
  items: T[];
  itemsPerPage?: number;
  renderItem: (item: T, index: number) => React.ReactNode;
}

function PaginatedList<T>({
  items,
  itemsPerPage = 6,
  renderItem,
}: PaginatedListProps<T>) {
  const [currentPage, setCurrentPage] = React.useState(1);

  const totalPages = Math.ceil(items.length / itemsPerPage);
  const start = (currentPage - 1) * itemsPerPage;
  const paginatedItems = items.slice(start, start + itemsPerPage);

  return (
    <>
      <SimpleGrid
        cols={1}
        spacing="lg"
        verticalSpacing="lg"
        mt="md"
        breakpoints={[
          { minWidth: "sm", cols: 2 },
          { minWidth: "md", cols: 3 },
        ]}
      >
        {paginatedItems.map(renderItem)}
      </SimpleGrid>
      {totalPages > 1 && (
        <Center mt="xl">
          <Pagination
            total={totalPages}
            value={currentPage}
            onChange={setCurrentPage}
            color="var(--mantine-color-primary-6)"
            size="md"
            radius="xl"
          />
        </Center>
      )}
    </>
  );
}

export default PaginatedList;
