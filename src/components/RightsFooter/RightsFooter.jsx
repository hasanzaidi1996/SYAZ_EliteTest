import { Text } from "@mantine/core";
import classes from "./RightsFooter.module.css";

const RightsFooter = () => {
  return (
    <div className={classes.wrapper}>
      <Text className={classes.text}>
        © 2023 Imperial Locum. All rights reserved.
      </Text>
    </div>
  );
};

export default RightsFooter;
