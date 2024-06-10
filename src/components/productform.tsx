
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Form, FormItem, FormLabel, FormField, FormControl, FormMessage } from "./ui/form"
import { Button } from "./ui/button"
import { RadioGroup, RadioGroupItem } from "./ui/radiogroup"
import { Input } from "./ui/input"
import { Textarea } from "./ui/textarea"
import { generateDiscountCode } from "../lib/utils"
import { useSearchParams } from "react-router-dom"
import { selectFilters, setFilters } from "../store/productfilterslice"
import { useAppDispatch, useAppSelector } from "../store/hooks"



const formSchema = z.object(
    {
        options: z.enum(["Option A", "Option B", "Option C"], {
            required_error: "You need to select an option.",
        }),
        discount: z.string().regex(new RegExp(/^DISCOUNT\d{4}$/), 'Discount must have the following pattern DISCOUNT2024'),
        note: z.optional(z.string())
    }
)

export function ProductForm() {
    const [_searchParams, setSearchParams] = useSearchParams();
    const { discount, note, options } = useAppSelector(selectFilters);
    const dispatch = useAppDispatch()
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues:
        {
            discount, note, options
        }
    })

    function onSubmit(data: z.infer<typeof formSchema>) {
        const params = formSchema.parse(data);
        dispatch(setFilters(params))
        setSearchParams(params)
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="w-2/3 space-y-6">
                <FormField
                    control={form.control}
                    name="options"
                    render={({ field }) => (
                        <FormItem className="space-y-3">
                            <FormLabel>Select Variant</FormLabel>
                            <FormControl>
                                <RadioGroup
                                    onValueChange={field.onChange}
                                    defaultValue={field.value}
                                    className="flex flex-col space-y-1"
                                >
                                    <FormItem className="flex items-center space-x-3 space-y-0">
                                        <FormControl>
                                            <RadioGroupItem value="Option A" />
                                        </FormControl>
                                        <FormLabel className="font-normal">
                                            Option A
                                        </FormLabel>
                                    </FormItem>
                                    <FormItem className="flex items-center space-x-3 space-y-0">
                                        <FormControl>
                                            <RadioGroupItem value="Option B" />
                                        </FormControl>
                                        <FormLabel className="font-normal">
                                            Option B
                                        </FormLabel>
                                    </FormItem>
                                    <FormItem className="flex items-center space-x-3 space-y-0">
                                        <FormControl>
                                            <RadioGroupItem value="Option C" />
                                        </FormControl>
                                        <FormLabel className="font-normal"> Option C</FormLabel>
                                    </FormItem>
                                </RadioGroup>
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="discount"
                    render={({ field }) => (
                        <FormItem className="space-y-3">
                            <FormLabel> Discount Code</FormLabel>
                            <FormControl>
                                <div className="flex flex-wrap lg:flex-nowrap gap-4">
                                    <Input onChange={field.onChange}
                                        defaultValue={field.value} type="text" placeholder="DISCOUNT CODE" />
                                    <Button type="button" onClick={() => {
                                        const newCode = generateDiscountCode();
                                        form.setValue('discount', newCode);
                                        form.trigger('discount');
                                    }}>Generate Code</Button>
                                </div>

                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="note"
                    render={({ field }) => (
                        <FormItem className="space-y-3">
                            <FormLabel> Optional Note </FormLabel>
                            <FormControl>
                                <Textarea onChange={field.onChange}
                                    defaultValue={field.value} placeholder="Type your message here." />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <Button type="submit">Submit</Button>
            </form>
        </Form>
    )
}
