<script>
  import { Nav, NavItem, NavLink, Navbar, NavbarBrand } from "sveltestrap";
</script>

<Navbar color="dark" dark expand="md">
  <NavbarBrand href="/">Aula Plan</NavbarBrand>
  <Nav class="ms-auto" navbar>
    <NavItem>
      <NavLink href="/">Tareas</NavLink>
    </NavItem>
    <NavItem>
      <NavLink href="/">Calendario</NavLink>
    </NavItem>
  </Nav>
</Navbar>
