import { Button, Label, TextInput } from "flowbite-react";
import React from "react";
import { useForm } from "react-hook-form";

import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
const schema = yup.object().shape({
  name: yup
    .string()
    .required("Name is required.")
    .min(4, "Provide atleast 4 characters.")
    .max(100, "Cannot provide more than 100 characters."),
  price: yup
    .string()
    .required("How much did you pay??")

    .max(6, "You are not that rich."),
});
export default function page() {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    mode: "onBlur",
    resolver: yupResolver(schema),
  });
  const onSubmit = (d) => console.log(d);
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-4  max-w-md  justify-between items-center mx-auto"
    >
      <div className="w-full">
        <div className="mb-2 block">
          <Label htmlFor="small" value="Name" />
        </div>
        <TextInput id="small" type="text" sizing="md" {...register("name")} />
        <span className="text-red-600 ">
          {errors?.name ? errors?.name.message : null}
        </span>
      </div>
      <div className="w-full">
        <div className="mb-2 block">
          <Label htmlFor="price" value="Price" />
        </div>
        <TextInput
          id="price"
          type="number"
          sizing="md"
          {...register("price")}
        />

        <span className="text-red-600 ">
          {errors?.price ? errors?.price.message : null}
        </span>
      </div>
      <Button type="submit" className="w-full">
        Add your daily expense
      </Button>
    </form>
  );
}
