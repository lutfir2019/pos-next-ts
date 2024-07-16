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
import Input from "@/components/global/input/inputCustom";

interface CartItem {
  id: number;
  name: string;
  quantity: number;
  price: number;
  note?: string;
  imageUrl?: string;
}

interface CartProps {
  items: CartItem[];
  onRemoveItem: (id: number) => void;
  onUpdateQuantity: (idx: any, val: any) => void;
}

const Cart: React.FC<CartProps> = ({
  items,
  onRemoveItem,
  onUpdateQuantity,
}) => {
  const totalPrice = items.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <Card className="w-full md:max-w-xs">
      <CardHeader>
        <CardTitle>Order list</CardTitle>
        <CardDescription>#08098999917</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="max-h-[50svh] overflow-auto no-scrollbar shadow">
          {items.length === 0 ? (
            <p className="text-center text-gray-500">Your cart is empty.</p>
          ) : (
            <ul className="space-y-4">
              {items.map((item, index) => (
                <li
                  key={item.id}
                  className="flex justify-between items-end border-b pb-2"
                >
                  <div className="flex flex-col w-full">
                    <h4 className="text-base">{item.name}</h4>
                    <p className="text-sm font-semibold text-muted-foreground">
                      Rp {item.price.toLocaleString()}
                    </p>
                    <div className="flex items-center mt-2">
                      <Button
                        type="button"
                        className="w-5 h-auto"
                        disabled={item.quantity < 2}
                        onClick={() =>
                          onUpdateQuantity(index, {
                            ...item,
                            quantity: item.quantity - 1,
                          })
                        }
                      >
                        -
                      </Button>
                      <span className="mx-2">{item.quantity}</span>
                      <Button
                        type="button"
                        className="w-5 h-auto"
                        onClick={() =>
                          onUpdateQuantity(index, {
                            ...item,
                            quantity: item.quantity + 1,
                          })
                        }
                      >
                        +
                      </Button>
                    </div>
                    <Input
                      name={`cartItems[${index}].note`}
                      placeholder="Input Note"
                    />
                  </div>
                  <Button
                    type="button"
                    variant="destructive"
                    onClick={() => onRemoveItem(index)}
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
            type="submit"
            variant="default"
            className="mt-4 w-full"
            disabled={items.length === 0}
          >
            Proceed
          </Button>
          <Button
            type="button"
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
