def organizeInventory(inventory):
  new_inventory = {}
  for item in inventory:
    if item["category"] not in new_inventory:
      new_inventory[item["category"]] = {}

    if item["name"] not in new_inventory[item["category"]]:
      new_inventory[item["category"]][item["name"]] = 0

    new_inventory[item["category"]][item["name"]]+= item["quantity"]

  return new_inventory