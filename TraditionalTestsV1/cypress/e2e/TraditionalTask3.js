const url = Cypress.env("urlVersion");

const task = "Task 3";
const testName = "Product Details test";
const browser = `${Cypress.browser.name} ${Cypress.browser.version}`;

const expectedNumberOfResults = 2;

describe("test full screen layout", () => {
  let device = {
    name: "Laptop",
    width: 1200,
    height: 700,
  };
  let viewport = `${device.width.toString()}x${device.height.toString()}`;

  it("show product image", () => {
    cy.viewport(device.width, device.height);
    cy.visit(url);
    cy.findByRole("checkbox", { name: /black/i }).click();
    cy.findByRole("button", { name: /filter/i }).click();
    cy.get(".grid_item").first().click();
    cy.checkImageURLPresent(
      browser,
      device.name,
      viewport,
      task,
      testName,
      "#shoe_img"
    );
  });

  it("Check for SKU", () => {
    cy.viewport(device.width, device.height);
    cy.visit(url);
    cy.findByRole("checkbox", { name: /black/i }).click();
    cy.findByRole("button", { name: /filter/i }).click();
    cy.get(".grid_item").first().click();
    cy.checkCSSProperty(
      browser,
      device.name,
      viewport,
      task,
      testName,
      "#SMALL____84",
      "color",
      "rgb(68, 68, 68)"
    );
  });

  it("Show sale price in correct format", () => {
    let salePrice = "$33.00";
    cy.viewport(device.width, device.height);
    cy.visit(url);
    cy.findByRole("checkbox", { name: /black/i }).click();
    cy.findByRole("button", { name: /filter/i }).click();
    cy.get(".grid_item").first().click();
    cy.checkValue(
      browser,
      device.name,
      viewport,
      task,
      testName,
      "#new_price",
      salePrice
    );
  });

  it("Show default size option as Small", () => {
    let defaultSize = "Small (S)";
    cy.viewport(device.width, device.height);
    cy.visit(url);
    cy.findByRole("checkbox", { name: /black/i }).click();
    cy.findByRole("button", { name: /filter/i }).click();
    cy.get(".grid_item").first().click();
    cy.get(".current");
    cy.checkValue(
      browser,
      device.name,
      viewport,
      task,
      testName,
      ".current",
      defaultSize
    );
  });
  it("Reviews & Stars layout is correct", () => {
    cy.viewport(device.width, device.height);
    cy.visit(url);
    cy.findByRole("checkbox", { name: /black/i }).click();
    cy.findByRole("button", { name: /filter/i }).click();
    cy.get(".grid_item").first().click();
    cy.checkCSSPropertyofLastChild(
      browser,
      device.name,
      viewport,
      task,
      testName,
      ".rating",
      "margin-left",
      "0px"
    );
  });

  it("account icon layout is correct", () => {
    cy.viewport(device.width, device.height);
    cy.visit(url);
    cy.findByRole("checkbox", { name: /black/i }).click();
    cy.findByRole("button", { name: /filter/i }).click();
    cy.get(".grid_item").first().click();
    cy.checkCSSPropertyofParentsParent(
      browser,
      device.name,
      viewport,
      task,
      testName,
      ".access_link",
      "margin-left",
      "20px"
    );
  });

  it("wishlist icon layout is correct", () => {
    cy.viewport(device.width, device.height);
    cy.visit(url);
    cy.findByRole("checkbox", { name: /black/i }).click();
    cy.findByRole("button", { name: /filter/i }).click();
    cy.get(".grid_item").first().click();
    cy.checkCSSPropertyofParent(
      browser,
      device.name,
      viewport,
      task,
      testName,
      ".wishlist",
      "margin-left",
      "20px"
    );
  });

  it("Cart Button icon layout is correct", () => {
    cy.viewport(device.width, device.height);
    cy.visit(url);
    cy.findByRole("checkbox", { name: /black/i }).click();
    cy.findByRole("button", { name: /filter/i }).click();
    cy.get(".grid_item").first().click();
    cy.checkCSSPropertyofParentsParent(
      browser,
      device.name,
      viewport,
      task,
      testName,
      ".cart_bt",
      "margin-left",
      "20px"
    );
  });
});

describe("test tablet layout", () => {
  let device = {
    name: "Tablet",
    width: 768,
    height: 700,
  };
  let viewport = `${device.width.toString()}x${device.height.toString()}`;

  it("show product image", () => {
    cy.viewport(device.width, device.height);
    cy.visit(url);
    cy.get("#ti-filter").click();
    cy.findByRole("checkbox", { name: /black/i }).click();
    cy.findByRole("button", { name: /filter/i }).click();
    cy.get(".grid_item").first().click();
    cy.checkImageURLPresent(
      browser,
      device.name,
      viewport,
      task,
      testName,
      "#shoe_img"
    );
  });

  it("Check for SKU", () => {
    cy.viewport(device.width, device.height);
    cy.visit(url);
    cy.get("#ti-filter").click();
    cy.findByRole("checkbox", { name: /black/i }).click();
    cy.findByRole("button", { name: /filter/i }).click();
    cy.get(".grid_item").first().click();
    cy.checkCSSProperty(
      browser,
      device.name,
      viewport,
      task,
      testName,
      "#SMALL____84",
      "color",
      "rgb(68, 68, 68)"
    );
  });

  it("Show sale price in correct format", () => {
    let salePrice = "$33.00";
    cy.viewport(device.width, device.height);
    cy.visit(url);
    cy.get("#ti-filter").click();
    cy.findByRole("checkbox", { name: /black/i }).click();
    cy.findByRole("button", { name: /filter/i }).click();
    cy.get(".grid_item").first().click();
    cy.checkValue(
      browser,
      device.name,
      viewport,
      task,
      testName,
      "#new_price",
      salePrice
    );
  });

  it("Show default size option as Small", () => {
    let defaultSize = "Small (S)";
    cy.viewport(device.width, device.height);
    cy.visit(url);
    cy.get("#ti-filter").click();
    cy.findByRole("checkbox", { name: /black/i }).click();
    cy.findByRole("button", { name: /filter/i }).click();
    cy.get(".grid_item").first().click();
    cy.checkValue(
      browser,
      device.name,
      viewport,
      task,
      testName,
      ".current",
      defaultSize
    );
  });

  it("Reviews & Stars layout is correct", () => {
    cy.viewport(device.width, device.height);
    cy.visit(url);
    cy.get("#ti-filter").click();
    cy.findByRole("checkbox", { name: /black/i }).click();
    cy.findByRole("button", { name: /filter/i }).click();
    cy.get(".grid_item").first().click();
    cy.checkCSSPropertyofLastChild(
      browser,
      device.name,
      viewport,
      task,
      testName,
      ".rating",
      "margin-left",
      "0px"
    );
  });

  it("add to cart button layout is correct", () => {
    cy.viewport(device.width, device.height);
    cy.visit(url);
    cy.get("#ti-filter").click();
    cy.findByRole("checkbox", { name: /black/i }).click();
    cy.findByRole("button", { name: /filter/i }).click();
    cy.get(".grid_item").first().click();
    cy.checkCSSProperty(
      browser,
      device.name,
      viewport,
      task,
      testName,
      ".btn_add_to_cart",
      "margin-top",
      "0px"
    );
  });

  it("account icon layout is correct", () => {
    cy.viewport(device.width, device.height);
    cy.visit(url);
    cy.get("#ti-filter").click();
    cy.findByRole("checkbox", { name: /black/i }).click();
    cy.findByRole("button", { name: /filter/i }).click();
    cy.get(".grid_item").first().click();
    cy.checkCSSPropertyofParentsParent(
      browser,
      device.name,
      viewport,
      task,
      testName,
      ".access_link",
      "margin-left",
      "20px"
    );
  });

  it("wishlist icon layout is correct", () => {
    cy.viewport(device.width, device.height);
    cy.visit(url);
    cy.get("#ti-filter").click();
    cy.findByRole("checkbox", { name: /black/i }).click();
    cy.findByRole("button", { name: /filter/i }).click();
    cy.get(".grid_item").first().click();
    cy.checkCSSPropertyofParent(
      browser,
      device.name,
      viewport,
      task,
      testName,
      ".wishlist",
      "margin-left",
      "20px"
    );
  });

  it("Cart Button icon layout is correct", () => {
    cy.viewport(device.width, device.height);
    cy.visit(url);
    cy.get("#ti-filter").click();
    cy.findByRole("checkbox", { name: /black/i }).click();
    cy.findByRole("button", { name: /filter/i }).click();
    cy.get(".grid_item").first().click();
    cy.checkCSSPropertyofParentsParent(
      browser,
      device.name,
      viewport,
      task,
      testName,
      ".cart_bt",
      "margin-left",
      "20px"
    );
  });
});

if (Cypress.isBrowser("chrome")) {
  describe("test mobile layout", () => {
    let device = {
      name: "Mobile",
      width: 500,
      height: 700,
    };
    let viewport = `${device.width.toString()}x${device.height.toString()}`;

    it("show product image", () => {
      cy.viewport(device.width, device.height);
      cy.visit(url);
      cy.get("#ti-filter").click();
      cy.findByRole("checkbox", { name: /black/i }).click();
      cy.findByRole("button", { name: /filter/i }).click();
      cy.get(".grid_item").first().click();
      cy.checkImageURLPresent(
        browser,
        device.name,
        viewport,
        task,
        testName,
        "#shoe_img"
      );
    });

    it("Check for SKU", () => {
      cy.viewport(device.width, device.height);
      cy.visit(url);
      cy.get("#ti-filter").click();
      cy.findByRole("checkbox", { name: /black/i }).click();
      cy.findByRole("button", { name: /filter/i }).click();
      cy.get(".grid_item").first().click();
      cy.checkCSSProperty(
        browser,
        device.name,
        viewport,
        task,
        testName,
        "#SMALL____84",
        "color",
        "rgb(68, 68, 68)"
      );
    });

    it("Show sale price in correct format", () => {
      let salePrice = "$33.00";
      cy.viewport(device.width, device.height);
      cy.visit(url);
      cy.get("#ti-filter").click();
      cy.findByRole("checkbox", { name: /black/i }).click();
      cy.findByRole("button", { name: /filter/i }).click();
      cy.get(".grid_item").first().click();
      cy.checkValue(
        browser,
        device.name,
        viewport,
        task,
        testName,
        "#new_price",
        salePrice
      );
    });

    it("Show default size option as Small", () => {
      let defaultSize = "Small (S)";
      cy.viewport(device.width, device.height);
      cy.visit(url);
      cy.get("#ti-filter").click();
      cy.findByRole("checkbox", { name: /black/i }).click();
      cy.findByRole("button", { name: /filter/i }).click();
      cy.get(".grid_item").first().click();
      cy.get(".current");
      cy.checkValue(
        browser,
        device.name,
        viewport,
        task,
        testName,
        ".current",
        defaultSize
      );
    });

    it("Reviews & Stars layout is correct", () => {
      cy.viewport(device.width, device.height);
      cy.visit(url);
      cy.get("#ti-filter").click();
      cy.findByRole("checkbox", { name: /black/i }).click();
      cy.findByRole("button", { name: /filter/i }).click();
      cy.get(".grid_item").first().click();
      cy.checkCSSPropertyofLastChild(
        browser,
        device.name,
        viewport,
        task,
        testName,
        ".rating",
        "margin-left",
        "0px"
      );
    });

    it("account icon layout is correct", () => {
      cy.viewport(device.width, device.height);
      cy.visit(url);
      cy.get("#ti-filter").click();
      cy.findByRole("checkbox", { name: /black/i }).click();
      cy.findByRole("button", { name: /filter/i }).click();
      cy.get(".grid_item").first().click();
      cy.checkCSSPropertyofParentsParent(
        browser,
        device.name,
        viewport,
        task,
        testName,
        ".access_link",
        "margin-left",
        "20px"
      );
    });

    it("wishlist icon layout is correct", () => {
      cy.viewport(device.width, device.height);
      cy.visit(url);
      cy.get("#ti-filter").click();
      cy.findByRole("checkbox", { name: /black/i }).click();
      cy.findByRole("button", { name: /filter/i }).click();
      cy.get(".grid_item").first().click();
      cy.checkCSSPropertyofParent(
        browser,
        device.name,
        viewport,
        task,
        testName,
        ".wishlist",
        "margin-left",
        "20px"
      );
    });
    it("Cart Button icon layout is correct", () => {
      cy.viewport(device.width, device.height);
      cy.visit(url);
      cy.get("#ti-filter").click();
      cy.findByRole("checkbox", { name: /black/i }).click();
      cy.findByRole("button", { name: /filter/i }).click();
      cy.get(".grid_item").first().click();
      cy.checkCSSPropertyofParentsParent(
        browser,
        device.name,
        viewport,
        task,
        testName,
        ".cart_bt",
        "margin-left",
        "20px"
      );
    });
  });
}
