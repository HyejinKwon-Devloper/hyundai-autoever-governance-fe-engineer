import { timestampToYYYYMMDD } from "@/app/utils/date";

describe('timestampToYYYYMMDD', () => {
    test('convert format to yyyymmdd with sperator', () => {
        expect(timestampToYYYYMMDD(1744381656810, ",")).toBe("2025,04,11");
        expect(timestampToYYYYMMDD(1744381656810, "-")).toBe("2025-04-11");
        expect(timestampToYYYYMMDD(1744381656810, ".")).toBe("2025.04.11");
      });
})