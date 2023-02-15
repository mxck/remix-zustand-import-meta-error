import { create } from "zustand";

interface BearStore {
  bears: number;
  increasePopulation: () => void;
  removeAllBears: () => void;
}

const useBearStore = create<BearStore>((set) => ({
  bears: 0,
  increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),
  removeAllBears: () => set({ bears: 0 }),
}));

export default function Index() {
  const { bears, removeAllBears, increasePopulation } = useBearStore();

  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>
      <h1>🐻 Bears</h1>
      <p>There are {bears} bears in the store.</p>
      <button onClick={increasePopulation}>Add a bear</button>
      <button onClick={removeAllBears}>Remove all bears</button>
    </div>
  );
}
