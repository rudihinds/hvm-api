import {
  calculateFamilyMemberMonthlyCosts,
  calculateRent,
  getCostsForCity,
} from "./injectMonthlyCostsFromPrices";
import { expect } from "chai";

describe("injectMonthlyCostsFromPrices", () => {
  describe("calculateFamilyMemberMonthlyCosts", () => {
    it("should calculate monthly total for a family member correctly", () => {
      const city = {
        prices: [
          {
            item_name: "Milk (regular), (1 liter)",
            average_price: 1.5,
          },
        ],
      };
      const familyMember = "adult";
      const socialClass = "workingClassFreq";
      const acc = 0;

      const [total] = calculateFamilyMemberMonthlyCosts(
        city,
        acc,
        familyMember,
        socialClass,
      );

      expect(total).to.equal(4.5); // 1.5 price * 3 purchase frequency
    });

    it("should handle errors when calculating total", () => {
      const city = {
        prices: [
          {
            item_name: "Invalid Item",
            average_price: "invalid",
          },
        ],
      };
      const familyMember = "adult";
      const socialClass = "workingClassFreq";
      const acc = 0;

      const [total] = calculateFamilyMemberMonthlyCosts(
        city,
        acc,
        familyMember,
        socialClass,
      );

      expect(total).to.equal(0);
    });
  });

  describe("calculateRent", () => {
    it("should calculate rent for family size and social class", () => {
      const familyMembers = ["adult", "adult", "child", "child"];
      const city = {
        prices: [
          {
            item_name:
              "Apartment (3 bedrooms) Outside of Centre, Rent Per Month",
            average_price: 1000,
          },
        ],
      };
      const socialClass = "workingClassFreq";

      const rent = calculateRent(familyMembers, city, socialClass);

      expect(rent).to.equal(1000);
    });

    it("should estimate rent if exact match not found", () => {
      const familyMembers = ["adult", "adult", "child", "child", "child"];
      const city = {
        prices: [
          {
            item_name:
              "Apartment (3 bedrooms) Outside of Centre, Rent Per Month",
            average_price: 1000,
          },
        ],
      };
      const socialClass = "workingClassFreq";

      const rent = calculateRent(familyMembers, city, socialClass);

      expect(rent).to.equal(1250); // 1000 for 3br + 250 per addtl room
    });
  });

  describe("getCostsForCity", () => {
    it("should calculate costs for all family types and social classes", () => {
      const city = {
        name: "Test City",
        prices: [
          {
            item_name: "Milk (regular), (1 liter)",
            average_price: 1.5,
          },
        ],
      };

      const costs = getCostsForCity(city);

      expect(costs).to.have.property("Test City");
      expect(costs["Test City"]).to.have.property("workingClassFreq");
      expect(costs["Test City"]).to.have.property("middleClassFreq");
      expect(costs["Test City"]).to.have.property("highValueFreq");
      expect(costs["Test City"].workingClassFreq).to.have.property("single");
      expect(costs["Test City"].workingClassFreq).to.have.property("couple");
      expect(costs["Test City"].workingClassFreq).to.have.property(
        "smallFamily",
      );
      expect(costs["Test City"].workingClassFreq).to.have.property(
        "largeFamily",
      );
    });
  });
});
