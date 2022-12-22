import React from "react";
import { useToggle, upperFirst } from "@mantine/hooks";
import { useForm } from "@mantine/form";
import {
  TextInput,
  PasswordInput,
  Text,
  Paper,
  Group,
  PaperProps,
  Button,
  Divider,
  Checkbox,
  Anchor,
  Stack,
} from "@mantine/core";
import Head from "next/head";
// import { GoogleButton, TwitterButton } from '../SocialButtons/SocialButtons';

const Authentication = () => {
  const [type, toggle] = useToggle(["login", "register"]);
  const form = useForm({
    initialValues: {
      email: "",
      chapter: "",
      password: "",
      terms: true,
    },

    validate: {
      email: (val) => (/^\S+@\S+$/.test(val) ? null : "Invalid email"),
      password: (val) =>
        val.length <= 6
          ? "Password should include at least 6 characters"
          : null,
    },
  });
  const handleSumbit = (values: typeof form.values) => {
    console.log(values);
  };
  return (
    <>
      <Head>
        <title>MSSN APP - {type === "login" ? "Login" : "Register"}</title>
      </Head>
      <main className="flex flex-col items-center justify-center w-full h-full container">
        <div className="lg:w-2/5 md:w-2/5 sm:w-1/2 w-full">
          <Paper radius="md" p="xl" withBorder>
            <Text size="lg" weight={500}>
              Welcome to MSSN Software, {type} with
            </Text>

            <Group grow mb="md" mt="md">
              <Button className="rounded-full">Google</Button>
            </Group>

            <Divider
              label="Or continue with email"
              labelPosition="center"
              my="lg"
            />

            <form onSubmit={form.onSubmit(handleSumbit)}>
              <Stack>
                {type === "register" && (
                  <TextInput
                    label="Chapter"
                    placeholder="Your chapter"
                    value={form.values.chapter}
                    onChange={(event) =>
                      form.setFieldValue("chapter", event.currentTarget.value)
                    }
                  />
                )}

                <TextInput
                  required
                  label="Email"
                  placeholder="hello@mantine.dev"
                  value={form.values.email}
                  onChange={(event) =>
                    form.setFieldValue("email", event.currentTarget.value)
                  }
                  error={form.errors.email && "Invalid email"}
                />

                <PasswordInput
                  required
                  label="Password"
                  placeholder="Your password"
                  value={form.values.password}
                  onChange={(event) =>
                    form.setFieldValue("password", event.currentTarget.value)
                  }
                  error={
                    form.errors.password &&
                    "Password should include at least 6 characters"
                  }
                />

                {type === "register" && (
                  <Checkbox
                    label="I accept terms and conditions"
                    checked={form.values.terms}
                    onChange={(event) =>
                      form.setFieldValue("terms", event.currentTarget.checked)
                    }
                  />
                )}
              </Stack>

              <Group position="apart" mt="xl">
                <Anchor
                  component="button"
                  type="button"
                  color="dimmed"
                  onClick={() => toggle()}
                  size="xs"
                >
                  {type === "register"
                    ? "Already have an account? Login"
                    : "Don't have an account? Register"}
                </Anchor>
                <Button type="submit">{upperFirst(type)}</Button>
              </Group>
            </form>
          </Paper>
        </div>
      </main>
    </>
  );
};

export default Authentication;
