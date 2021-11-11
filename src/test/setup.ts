import path from "path";
import { DockerComposeEnvironment } from "testcontainers";

process.env.TESTCONTAINERS_RYUK_DISABLED = "true";

export default async function setup(): Promise<void> {
  const composeFilePath = path.join(__dirname, "../../../src/test");
  await new DockerComposeEnvironment(composeFilePath, "docker-compose.yml")
    .withNoRecreate()
    .up();
}
