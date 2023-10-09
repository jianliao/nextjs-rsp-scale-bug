"use client";

import Scale from "@/components/Scale";
import {
  Button,
  Provider,
  SSRProvider,
  Switch,
  defaultTheme,
} from "@adobe/react-spectrum";

export default function Home() {
  return (
    <Provider theme={defaultTheme}>
      <p>
        <Button variant="accent" onPress={() => alert("Hey there!")}>
          Hello React Spectrum!
        </Button>
      </p>
      <p>
        <Switch id="Reduce">Reduce motion</Switch>
      </p>
      <div>
        <Scale />
      </div>
    </Provider>
  );
}
