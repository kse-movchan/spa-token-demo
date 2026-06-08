import Keycloak from "keycloak-js";

const keycloak = new Keycloak({
  url: "https://keycloak.192.168.50.10.nip.io",
  realm: "myroslava-movchan-lab",
  clientId: "notes-spa",
});

export default keycloak;
