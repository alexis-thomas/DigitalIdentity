import { Card, Image, Text, Badge, Button, Group } from "@mantine/core";

function Research() {
  return (
    <div className="research">
      <CardExample2 />
      <CardExample2 />
      <CardExample2 />
      <CardExample2 />
      <CardExample2 />
      <CardExample2 />
    </div>
  );
}

function CardExample() {
  return (
    <div className="card-container">
      <Card shadow="sm" p="lg" radius="md" withBorder>
        <Card.Section>
          <Image
            src="https://images.unsplash.com/photo-1527004013197-933c4bb611b3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=720&q=80"
            height={160}
            alt="Norway"
          />
        </Card.Section>

        <Group position="apart" mt="md" mb="xs">
          <Text weight={500}>Norway Fjord Adventures</Text>
          <Badge color="pink" variant="light">
            On Sale
          </Badge>
        </Group>

        <Text size="sm" color="dimmed">
          With Fjord Tours you can explore more of the magical fjord landscapes
          with tours and activities on and around the fjords of Norway
        </Text>

        <Button variant="light" color="blue" fullWidth mt="md" radius="md">
          Book classic tour now
        </Button>
      </Card>
    </div>
  );
}

function CardExample2() {
  return (
    <div className="card-container">
      <Image
        radius="md"
        src="https://images.unsplash.com/photo-1511216335778-7cb8f49fa7a3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=720&q=80"
        alt="Random unsplash image"
      />
      <div>
        <div>Cool title</div>
        <div>This is my article description</div>
      </div>
    </div>
  );
}

export default Research;
