import React, { useContext } from "react";
import { Card, CardFooter, Image, Button } from "@nextui-org/react";
import { AddToCartContext } from "../../Contexts/AddToCartContext";

export default function Cards({ use }) {
  const { setItem, item } = useContext(AddToCartContext);
  return (
    <Card isFooterBlurred radius="lg" className="border-none mx-10">
      <Image
        alt="Woman listing to music"
        className="object-cover"
        height={600}
        src={`${use.image}`}
        width={600}
      />
      <CardFooter className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
        <p className="text-tiny text-white/80 ">Available soon.</p>
        <Button
          className="text-tiny text-white bg-black/20"
          variant="flat"
          color="default"
          radius="lg"
          size="sm"
          onClick={() => {
            setItem(item + 1);
          }}
        >
          Add to Cart
        </Button>
        <Button
          className="text-tiny text-white bg-black/20"
          variant="flat"
          color="default"
          radius="lg"
          size="sm"
          onClick={() => {
            item > 1 ? setItem(item - 1) : setItem(null);
          }}
        >
          Remove to Cart
        </Button>
      </CardFooter>
    </Card>
  );
}
