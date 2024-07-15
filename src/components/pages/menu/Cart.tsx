import React from "react";
import {
  Card,
  CardHeader,
  CardContent,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Trash } from "lucide-react";

interface CartItem {
  id: number;
  name: string;
  quantity: number;
  price: number;
  note?: string;
}

interface CartProps {
  items: CartItem[];
  onCheckout: () => void;
  onRemoveItem: (id: number) => void;
  onUpdateQuantity: (id: number, quantity: number) => void;
  onUpdateNote: (id: number, note: string) => void;
}

const Cart: React.FC<CartProps> = ({
  items,
  onCheckout,
  onRemoveItem,
  onUpdateQuantity,
  onUpdateNote,
}) => {
  const totalPrice = items.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <Card className="w-full md:max-w-sm h-fit">
      <CardHeader>
        <CardTitle>Order list</CardTitle>
        <CardDescription>#08098999917</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="max-h-[90svh] overflow-auto no-scrollbar shadow p-5">
          {items.length === 0 ? (
            <p className="text-center text-gray-500">Your cart is empty.</p>
          ) : (
            <ul className="space-y-4">
              {items.map((item) => (
                <li key={item.id} className="flex justify-between items-center">
                  <div className="flex flex-col w-full">
                    <h4 className="text-lg font-semibold">{item.name}</h4>
                    <p className="text-sm text-muted-foreground">
                      Rp {item.price.toLocaleString()}
                    </p>
                    <div className="flex items-center mt-2">
                      <Button
                        onClick={() =>
                          onUpdateQuantity(item.id, item.quantity - 1)
                        }
                      >
                        -
                      </Button>
                      <span className="mx-2">{item.quantity}</span>
                      <Button
                        onClick={() =>
                          onUpdateQuantity(item.id, item.quantity + 1)
                        }
                      >
                        +
                      </Button>
                    </div>
                    <input
                      type="text"
                      placeholder="Add note"
                      value={item.note || ""}
                      onChange={(e) => onUpdateNote(item.id, e.target.value)}
                      className="mt-2 p-2 border rounded"
                    />
                  </div>
                  <Button
                    variant="destructive"
                    onClick={() => onRemoveItem(item.id)}
                    className="ml-4"
                  >
                    <Trash className="w-5 h-5" />
                  </Button>
                </li>
              ))}
            </ul>
          )}
        </div>
        <div className="mt-6 border-t pt-4">
          <div className="flex justify-between items-center">
            <h4 className="text-lg font-semibold">Total:</h4>
            <span className="text-lg font-semibold">
              Rp {totalPrice.toLocaleString()}
            </span>
          </div>
          <Button
            variant="default"
            className="mt-4 w-full"
            onClick={onCheckout}
            disabled={items.length === 0}
          >
            Proceed
          </Button>
          <Button
            variant="outline"
            className="mt-2 w-full"
            onClick={() => console.log("Cancel Order")}
          >
            Cancel
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default Cart;
