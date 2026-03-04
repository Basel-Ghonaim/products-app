import {
  Card,
  Image,
  Text,
  Badge,
  Button,
  Group,
  Grid,
  Pill,
} from "@mantine/core";
import { useGetAllProducts } from "../hooks/useGetAllProducts";
export const Products = () => {
  const { products } = useGetAllProducts();

  return (
    <Grid>
      {products.map((product) => (
        <Grid.Col span={4} key={product.id}>
          <Card
            shadow="sm"
            padding="lg"
            radius="md"
            withBorder
            key={product.id}
          >
            <Card.Section>
              <Image src={product.image} height={160} alt={product.name} />
            </Card.Section>
            {product.isAvailable && <Pill>Available</Pill>}
            <Group justify="space-between" mt="md" mb="xs">
              <Text fw={500}>{product.name}</Text>
              <Badge color="pink">On Sale</Badge>
            </Group>

            <Text size="sm" c="dimmed">
              With Fjord Tours you can explore more of the magical fjord
              landscapes with tours and activities on and around the fjords of
              Norway
            </Text>

            <Button color="blue" fullWidth mt="md" radius="md">
              Take It Now
            </Button>
          </Card>
        </Grid.Col>
      ))}
    </Grid>
  );
};
