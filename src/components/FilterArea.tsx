import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import { items } from "@/constants";

// radio group schema
const RadioGroupSchema = z.object({
  type: z.enum(["all", "Read", "unRead"], {
    required_error: "You need to select a notification type.",
  }),
});

// checkbox schema
const CheckBoxSchema = z.object({
  items: z.array(z.string()).refine((value) => value.some((item) => item), {
    message: "You have to select at least one item.",
  }),
});

type FilterAreaProps = {
  setStatus: React.Dispatch<React.SetStateAction<"Read" | "unRead" | "all">>;
  setFilterStatus: React.Dispatch<React.SetStateAction<boolean>>;
  filterStatus: boolean;
};

const FilterArea = ({
  setStatus,
  setFilterStatus,
  filterStatus,
}: FilterAreaProps) => {
  return (
    <div className="flex flex-col w-full gap-3">
      {/* filter area */}
      <section className="w-full p-3 mb-3">
        <CheckboxReactHookFormMultiple
          setFilterStatus={setFilterStatus}
          filterStatus={filterStatus}
        />
      </section>
      {/* radio group */}
      <section className="flex w-full gap-3 p-3 mb-3">
        <RadioGroupForm setStatus={setStatus} />
      </section>
    </div>
  );
};

export default FilterArea;

// radio group form
function RadioGroupForm({
  setStatus,
}: Omit<FilterAreaProps, "setFilterStatus" | "filterStatus">) {
  const form = useForm<z.infer<typeof RadioGroupSchema>>({
    resolver: zodResolver(RadioGroupSchema),
  });

  function onSubmit(data: z.infer<typeof RadioGroupSchema>) {
    console.log(data);
    setStatus(data.type);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-2/3 space-y-6">
        <FormField
          control={form.control}
          name="type"
          render={({ field }) => (
            <FormItem className="space-y-3">
              <FormLabel>Filter Data By...</FormLabel>
              <FormControl>
                <RadioGroup
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                  className="flex flex-col space-y-1"
                >
                  <FormItem className="flex items-center space-x-3 space-y-0">
                    <FormControl>
                      <RadioGroupItem value="all" />
                    </FormControl>
                    <FormLabel className="font-normal">
                      All new messages
                    </FormLabel>
                  </FormItem>
                  <FormItem className="flex items-center space-x-3 space-y-0">
                    <FormControl>
                      <RadioGroupItem value="Read" />
                    </FormControl>
                    <FormLabel className="font-normal">Read messages</FormLabel>
                  </FormItem>
                  <FormItem className="flex items-center space-x-3 space-y-0">
                    <FormControl>
                      <RadioGroupItem value="unRead" />
                    </FormControl>
                    <FormLabel className="font-normal">
                      Unread messages
                    </FormLabel>
                  </FormItem>
                </RadioGroup>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
}

// checkbox form
export function CheckboxReactHookFormMultiple({
  setFilterStatus,
  filterStatus,
}: Omit<FilterAreaProps, "setStatus">) {
  const form = useForm<z.infer<typeof CheckBoxSchema>>({
    resolver: zodResolver(CheckBoxSchema),
    defaultValues: {
      items: ["recants", "followers"],
    },
  });

  function onSubmit(data: z.infer<typeof CheckBoxSchema>) {
    console.log(data);
    setFilterStatus(!filterStatus);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="items"
          render={() => (
            <FormItem>
              <div className="mb-4">
                <FormLabel className="text-base">Filter By...</FormLabel>
              </div>
              {items.map((item) => (
                <FormField
                  key={item.id}
                  control={form.control}
                  name="items"
                  render={({ field }) => {
                    return (
                      <FormItem
                        key={item.id}
                        className="flex flex-row items-start space-x-3 space-y-0"
                      >
                        <FormControl>
                          <Checkbox
                            checked={field.value?.includes(item.id)}
                            onCheckedChange={(checked) => {
                              return checked
                                ? field.onChange([...field.value, item.id])
                                : field.onChange(
                                    field.value?.filter(
                                      (value) => value !== item.id
                                    )
                                  );
                            }}
                          />
                        </FormControl>
                        <FormLabel className="text-sm font-normal">
                          {item.label}
                        </FormLabel>
                      </FormItem>
                    );
                  }}
                />
              ))}
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
}
