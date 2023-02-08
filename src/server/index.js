import { createServer } from "miragejs";
import { WEMOVIES_BFF_PATH } from "../constants";
import IntegerIDManager from "./identifyManager";
import models from "./models";
import { productRoutes, shoppingCartRoutes } from "./routes";

const startServer = ({ environment = "development" } = {}) => {
  return createServer({
    identityManagers: {
      application: IntegerIDManager,
    },
    environment,
    models,
    routes() {
      this.namespace = WEMOVIES_BFF_PATH;
      productRoutes(this);
      shoppingCartRoutes(this);
    },
  });
};

export default startServer;
