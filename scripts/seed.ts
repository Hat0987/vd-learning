export const { PrismaClient } = require("@prisma/client");

const database = new PrismaClient();

async function main() {
  try {
    await database.category.createMany({
      data: [
        { name: "Discovery Programme" },
        { name: "Digital Marketing" },
        { name: "Mobile App Development" },
        { name: "Free Webinars" },
        { name: "SEO" },
        { name: "Web Development" },
        { name: "Content Marketing" },
      ]
    });

    console.log("Success");
  } catch (error) {
    console.log("Error seeding the database categories", error);
  } finally {
    await database.$disconnect();
  }
}

main();