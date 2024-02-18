import { Button, buttonVariants, myVariants } from "@/app/components/ui/button";

export default function Design() {
  const variantList = Object.keys(myVariants.variant);
  return (
    <main className="flex min-h-screen flex-col p-24">
      <h1 className="m-4">Buttons:</h1>
      <div className="flex justify-around">
        {variantList.map((variant: string) => {
          console.log(variant);
          return (
            <Button
              key={variant}
              variant={variant as keyof typeof buttonVariants}
            >
              {variant}
            </Button>
          );
        })}
        {/* <Checkbox></Checkbox> */}
      </div>
    </main>
  );
}
