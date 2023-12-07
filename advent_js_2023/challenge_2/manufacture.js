function manufacture(gifts, materials) {
  const arrayMaterials = materials.split("");

  const availableGifts = gifts.filter((gift) => {
    const arrayGiftMaterials = gift.split("");

    const isGiftAvailable = arrayGiftMaterials.every((material) => {
      return arrayMaterials.includes(material);
    });

    return isGiftAvailable;
  });

  return availableGifts;
}

// *** TEST CASES ***

const gifts = ["tren", "oso", "pelota"];
const materials = "tronesa";

console.log(manufacture(gifts, materials)); // ["tren", "oso"]

const gifts2 = ["juego", "puzzle"];
const materials2 = "jlepuz";

console.log(manufacture(gifts2, materials2)); // ["puzzle"]

const gifts3 = ["libro", "ps5"];
const materials3 = "psli";

console.log(manufacture(gifts3, materials3)); // []
