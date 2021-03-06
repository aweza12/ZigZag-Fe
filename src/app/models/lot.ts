import { Bid } from "./bid";

export class Lot {
  id: number;
  creatorId: number;
  creatorName: string;
  productId: number;
  productName: string;
  productDescription: string;
  startDate: string;
  endDate: string;
  startPrice: number;
  highestPrice: number;
  winnerId: number;
  winnerName: string;
  bids: Bid[];
  active: boolean;
}
