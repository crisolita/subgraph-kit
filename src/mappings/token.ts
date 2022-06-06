import { BigInt, BigDecimal } from "@graphprotocol/graph-ts";
import { newNFT as newNFTEvent, NFT1155 } from "../types/NFT1155/NFT1155";
import { Sale, Token } from "../types/schema";
import { ONE, ZERO, ADDRESS_ZERO } from "../utils";
export function handleToken(event: newNFTEvent): void {
  let tokenId = event.params.id;
  let amount = event.params.amount;
  let creator = event.params.creator;
  let txHash = event.transaction.hash.toHexString();

  let contract = NFT1155.bind(event.address);

  let _uri = contract.uri(tokenId);

  let _newNFT = new Token(tokenId.toString());

  _newNFT.creator = creator;
  _newNFT.amount = amount;
  _newNFT.uri = _uri;

  _newNFT.save();
}
