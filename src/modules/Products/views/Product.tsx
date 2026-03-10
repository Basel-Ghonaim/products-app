import { Card, Image, Text, Badge, Group, Button, Stack } from "@mantine/core";
import { Rating } from "@mantine/core";
import type { Product as ProductProps } from "../entities/Product";
import { useDeleteProduct } from "../hooks/useDeleteProduct";

interface ProductComponentProps {
  product: ProductProps;
}

export function Product({ product }: ProductComponentProps) {
  const formattedPrice = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
  }).format(product.price);

  const avgRating =
    product.reviews.length > 0
      ? product.reviews.reduce((acc, r) => acc + r.rating, 0) /
        product.reviews.length
      : 0;

  const { mutate, isSuccess } = useDeleteProduct();

  if (isSuccess) return null;

  return (
    <Card shadow="sm" padding="lg" radius="md" withBorder>
      <Card.Section>
        <Image
          src={product.image}
          alt={product.name}
          height={220}
          fit="cover"
        />
      </Card.Section>

      <Stack gap="xs" mt="md">
        <Group justify="space-between">
          <Text fw={600} size="lg">
            {product.name}
          </Text>
          {product.hasDiscount && (
            <Badge color="red" variant="filled">
              Sale
            </Badge>
          )}
        </Group>

        <Text size="sm" c="dimmed" lineClamp={2}>
          {product.description}
        </Text>

        <Group justify="space-between" mt="sm">
          <Text fw={700} size="md" c="blue">
            {formattedPrice}
          </Text>
          <Rating value={avgRating} fractions={2} readOnly />
        </Group>

        <Button
          fullWidth
          mt="md"
          radius="md"
          disabled={!product.isAvailable}
          variant="filled"
          color="blue"
        >
          Add To Cart
        </Button>
        <Button
          fullWidth
          radius="md"
          disabled={!product.isAvailable}
          variant="filled"
          color="red"
          onClick={() => mutate(product.id)}
        >
          Delete Product
        </Button>
      </Stack>
    </Card>
  );
}
