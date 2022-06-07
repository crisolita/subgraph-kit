import { BigInt, BigDecimal } from "@graphprotocol/graph-ts";
import {
  Sell as SellEvent,
  marketplace,
} from "../types/marketplace/marketplace";
import { Sale } from "../types/schema";
import { ONE, ZERO, ADDRESS_ZERO } from "../utils";
export function handleSell(event: SellEvent): void {
  let orderId = event.params.orderId;
  let tokenId = event.params.tokenId;
  let seller = event.params.seller;
  let txHash = event.transaction.hash.toHexString();

  let contract = marketplace.bind(event.address);

  let details = contract.orders(orderId);

  let _sale = new Sale(orderId.toString());

  _sale.tokenID = tokenId;
  _sale.seller = seller;
  _sale.amount = details.value3;
  _sale.price = details.value4;
  _sale.txHash = txHash;
  _sale.save();
}
