export interface ICollapsibleConstant {
  title: string;
  nestedTitle?: string;
  description: string;
}

const collapsibleConstant = (name: any) => [
  {
    title: "Introduction",
    nestedTitle: `About ${name}`,
    description: "",
  },
  {
    title: "Medicine Activity",
    nestedTitle: `How ${name} Works`,
    description: "",
  },
  {
    title: "Uses",
    nestedTitle: `Uses of ${name}`,
    description: "",
  },
  {
    title: "Direction for Use",
    nestedTitle: `Directions to use ${name}`,
    description: "",
  },
  {
    title: "Side Effects",
    nestedTitle: `Side effects of ${name}`,
    description: "",
  },
  {
    title: "Manufacturers Details",
    nestedTitle: "",
    description: "",
  },
];

const getCollapsableData = (name: string, data: any) => {
  const newData = () =>
    collapsibleConstant(name).map((item) => {
      switch (item.title) {
        case "Introduction":
          item.description = data?.medIntroduction;
          break;
        case "Medicine Activity":
          item.description = data?.medActivity;
          break;
        case "Uses":
          item.description = data?.medUses;
          break;
        case "Direction for Use":
          item.description = data?.medDirectionForUse;
          break;
        case "Side Effects":
          item.description = data?.medSideEffects;
          break;
        case "Manufacturers Details":
          item.description = data?.companyAddress;
          break;
      }
      return item;
    });
  return newData();
};

export { getCollapsableData };

// export const collapsibleConstant: ICollapsibleConstant[] = [
//   {
//     title: "Introduction",
//     nestedTitle: "About Gemsoline Capsule 15",
//     description:
//       "The 'Vitamins' class includes Gemsoline Softgel Capsule , which is generally used to treat low blood calcium levels. Vitamin D deficiency, osteoporosis (weak and brittle bones), hypoparathyroidism (low calcium levels in the body caused by the parathyroid glands), latent tetany (muscle disease caused by low blood calcium levels), and rickets or osteomalacia are all conditions that Gemsoline Softgel Capsule  effectively treats (softening or deforming of bones due to lack of calcium). Vitamin D deficiency occurs when your body's vitamin D levels are low, which can be caused by poor nutrition, intestinal malabsorption, or a lack of exposure to sunlight.",
//   },
//   {
//     title: "Medicine Activity",
//     nestedTitle: "How Gemsoline Capsule 15 Works",
//     description:
//       "Cholecalciferol' is a kind of vitamin D found in Gemsoline Softgel Capsule. Cholecalciferol (vitamin D3) supplements help maintain overall health by boosting calcium, phosphate, and vitamin A absorption from various organs.",
//   },
//   {
//     title: "Uses",
//     nestedTitle: "Uses of Gemsoline Capsule 15",
//     description:
//       "Gemsoline D3 Capsule is used in the treatment of Osteoporosis, Osteomalacia (Rickets), Vitamin D deficiency",
//   },
//   {
//     title: "Direction for Use",
//     nestedTitle: "Directions to use Gemsoline Capsule 15",
//     description:
//       "Gemsoline Softgel Capsule  is available in the following dosage forms: oral tablet, capsule, chewable tablet, liquid, and extended-release tablets. Tablet/capsule with an extended release: Swallow the tablet whole with a glass of water after it has been broken down. With or without food, take Gemsoline-D3 60K Softgel Capsule at regular intervals, according to your doctor's instructions. It should not be crushed, chewed, or broken. The dosage will be determined by your doctor depending on the severity of your medical condition.",
//   },
//   {
//     title: "Side Effects",
//     nestedTitle: "Side effects of Gemsoline Capsule 15",
//     description:
//       "The majority of side effects are minor and will go away as your body adjusts to the medicine. If they don't go away or you're concerned about them, see your doctor.",
//   },
//   {
//     title: "Manufacturers Details",
//     nestedTitle: "",
//     description:
//       "D2, Medley House, Rd Number 16, Area, Andheri East, Mumbai, Maharashtra 400093",
//   },
// ];
