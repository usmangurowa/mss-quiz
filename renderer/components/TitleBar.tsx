import React from "react";
import { createStyles, Group, Tabs, ActionIcon } from "@mantine/core";
import { IconX, IconSquare, IconMinus, IconArrowBack } from "@tabler/icons";
import { ipcRenderer } from "electron";
import { useRouter } from "next/router";
const tabs: string[] = ["Home", "Quiz"];

const TitleBar = () => {
  const { classes, theme, cx } = useStyles();
  const router = useRouter();

  const handleSendIpc = (message: "quit" | "minimize" | "maximize") => {
    ipcRenderer.send(message);
  };

  return (
    <nav
      className={`flex flex-row items-center justify-between  mb-4 ${
        theme.colorScheme === "dark" ? "bg-transparent" : "bg-primary-light"
      }`}
    >
      <div className="border border-gray-800">
        <Tabs
          defaultValue="Home"
          variant="outline"
          classNames={{
            root: classes.tabs,
            tabsList: classes.tabsList,
            tab: classes.tab,
          }}
        >
          <Tabs.List sx={{ borderRadius: 0 }} className="rounded-none">
            {tabs.map((tab) => (
              <Tabs.Tab value={tab} key={tab}>
                {tab}
              </Tabs.Tab>
            ))}
          </Tabs.List>
        </Tabs>
      </div>
      <div className="draggable-nav-bar flex-1 h-full text-center flex items-center justify-center">
        <span>{typeof window !== "undefined" && window.document.title}</span>
      </div>
      <Group spacing={2} align="center" className="mx-2 ">
        {router.pathname !== "/home" && (
          <ActionIcon
            onClick={() => router.back()}
            title="back"
            className="hover:bg-primary-light-2  text-black hover:text-white"
          >
            <IconArrowBack size={14} />
          </ActionIcon>
        )}
        <ActionIcon
          onClick={() => handleSendIpc("minimize")}
          title="minimize"
          className="hover:bg-primary-light-2  text-black hover:text-white"
        >
          <IconMinus size={14} />
        </ActionIcon>
        <ActionIcon
          onClick={() => handleSendIpc("maximize")}
          title="maximize"
          className="hover:bg-primary-light-2  text-black hover:text-white"
        >
          <IconSquare size={14} />
        </ActionIcon>
        <ActionIcon
          onClick={() => handleSendIpc("quit")}
          title="Close"
          className="hover:bg-danger  text-black hover:text-white"
        >
          <IconX />
        </ActionIcon>
      </Group>
    </nav>
  );
};

export default TitleBar;

const useStyles = createStyles((theme) => ({
  header: {
    paddingTop: theme.spacing.sm,
    backgroundColor:
      theme.colorScheme === "dark"
        ? theme.colors.dark[6]
        : theme.colors.gray[0],
    borderBottom: `1px solid ${
      theme.colorScheme === "dark" ? "transparent" : theme.colors.gray[2]
    }`,
    marginBottom: 120,
  },

  mainSection: {
    paddingBottom: theme.spacing.sm,
  },

  user: {
    color: theme.colorScheme === "dark" ? theme.colors.dark[0] : theme.black,
    padding: `${theme.spacing.xs}px ${theme.spacing.sm}px`,
    borderRadius: theme.radius.sm,
    transition: "background-color 100ms ease",

    "&:hover": {
      backgroundColor:
        theme.colorScheme === "dark" ? theme.colors.dark[8] : theme.white,
    },

    [theme.fn.smallerThan("xs")]: {
      display: "none",
    },
  },

  burger: {
    [theme.fn.largerThan("xs")]: {
      display: "none",
    },
  },

  userActive: {
    backgroundColor:
      theme.colorScheme === "dark" ? theme.colors.dark[8] : theme.white,
  },

  tabs: {
    [theme.fn.smallerThan("sm")]: {
      display: "none",
    },
  },

  tabsList: {
    borderBottom: "0 !important",
  },

  tab: {
    fontWeight: 500,
    height: 38,
    backgroundColor: "transparent",

    "&:hover": {
      backgroundColor:
        theme.colorScheme === "dark"
          ? theme.colors.dark[5]
          : theme.colors.gray[1],
    },

    "&[data-active]": {
      backgroundColor:
        theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.white,
      borderColor:
        theme.colorScheme === "dark"
          ? theme.colors.dark[7]
          : theme.colors.gray[2],
    },
  },
}));
