import React from 'react';

export interface IKeepAwakeContext {
  keepAwake: boolean;
  setKeepAwake: (awake: boolean) => void;
}

export const KeepAwakeContext = React.createContext<IKeepAwakeContext>({
  keepAwake: false,
  setKeepAwake: () => {},
});

export const {
  Provider: KeepAwakeProvider,
  Consumer: KeepAwakeConsumer,
} = KeepAwakeContext;

export const useKeepAwake = () => {
  const keepAwake = React.useContext(KeepAwakeContext);
  return keepAwake;
};
