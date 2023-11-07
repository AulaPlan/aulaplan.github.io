<script>
  // @ts-nocheck

  import {
    Toast,
    ToastHeader,
    ToastBody,
    Row,
    Col,
    Form,
    InputGroup,
    Input,
    Button,
    Container,
  } from "sveltestrap";

  let tasks = [];
  let asignatures = [];
  let dates = [];

  function addTodo() {
    tasks = [...tasks, ""];
    asignatures = [...asignatures, ""];
    dates = [...dates, ""];
  }

  function removeSelf(index) {
    tasks = [...tasks.slice(0, index), ...tasks.slice(index + 1)];
    asignatures = [
      ...asignatures.slice(0, index),
      ...asignatures.slice(index + 1),
    ];
    dates = [...dates.slice(0, index), ...dates.slice(index + 1)];
  }
</script>

<Container class="my-2" dark>
  <Row>
    <Form>
      {#each tasks as todo, index}
        <Col>
          <InputGroup>
            <Input
              class="border-0 shadow-none"
              type="datetime-local"
              name="datetime"
              placholder="Fecha de Entrega"
              bind:value={dates[index]}
            />
            <Input
              class="border-0 shadow-none"
              bind:value={asignatures[index]}
              placeholder="Ingresa la Materia"
            />
            <Input
              class="border-0 shadow-none"
              bind:value={tasks[index]}
              placeholder="Ingresa tu Tarea"
            />
            <Button color="danger" on:click={() => removeSelf(index)}>X</Button>
            <br />
          </InputGroup>
        </Col>
      {/each}
      <Button color="success" on:click={addTodo}>Añadir tarea</Button>
    </Form>
  </Row>
</Container>
