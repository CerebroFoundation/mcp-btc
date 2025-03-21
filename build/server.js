import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
const server = new McpServer({
    name: "hello-server",
    version: "1.0.0",
});
server.tool("hello", "Says hello", {}, async () => ({ content: [{ type: "text", text: "Hello from MCP server!" }] }));
async function main() {
    const transport = new StdioServerTransport();
    await server.connect(transport);
    console.error("Hello server running on stdio"); // Log to stderr
}
main().catch((error) => {
    console.error("Fatal error in main():", error);
    process.exit(1);
});
