import { Button } from "@/components/ui/button"
import { Field, FieldDescription, FieldGroup, FieldLabel, FieldLegend, FieldSeparator, FieldSet } from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { useNavigate } from "react-router-dom"

export const Auth = () => {
    const navigate = useNavigate();

    const onSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
        e.preventDefault();
        navigate("/");
    }

    return (
        <div className="w-full max-w-md mx-auto mt-10">
            <form onSubmit={onSubmit}>
                <FieldGroup>
                    <FieldSet>
                        <FieldLegend>Sign in</FieldLegend>
                        <FieldGroup>
                            <Field>
                                <FieldLabel htmlFor="username">
                                    Username
                                </FieldLabel>
                                <Input
                                    id="username"
                                    placeholder="john_doe"
                                />
                            </Field>
                            <Field>
                                <FieldLabel htmlFor="password">
                                    Password
                                </FieldLabel>
                                <Input
                                    id="password"
                                    type="password"
                                />
                                <FieldDescription>
                                    Pasword must be at least 8 charaters long
                                </FieldDescription>
                            </Field>
                        </FieldGroup>
                    </FieldSet>
                    <FieldSeparator />
                    <Field orientation="horizontal">
                        <Button type="submit">Submit</Button>
                        <Button variant="outline" type="button" onClick={() => navigate("/")}>
                            Cancel
                        </Button>
                    </Field>
                </FieldGroup>
            </form>
        </div>
    )
}