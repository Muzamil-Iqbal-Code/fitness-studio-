
const pool = require("./db");

const classes = [
  {
    number: "01",
    title: "Strength",
    subtitle: "BUILD YOUR FOUNDATION",
    category: "Strength",
    image: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=900&q=85",
    description: "Build real strength through structured resistance training.",
  },
  {
    number: "02",
    title: "Athletic",
    subtitle: "MOVE WITH PURPOSE",
    category: "Athletic",
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=900&q=85",
    description: "Improve endurance, mobility and overall performance.",
  },
  {
    number: "03",
    title: "Conditioning",
    subtitle: "PUSH YOUR LIMITS",
    category: "Conditioning",
    image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=900&q=85",
    description: "High-energy training designed to challenge your limits.",
  },
];

const trainers = [
  {
    name: "Charles",
    specialty: "Strength",
    bio: "Helps you build real, lasting strength.",
    photo: "/pictures/charles.jpg",
  },
  {
    name: "Jhone Snow",
    specialty: "Boxing",
    bio: "Fast, fun conditioning with gloves on.",
    photo: "/pictures/jhone.jpg",
  },
  {
    name: "Alex",
    specialty: "Yoga",
    bio: "Calm, flexible and focused sessions.",
    photo: "/pictures/alex.jpg",
  },
  {
    name: "Mathew",
    specialty: "HIIT",
    bio: "High energy intervals for all levels.",
    photo: "/pictures/mathew.jpg",
  },
];

const plans = [
  { name: "Basic", price: 20, perks: "4 classes a month", popular: false },
  { name: "Standard", price: 50, perks: "Unlimited classes", popular: true },
  {
    name: "Premium",
    price: 100,
    perks: "Unlimited classes with coaching and diet",
    popular: false,
  },
];

async function seedDatabase() {
  const client = await pool.connect();

  try {
    await client.query("BEGIN");

    // Clear old seed data before inserting it again.
    await client.query(
      "TRUNCATE TABLE classes, trainers, plans RESTART IDENTITY"
    );

    for (const item of classes) {
      await client.query(
        `INSERT INTO classes
        (number, title, subtitle, category, image, description)
        VALUES ($1, $2, $3, $4, $5, $6)`,
        [
          item.number,
          item.title,
          item.subtitle,
          item.category,
          item.image,
          item.description,
        ]
      );
    }

    for (const trainer of trainers) {
      await client.query(
        `INSERT INTO trainers (name, specialty, bio, photo)
        VALUES ($1, $2, $3, $4)`,
        [
          trainer.name,
          trainer.specialty,
          trainer.bio,
          trainer.photo,
        ]
      );
    }

    for (const plan of plans) {
      await client.query(
        `INSERT INTO plans (name, price, perks, popular)
        VALUES ($1, $2, $3, $4)`,
        [plan.name, plan.price, plan.perks, plan.popular]
      );
    }

    await client.query("COMMIT");

    console.log("Database seeded successfully!");
    console.log(`Classes: ${classes.length}`);
    console.log(`Trainers: ${trainers.length}`);
    console.log(`Plans: ${plans.length}`);
  } catch (error) {
    await client.query("ROLLBACK");
    console.error("Seeding failed:", error.message);
  } finally {
    client.release();
    await pool.end();
  }
}

seedDatabase();
