function organizeGifts(gifts) {
  const regex = /[0-9]+[a-z]/g;
  const orders = gifts.match(regex);
  let warehouse = "";

  orders.forEach((order) => {
    const amountOrder = order.match(/[0-9]+/);
    const typeGift = order.match(/[a-z]/g)[0];

    const amountPallets = Math.trunc(Math.trunc(amountOrder / 10) / 5);
    const amountBoxes = Math.trunc(amountOrder / 10) % 5;
    const amountBags = amountOrder % 10;

    const pallets = `[${typeGift}]`;
    const boxes = `{${typeGift}}`;
    const bags = amountBags ? `(${typeGift.repeat(amountBags)})` : "";

    warehouse +=
      pallets.repeat(amountPallets) + boxes.repeat(amountBoxes) + bags;
  });

  return warehouse;
}

// *** TEST CASES ***

const result1 = organizeGifts("76a11b");
console.log(result1);
// `[a]{a}{a}(aaaaaa){b}(b)`
