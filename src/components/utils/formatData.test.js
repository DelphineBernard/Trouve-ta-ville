import formatData from "./formatData.js";

describe("On teste la fonction formatData", () => {
    describe("Structure", () => {
        test("Cela devrait être une fonction", () => {
            expect(typeof formatData).toBe("function")
            });
    });

    describe("Execution", () => {
        test("Si population >= 1000, le résultat est divisé par 1000 et on ajoute K", () => {
            expect(formatData(11792)).toBe("11,79 K")
        });
        test("Si population >= 1 000 000, le résultat est divisé par 1 000 000 et on ajoute M", () => {
            expect(formatData(2145906)).toBe("2,15 M")
        });
        test("Si population < 1000, le résultat est renvoyé tel quel", () => {
            expect(formatData(918)).toBe(918)
        });
    });
});
