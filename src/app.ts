import Fastify from "fastify";
import userRoutes from "./modules/user/user.route";

const PORT = 3000;

const fastify = Fastify({
  logger: true,
});

const start = async () => {
  fastify.register(userRoutes, { prefix: "api/user" });

  try {
    await fastify.listen(PORT, "0.0.0.0");
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

start();
