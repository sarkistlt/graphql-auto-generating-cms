{
  "data": {
    "__schema": {
      "queryType": {
        "name": "Query"
      },
      "mutationType": {
        "name": "Mutation"
      },
      "subscriptionType": null,
      "types": [
        {
          "kind": "OBJECT",
          "name": "Query",
          "description": "The root query type which gives access points into the data universe.",
          "fields": [
            {
              "name": "node",
              "description": "Fetches an object given its globally unique `ID`.",
              "args": [
                {
                  "name": "id",
                  "description": "The globally unique `ID`.",
                  "type": {
                    "kind": "NON_NULL",
                    "name": null,
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "ID",
                      "ofType": null
                    }
                  },
                  "defaultValue": null
                }
              ],
              "type": {
                "kind": "INTERFACE",
                "name": "Node",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "crypt",
              "description": null,
              "args": [
                {
                  "name": "arg0",
                  "description": null,
                  "type": {
                    "kind": "NON_NULL",
                    "name": null,
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "String",
                      "ofType": null
                    }
                  },
                  "defaultValue": null
                },
                {
                  "name": "arg1",
                  "description": null,
                  "type": {
                    "kind": "NON_NULL",
                    "name": null,
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "String",
                      "ofType": null
                    }
                  },
                  "defaultValue": null
                }
              ],
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "dearmor",
              "description": null,
              "args": [
                {
                  "name": "arg0",
                  "description": null,
                  "type": {
                    "kind": "NON_NULL",
                    "name": null,
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "String",
                      "ofType": null
                    }
                  },
                  "defaultValue": null
                }
              ],
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "decrypt",
              "description": null,
              "args": [
                {
                  "name": "arg0",
                  "description": null,
                  "type": {
                    "kind": "NON_NULL",
                    "name": null,
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "String",
                      "ofType": null
                    }
                  },
                  "defaultValue": null
                },
                {
                  "name": "arg1",
                  "description": null,
                  "type": {
                    "kind": "NON_NULL",
                    "name": null,
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "String",
                      "ofType": null
                    }
                  },
                  "defaultValue": null
                },
                {
                  "name": "arg2",
                  "description": null,
                  "type": {
                    "kind": "NON_NULL",
                    "name": null,
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "String",
                      "ofType": null
                    }
                  },
                  "defaultValue": null
                }
              ],
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "decryptIv",
              "description": null,
              "args": [
                {
                  "name": "arg0",
                  "description": null,
                  "type": {
                    "kind": "NON_NULL",
                    "name": null,
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "String",
                      "ofType": null
                    }
                  },
                  "defaultValue": null
                },
                {
                  "name": "arg1",
                  "description": null,
                  "type": {
                    "kind": "NON_NULL",
                    "name": null,
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "String",
                      "ofType": null
                    }
                  },
                  "defaultValue": null
                },
                {
                  "name": "arg2",
                  "description": null,
                  "type": {
                    "kind": "NON_NULL",
                    "name": null,
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "String",
                      "ofType": null
                    }
                  },
                  "defaultValue": null
                },
                {
                  "name": "arg3",
                  "description": null,
                  "type": {
                    "kind": "NON_NULL",
                    "name": null,
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "String",
                      "ofType": null
                    }
                  },
                  "defaultValue": null
                }
              ],
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "encrypt",
              "description": null,
              "args": [
                {
                  "name": "arg0",
                  "description": null,
                  "type": {
                    "kind": "NON_NULL",
                    "name": null,
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "String",
                      "ofType": null
                    }
                  },
                  "defaultValue": null
                },
                {
                  "name": "arg1",
                  "description": null,
                  "type": {
                    "kind": "NON_NULL",
                    "name": null,
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "String",
                      "ofType": null
                    }
                  },
                  "defaultValue": null
                },
                {
                  "name": "arg2",
                  "description": null,
                  "type": {
                    "kind": "NON_NULL",
                    "name": null,
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "String",
                      "ofType": null
                    }
                  },
                  "defaultValue": null
                }
              ],
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "encryptIv",
              "description": null,
              "args": [
                {
                  "name": "arg0",
                  "description": null,
                  "type": {
                    "kind": "NON_NULL",
                    "name": null,
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "String",
                      "ofType": null
                    }
                  },
                  "defaultValue": null
                },
                {
                  "name": "arg1",
                  "description": null,
                  "type": {
                    "kind": "NON_NULL",
                    "name": null,
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "String",
                      "ofType": null
                    }
                  },
                  "defaultValue": null
                },
                {
                  "name": "arg2",
                  "description": null,
                  "type": {
                    "kind": "NON_NULL",
                    "name": null,
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "String",
                      "ofType": null
                    }
                  },
                  "defaultValue": null
                },
                {
                  "name": "arg3",
                  "description": null,
                  "type": {
                    "kind": "NON_NULL",
                    "name": null,
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "String",
                      "ofType": null
                    }
                  },
                  "defaultValue": null
                }
              ],
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "pgpKeyId",
              "description": null,
              "args": [
                {
                  "name": "arg0",
                  "description": null,
                  "type": {
                    "kind": "NON_NULL",
                    "name": null,
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "String",
                      "ofType": null
                    }
                  },
                  "defaultValue": null
                }
              ],
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "allDatabasechangelogs",
              "description": "Reads and enables paginatation through a set of `Databasechangelog`.",
              "args": [
                {
                  "name": "orderBy",
                  "description": "The method to use when ordering `Databasechangelog`.",
                  "type": {
                    "kind": "ENUM",
                    "name": "DatabasechangelogsOrderBy",
                    "ofType": null
                  },
                  "defaultValue": "NATURAL"
                },
                {
                  "name": "before",
                  "description": "Read all values in the set before (above) this cursor.",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Cursor",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "name": "after",
                  "description": "Read all values in the set after (below) this cursor.",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Cursor",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "name": "first",
                  "description": "Only read the first `n` values of the set.",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Int",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "name": "last",
                  "description": "Only read the last `n` values of the set.",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Int",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "name": "offset",
                  "description": "Skip the first `n` values from our `after` cursor, an alternative to cursor based pagination. May not be used with `last`.",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Int",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "name": "condition",
                  "description": "A condition to be used in determining which values should be returned by the collection.",
                  "type": {
                    "kind": "INPUT_OBJECT",
                    "name": "DatabasechangelogCondition",
                    "ofType": null
                  },
                  "defaultValue": null
                }
              ],
              "type": {
                "kind": "OBJECT",
                "name": "DatabasechangelogsConnection",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "allDatabasechangeloglocks",
              "description": "Reads and enables paginatation through a set of `Databasechangeloglock`.",
              "args": [
                {
                  "name": "orderBy",
                  "description": "The method to use when ordering `Databasechangeloglock`.",
                  "type": {
                    "kind": "ENUM",
                    "name": "DatabasechangeloglocksOrderBy",
                    "ofType": null
                  },
                  "defaultValue": "PRIMARY_KEY_ASC"
                },
                {
                  "name": "before",
                  "description": "Read all values in the set before (above) this cursor.",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Cursor",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "name": "after",
                  "description": "Read all values in the set after (below) this cursor.",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Cursor",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "name": "first",
                  "description": "Only read the first `n` values of the set.",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Int",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "name": "last",
                  "description": "Only read the last `n` values of the set.",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Int",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "name": "offset",
                  "description": "Skip the first `n` values from our `after` cursor, an alternative to cursor based pagination. May not be used with `last`.",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Int",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "name": "condition",
                  "description": "A condition to be used in determining which values should be returned by the collection.",
                  "type": {
                    "kind": "INPUT_OBJECT",
                    "name": "DatabasechangeloglockCondition",
                    "ofType": null
                  },
                  "defaultValue": null
                }
              ],
              "type": {
                "kind": "OBJECT",
                "name": "DatabasechangeloglocksConnection",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "databasechangeloglock",
              "description": "Reads a single `Databasechangeloglock` using its globally unique `ID`.",
              "args": [
                {
                  "name": "id",
                  "description": "The globally unique `ID` to be used in selecting a single `Databasechangeloglock`.",
                  "type": {
                    "kind": "NON_NULL",
                    "name": null,
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "ID",
                      "ofType": null
                    }
                  },
                  "defaultValue": null
                }
              ],
              "type": {
                "kind": "OBJECT",
                "name": "Databasechangeloglock",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "databasechangeloglockByRowId",
              "description": null,
              "args": [
                {
                  "name": "rowId",
                  "description": null,
                  "type": {
                    "kind": "NON_NULL",
                    "name": null,
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "Int",
                      "ofType": null
                    }
                  },
                  "defaultValue": null
                }
              ],
              "type": {
                "kind": "OBJECT",
                "name": "Databasechangeloglock",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "allDocs",
              "description": "Reads and enables paginatation through a set of `Doc`.",
              "args": [
                {
                  "name": "orderBy",
                  "description": "The method to use when ordering `Doc`.",
                  "type": {
                    "kind": "ENUM",
                    "name": "DocsOrderBy",
                    "ofType": null
                  },
                  "defaultValue": "PRIMARY_KEY_ASC"
                },
                {
                  "name": "before",
                  "description": "Read all values in the set before (above) this cursor.",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Cursor",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "name": "after",
                  "description": "Read all values in the set after (below) this cursor.",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Cursor",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "name": "first",
                  "description": "Only read the first `n` values of the set.",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Int",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "name": "last",
                  "description": "Only read the last `n` values of the set.",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Int",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "name": "offset",
                  "description": "Skip the first `n` values from our `after` cursor, an alternative to cursor based pagination. May not be used with `last`.",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Int",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "name": "condition",
                  "description": "A condition to be used in determining which values should be returned by the collection.",
                  "type": {
                    "kind": "INPUT_OBJECT",
                    "name": "DocCondition",
                    "ofType": null
                  },
                  "defaultValue": null
                }
              ],
              "type": {
                "kind": "OBJECT",
                "name": "DocsConnection",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "doc",
              "description": "Reads a single `Doc` using its globally unique `ID`.",
              "args": [
                {
                  "name": "id",
                  "description": "The globally unique `ID` to be used in selecting a single `Doc`.",
                  "type": {
                    "kind": "NON_NULL",
                    "name": null,
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "ID",
                      "ofType": null
                    }
                  },
                  "defaultValue": null
                }
              ],
              "type": {
                "kind": "OBJECT",
                "name": "Doc",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "docByRowId",
              "description": null,
              "args": [
                {
                  "name": "rowId",
                  "description": null,
                  "type": {
                    "kind": "NON_NULL",
                    "name": null,
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "Int",
                      "ofType": null
                    }
                  },
                  "defaultValue": null
                }
              ],
              "type": {
                "kind": "OBJECT",
                "name": "Doc",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "allEmployees",
              "description": "Reads and enables paginatation through a set of `Employee`.",
              "args": [
                {
                  "name": "orderBy",
                  "description": "The method to use when ordering `Employee`.",
                  "type": {
                    "kind": "ENUM",
                    "name": "EmployeesOrderBy",
                    "ofType": null
                  },
                  "defaultValue": "PRIMARY_KEY_ASC"
                },
                {
                  "name": "before",
                  "description": "Read all values in the set before (above) this cursor.",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Cursor",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "name": "after",
                  "description": "Read all values in the set after (below) this cursor.",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Cursor",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "name": "first",
                  "description": "Only read the first `n` values of the set.",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Int",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "name": "last",
                  "description": "Only read the last `n` values of the set.",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Int",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "name": "offset",
                  "description": "Skip the first `n` values from our `after` cursor, an alternative to cursor based pagination. May not be used with `last`.",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Int",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "name": "condition",
                  "description": "A condition to be used in determining which values should be returned by the collection.",
                  "type": {
                    "kind": "INPUT_OBJECT",
                    "name": "EmployeeCondition",
                    "ofType": null
                  },
                  "defaultValue": null
                }
              ],
              "type": {
                "kind": "OBJECT",
                "name": "EmployeesConnection",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "employee",
              "description": "Reads a single `Employee` using its globally unique `ID`.",
              "args": [
                {
                  "name": "id",
                  "description": "The globally unique `ID` to be used in selecting a single `Employee`.",
                  "type": {
                    "kind": "NON_NULL",
                    "name": null,
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "ID",
                      "ofType": null
                    }
                  },
                  "defaultValue": null
                }
              ],
              "type": {
                "kind": "OBJECT",
                "name": "Employee",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "employeeByRowId",
              "description": null,
              "args": [
                {
                  "name": "rowId",
                  "description": null,
                  "type": {
                    "kind": "NON_NULL",
                    "name": null,
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "Int",
                      "ofType": null
                    }
                  },
                  "defaultValue": null
                }
              ],
              "type": {
                "kind": "OBJECT",
                "name": "Employee",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "allMedicals",
              "description": "Reads and enables paginatation through a set of `Medical`.",
              "args": [
                {
                  "name": "orderBy",
                  "description": "The method to use when ordering `Medical`.",
                  "type": {
                    "kind": "ENUM",
                    "name": "MedicalsOrderBy",
                    "ofType": null
                  },
                  "defaultValue": "NATURAL"
                },
                {
                  "name": "before",
                  "description": "Read all values in the set before (above) this cursor.",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Cursor",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "name": "after",
                  "description": "Read all values in the set after (below) this cursor.",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Cursor",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "name": "first",
                  "description": "Only read the first `n` values of the set.",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Int",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "name": "last",
                  "description": "Only read the last `n` values of the set.",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Int",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "name": "offset",
                  "description": "Skip the first `n` values from our `after` cursor, an alternative to cursor based pagination. May not be used with `last`.",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Int",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "name": "condition",
                  "description": "A condition to be used in determining which values should be returned by the collection.",
                  "type": {
                    "kind": "INPUT_OBJECT",
                    "name": "MedicalCondition",
                    "ofType": null
                  },
                  "defaultValue": null
                }
              ],
              "type": {
                "kind": "OBJECT",
                "name": "MedicalsConnection",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "allMeps",
              "description": "Reads and enables paginatation through a set of `Mep`.",
              "args": [
                {
                  "name": "orderBy",
                  "description": "The method to use when ordering `Mep`.",
                  "type": {
                    "kind": "ENUM",
                    "name": "MepsOrderBy",
                    "ofType": null
                  },
                  "defaultValue": "PRIMARY_KEY_ASC"
                },
                {
                  "name": "before",
                  "description": "Read all values in the set before (above) this cursor.",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Cursor",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "name": "after",
                  "description": "Read all values in the set after (below) this cursor.",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Cursor",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "name": "first",
                  "description": "Only read the first `n` values of the set.",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Int",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "name": "last",
                  "description": "Only read the last `n` values of the set.",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Int",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "name": "offset",
                  "description": "Skip the first `n` values from our `after` cursor, an alternative to cursor based pagination. May not be used with `last`.",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Int",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "name": "condition",
                  "description": "A condition to be used in determining which values should be returned by the collection.",
                  "type": {
                    "kind": "INPUT_OBJECT",
                    "name": "MepCondition",
                    "ofType": null
                  },
                  "defaultValue": null
                }
              ],
              "type": {
                "kind": "OBJECT",
                "name": "MepsConnection",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "mep",
              "description": "Reads a single `Mep` using its globally unique `ID`.",
              "args": [
                {
                  "name": "id",
                  "description": "The globally unique `ID` to be used in selecting a single `Mep`.",
                  "type": {
                    "kind": "NON_NULL",
                    "name": null,
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "ID",
                      "ofType": null
                    }
                  },
                  "defaultValue": null
                }
              ],
              "type": {
                "kind": "OBJECT",
                "name": "Mep",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "mepByRowId",
              "description": null,
              "args": [
                {
                  "name": "rowId",
                  "description": null,
                  "type": {
                    "kind": "NON_NULL",
                    "name": null,
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "Int",
                      "ofType": null
                    }
                  },
                  "defaultValue": null
                }
              ],
              "type": {
                "kind": "OBJECT",
                "name": "Mep",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "allOperations",
              "description": "Reads and enables paginatation through a set of `Operation`.",
              "args": [
                {
                  "name": "orderBy",
                  "description": "The method to use when ordering `Operation`.",
                  "type": {
                    "kind": "ENUM",
                    "name": "OperationsOrderBy",
                    "ofType": null
                  },
                  "defaultValue": "NATURAL"
                },
                {
                  "name": "before",
                  "description": "Read all values in the set before (above) this cursor.",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Cursor",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "name": "after",
                  "description": "Read all values in the set after (below) this cursor.",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Cursor",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "name": "first",
                  "description": "Only read the first `n` values of the set.",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Int",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "name": "last",
                  "description": "Only read the last `n` values of the set.",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Int",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "name": "offset",
                  "description": "Skip the first `n` values from our `after` cursor, an alternative to cursor based pagination. May not be used with `last`.",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Int",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "name": "condition",
                  "description": "A condition to be used in determining which values should be returned by the collection.",
                  "type": {
                    "kind": "INPUT_OBJECT",
                    "name": "OperationCondition",
                    "ofType": null
                  },
                  "defaultValue": null
                }
              ],
              "type": {
                "kind": "OBJECT",
                "name": "OperationsConnection",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "allPeople",
              "description": "Reads and enables paginatation through a set of `Person`.",
              "args": [
                {
                  "name": "orderBy",
                  "description": "The method to use when ordering `Person`.",
                  "type": {
                    "kind": "ENUM",
                    "name": "PeopleOrderBy",
                    "ofType": null
                  },
                  "defaultValue": "PRIMARY_KEY_ASC"
                },
                {
                  "name": "before",
                  "description": "Read all values in the set before (above) this cursor.",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Cursor",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "name": "after",
                  "description": "Read all values in the set after (below) this cursor.",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Cursor",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "name": "first",
                  "description": "Only read the first `n` values of the set.",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Int",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "name": "last",
                  "description": "Only read the last `n` values of the set.",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Int",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "name": "offset",
                  "description": "Skip the first `n` values from our `after` cursor, an alternative to cursor based pagination. May not be used with `last`.",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Int",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "name": "condition",
                  "description": "A condition to be used in determining which values should be returned by the collection.",
                  "type": {
                    "kind": "INPUT_OBJECT",
                    "name": "PersonCondition",
                    "ofType": null
                  },
                  "defaultValue": null
                }
              ],
              "type": {
                "kind": "OBJECT",
                "name": "PeopleConnection",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "person",
              "description": "Reads a single `Person` using its globally unique `ID`.",
              "args": [
                {
                  "name": "id",
                  "description": "The globally unique `ID` to be used in selecting a single `Person`.",
                  "type": {
                    "kind": "NON_NULL",
                    "name": null,
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "ID",
                      "ofType": null
                    }
                  },
                  "defaultValue": null
                }
              ],
              "type": {
                "kind": "OBJECT",
                "name": "Person",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "personByRowId",
              "description": null,
              "args": [
                {
                  "name": "rowId",
                  "description": null,
                  "type": {
                    "kind": "NON_NULL",
                    "name": null,
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "Int",
                      "ofType": null
                    }
                  },
                  "defaultValue": null
                }
              ],
              "type": {
                "kind": "OBJECT",
                "name": "Person",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "allRecruits",
              "description": "Reads and enables paginatation through a set of `Recruit`.",
              "args": [
                {
                  "name": "orderBy",
                  "description": "The method to use when ordering `Recruit`.",
                  "type": {
                    "kind": "ENUM",
                    "name": "RecruitsOrderBy",
                    "ofType": null
                  },
                  "defaultValue": "PRIMARY_KEY_ASC"
                },
                {
                  "name": "before",
                  "description": "Read all values in the set before (above) this cursor.",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Cursor",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "name": "after",
                  "description": "Read all values in the set after (below) this cursor.",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Cursor",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "name": "first",
                  "description": "Only read the first `n` values of the set.",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Int",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "name": "last",
                  "description": "Only read the last `n` values of the set.",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Int",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "name": "offset",
                  "description": "Skip the first `n` values from our `after` cursor, an alternative to cursor based pagination. May not be used with `last`.",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Int",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "name": "condition",
                  "description": "A condition to be used in determining which values should be returned by the collection.",
                  "type": {
                    "kind": "INPUT_OBJECT",
                    "name": "RecruitCondition",
                    "ofType": null
                  },
                  "defaultValue": null
                }
              ],
              "type": {
                "kind": "OBJECT",
                "name": "RecruitsConnection",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "recruit",
              "description": "Reads a single `Recruit` using its globally unique `ID`.",
              "args": [
                {
                  "name": "id",
                  "description": "The globally unique `ID` to be used in selecting a single `Recruit`.",
                  "type": {
                    "kind": "NON_NULL",
                    "name": null,
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "ID",
                      "ofType": null
                    }
                  },
                  "defaultValue": null
                }
              ],
              "type": {
                "kind": "OBJECT",
                "name": "Recruit",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "recruitByRowId",
              "description": null,
              "args": [
                {
                  "name": "rowId",
                  "description": null,
                  "type": {
                    "kind": "NON_NULL",
                    "name": null,
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "Int",
                      "ofType": null
                    }
                  },
                  "defaultValue": null
                }
              ],
              "type": {
                "kind": "OBJECT",
                "name": "Recruit",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "allRecruiters",
              "description": "Reads and enables paginatation through a set of `Recruiter`.",
              "args": [
                {
                  "name": "orderBy",
                  "description": "The method to use when ordering `Recruiter`.",
                  "type": {
                    "kind": "ENUM",
                    "name": "RecruitersOrderBy",
                    "ofType": null
                  },
                  "defaultValue": "PRIMARY_KEY_ASC"
                },
                {
                  "name": "before",
                  "description": "Read all values in the set before (above) this cursor.",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Cursor",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "name": "after",
                  "description": "Read all values in the set after (below) this cursor.",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Cursor",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "name": "first",
                  "description": "Only read the first `n` values of the set.",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Int",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "name": "last",
                  "description": "Only read the last `n` values of the set.",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Int",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "name": "offset",
                  "description": "Skip the first `n` values from our `after` cursor, an alternative to cursor based pagination. May not be used with `last`.",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Int",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "name": "condition",
                  "description": "A condition to be used in determining which values should be returned by the collection.",
                  "type": {
                    "kind": "INPUT_OBJECT",
                    "name": "RecruiterCondition",
                    "ofType": null
                  },
                  "defaultValue": null
                }
              ],
              "type": {
                "kind": "OBJECT",
                "name": "RecruitersConnection",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "recruiter",
              "description": "Reads a single `Recruiter` using its globally unique `ID`.",
              "args": [
                {
                  "name": "id",
                  "description": "The globally unique `ID` to be used in selecting a single `Recruiter`.",
                  "type": {
                    "kind": "NON_NULL",
                    "name": null,
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "ID",
                      "ofType": null
                    }
                  },
                  "defaultValue": null
                }
              ],
              "type": {
                "kind": "OBJECT",
                "name": "Recruiter",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "recruiterByRowId",
              "description": null,
              "args": [
                {
                  "name": "rowId",
                  "description": null,
                  "type": {
                    "kind": "NON_NULL",
                    "name": null,
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "Int",
                      "ofType": null
                    }
                  },
                  "defaultValue": null
                }
              ],
              "type": {
                "kind": "OBJECT",
                "name": "Recruiter",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "allTests",
              "description": "Reads and enables paginatation through a set of `Test`.",
              "args": [
                {
                  "name": "orderBy",
                  "description": "The method to use when ordering `Test`.",
                  "type": {
                    "kind": "ENUM",
                    "name": "TestsOrderBy",
                    "ofType": null
                  },
                  "defaultValue": "PRIMARY_KEY_ASC"
                },
                {
                  "name": "before",
                  "description": "Read all values in the set before (above) this cursor.",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Cursor",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "name": "after",
                  "description": "Read all values in the set after (below) this cursor.",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Cursor",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "name": "first",
                  "description": "Only read the first `n` values of the set.",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Int",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "name": "last",
                  "description": "Only read the last `n` values of the set.",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Int",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "name": "offset",
                  "description": "Skip the first `n` values from our `after` cursor, an alternative to cursor based pagination. May not be used with `last`.",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Int",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "name": "condition",
                  "description": "A condition to be used in determining which values should be returned by the collection.",
                  "type": {
                    "kind": "INPUT_OBJECT",
                    "name": "TestCondition",
                    "ofType": null
                  },
                  "defaultValue": null
                }
              ],
              "type": {
                "kind": "OBJECT",
                "name": "TestsConnection",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "test",
              "description": "Reads a single `Test` using its globally unique `ID`.",
              "args": [
                {
                  "name": "id",
                  "description": "The globally unique `ID` to be used in selecting a single `Test`.",
                  "type": {
                    "kind": "NON_NULL",
                    "name": null,
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "ID",
                      "ofType": null
                    }
                  },
                  "defaultValue": null
                }
              ],
              "type": {
                "kind": "OBJECT",
                "name": "Test",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "testByRecruitId",
              "description": null,
              "args": [
                {
                  "name": "recruitId",
                  "description": null,
                  "type": {
                    "kind": "NON_NULL",
                    "name": null,
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "Int",
                      "ofType": null
                    }
                  },
                  "defaultValue": null
                }
              ],
              "type": {
                "kind": "OBJECT",
                "name": "Test",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "query",
              "description": "Exposes the root query type nested one level down. This is helpful for Relay 1 which can only query top level fields if they are in a particular form.",
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "OBJECT",
                  "name": "Query",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "id",
              "description": "The root query type must be a `Node` to work well with Relay 1 mutations. This just resolves to `query`.",
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "ID",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            }
          ],
          "inputFields": null,
          "interfaces": [
            {
              "kind": "INTERFACE",
              "name": "Node",
              "ofType": null
            }
          ],
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "INTERFACE",
          "name": "Node",
          "description": "An object with a globally unique `ID`.",
          "fields": [
            {
              "name": "id",
              "description": "A globally unique identifier. Can be used in various places throughout the system to identify this single value.",
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "ID",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            }
          ],
          "inputFields": null,
          "interfaces": null,
          "enumValues": null,
          "possibleTypes": [
            {
              "kind": "OBJECT",
              "name": "Query",
              "ofType": null
            },
            {
              "kind": "OBJECT",
              "name": "Databasechangeloglock",
              "ofType": null
            },
            {
              "kind": "OBJECT",
              "name": "Doc",
              "ofType": null
            },
            {
              "kind": "OBJECT",
              "name": "Recruit",
              "ofType": null
            },
            {
              "kind": "OBJECT",
              "name": "Employee",
              "ofType": null
            },
            {
              "kind": "OBJECT",
              "name": "Person",
              "ofType": null
            },
            {
              "kind": "OBJECT",
              "name": "Recruiter",
              "ofType": null
            },
            {
              "kind": "OBJECT",
              "name": "Test",
              "ofType": null
            },
            {
              "kind": "OBJECT",
              "name": "Mep",
              "ofType": null
            }
          ]
        },
        {
          "kind": "SCALAR",
          "name": "ID",
          "description": "The `ID` scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `\"4\"`) or integer (such as `4`) input value will be accepted as an ID.",
          "fields": null,
          "inputFields": null,
          "interfaces": null,
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "SCALAR",
          "name": "String",
          "description": "The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.",
          "fields": null,
          "inputFields": null,
          "interfaces": null,
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "ENUM",
          "name": "DatabasechangelogsOrderBy",
          "description": "Methods to use when ordering `Databasechangelog`.",
          "fields": null,
          "inputFields": null,
          "interfaces": null,
          "enumValues": [
            {
              "name": "NATURAL",
              "description": null,
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "ID_ASC",
              "description": null,
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "ID_DESC",
              "description": null,
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "AUTHOR_ASC",
              "description": null,
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "AUTHOR_DESC",
              "description": null,
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "FILENAME_ASC",
              "description": null,
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "FILENAME_DESC",
              "description": null,
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "DATEEXECUTED_ASC",
              "description": null,
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "DATEEXECUTED_DESC",
              "description": null,
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "ORDEREXECUTED_ASC",
              "description": null,
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "ORDEREXECUTED_DESC",
              "description": null,
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "EXECTYPE_ASC",
              "description": null,
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "EXECTYPE_DESC",
              "description": null,
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "MD5SUM_ASC",
              "description": null,
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "MD5SUM_DESC",
              "description": null,
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "DESCRIPTION_ASC",
              "description": null,
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "DESCRIPTION_DESC",
              "description": null,
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "COMMENTS_ASC",
              "description": null,
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "COMMENTS_DESC",
              "description": null,
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "TAG_ASC",
              "description": null,
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "TAG_DESC",
              "description": null,
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "LIQUIBASE_ASC",
              "description": null,
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "LIQUIBASE_DESC",
              "description": null,
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "CONTEXTS_ASC",
              "description": null,
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "CONTEXTS_DESC",
              "description": null,
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "LABELS_ASC",
              "description": null,
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "LABELS_DESC",
              "description": null,
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "DEPLOYMENT_ID_ASC",
              "description": null,
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "DEPLOYMENT_ID_DESC",
              "description": null,
              "isDeprecated": false,
              "deprecationReason": null
            }
          ],
          "possibleTypes": null
        },
        {
          "kind": "SCALAR",
          "name": "Cursor",
          "description": "A location in a connection that can be used for resuming pagination.",
          "fields": null,
          "inputFields": null,
          "interfaces": null,
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "SCALAR",
          "name": "Int",
          "description": "The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1. ",
          "fields": null,
          "inputFields": null,
          "interfaces": null,
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "INPUT_OBJECT",
          "name": "DatabasechangelogCondition",
          "description": "A condition to be used against `Databasechangelog` object types. All fields are tested for equality and combined with a logical ‘and.’",
          "fields": null,
          "inputFields": [
            {
              "name": "rowId",
              "description": "Checks for equality with the object’s `rowId` field.",
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "author",
              "description": "Checks for equality with the object’s `author` field.",
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "filename",
              "description": "Checks for equality with the object’s `filename` field.",
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "dateexecuted",
              "description": "Checks for equality with the object’s `dateexecuted` field.",
              "type": {
                "kind": "SCALAR",
                "name": "Datetime",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "orderexecuted",
              "description": "Checks for equality with the object’s `orderexecuted` field.",
              "type": {
                "kind": "SCALAR",
                "name": "Int",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "exectype",
              "description": "Checks for equality with the object’s `exectype` field.",
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "md5sum",
              "description": "Checks for equality with the object’s `md5sum` field.",
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "description",
              "description": "Checks for equality with the object’s `description` field.",
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "comments",
              "description": "Checks for equality with the object’s `comments` field.",
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "tag",
              "description": "Checks for equality with the object’s `tag` field.",
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "liquibase",
              "description": "Checks for equality with the object’s `liquibase` field.",
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "contexts",
              "description": "Checks for equality with the object’s `contexts` field.",
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "labels",
              "description": "Checks for equality with the object’s `labels` field.",
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "deploymentId",
              "description": "Checks for equality with the object’s `deploymentId` field.",
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "defaultValue": null
            }
          ],
          "interfaces": null,
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "SCALAR",
          "name": "Datetime",
          "description": "A point in time as described by the [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) standard. May or may not include a timezone.",
          "fields": null,
          "inputFields": null,
          "interfaces": null,
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "OBJECT",
          "name": "DatabasechangelogsConnection",
          "description": "A connection to a list of `Databasechangelog` values.",
          "fields": [
            {
              "name": "pageInfo",
              "description": "Information to aid in pagination.",
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "OBJECT",
                  "name": "PageInfo",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "totalCount",
              "description": "The count of *all* `Databasechangelog` you could get from the connection.",
              "args": [],
              "type": {
                "kind": "SCALAR",
                "name": "Int",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "edges",
              "description": "A list of edges which contains the `Databasechangelog` and cursor to aid in pagination.",
              "args": [],
              "type": {
                "kind": "LIST",
                "name": null,
                "ofType": {
                  "kind": "OBJECT",
                  "name": "DatabasechangelogsEdge",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "nodes",
              "description": "A list of `Databasechangelog` objects.",
              "args": [],
              "type": {
                "kind": "LIST",
                "name": null,
                "ofType": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "Databasechangelog",
                    "ofType": null
                  }
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            }
          ],
          "inputFields": null,
          "interfaces": [],
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "OBJECT",
          "name": "PageInfo",
          "description": "Information about pagination in a connection.",
          "fields": [
            {
              "name": "hasNextPage",
              "description": "When paginating forwards, are there more items?",
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "Boolean",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "hasPreviousPage",
              "description": "When paginating backwards, are there more items?",
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "Boolean",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "startCursor",
              "description": "When paginating backwards, the cursor to continue.",
              "args": [],
              "type": {
                "kind": "SCALAR",
                "name": "Cursor",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "endCursor",
              "description": "When paginating forwards, the cursor to continue.",
              "args": [],
              "type": {
                "kind": "SCALAR",
                "name": "Cursor",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            }
          ],
          "inputFields": null,
          "interfaces": [],
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "SCALAR",
          "name": "Boolean",
          "description": "The `Boolean` scalar type represents `true` or `false`.",
          "fields": null,
          "inputFields": null,
          "interfaces": null,
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "OBJECT",
          "name": "DatabasechangelogsEdge",
          "description": "A `Databasechangelog` edge in the connection.",
          "fields": [
            {
              "name": "cursor",
              "description": "A cursor for use in pagination.",
              "args": [],
              "type": {
                "kind": "SCALAR",
                "name": "Cursor",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "node",
              "description": "The `Databasechangelog` at the end of the edge.",
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "OBJECT",
                  "name": "Databasechangelog",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            }
          ],
          "inputFields": null,
          "interfaces": [],
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "OBJECT",
          "name": "Databasechangelog",
          "description": null,
          "fields": [
            {
              "name": "rowId",
              "description": null,
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "author",
              "description": null,
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "filename",
              "description": null,
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "dateexecuted",
              "description": null,
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "Datetime",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "orderexecuted",
              "description": null,
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "exectype",
              "description": null,
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "md5sum",
              "description": null,
              "args": [],
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "description",
              "description": null,
              "args": [],
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "comments",
              "description": null,
              "args": [],
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "tag",
              "description": null,
              "args": [],
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "liquibase",
              "description": null,
              "args": [],
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "contexts",
              "description": null,
              "args": [],
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "labels",
              "description": null,
              "args": [],
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "deploymentId",
              "description": null,
              "args": [],
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            }
          ],
          "inputFields": null,
          "interfaces": [],
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "ENUM",
          "name": "DatabasechangeloglocksOrderBy",
          "description": "Methods to use when ordering `Databasechangeloglock`.",
          "fields": null,
          "inputFields": null,
          "interfaces": null,
          "enumValues": [
            {
              "name": "PRIMARY_KEY_ASC",
              "description": null,
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "PRIMARY_KEY_DESC",
              "description": null,
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "NATURAL",
              "description": null,
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "ID_ASC",
              "description": null,
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "ID_DESC",
              "description": null,
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "LOCKED_ASC",
              "description": null,
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "LOCKED_DESC",
              "description": null,
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "LOCKGRANTED_ASC",
              "description": null,
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "LOCKGRANTED_DESC",
              "description": null,
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "LOCKEDBY_ASC",
              "description": null,
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "LOCKEDBY_DESC",
              "description": null,
              "isDeprecated": false,
              "deprecationReason": null
            }
          ],
          "possibleTypes": null
        },
        {
          "kind": "INPUT_OBJECT",
          "name": "DatabasechangeloglockCondition",
          "description": "A condition to be used against `Databasechangeloglock` object types. All fields are tested for equality and combined with a logical ‘and.’",
          "fields": null,
          "inputFields": [
            {
              "name": "rowId",
              "description": "Checks for equality with the object’s `rowId` field.",
              "type": {
                "kind": "SCALAR",
                "name": "Int",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "locked",
              "description": "Checks for equality with the object’s `locked` field.",
              "type": {
                "kind": "SCALAR",
                "name": "Boolean",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "lockgranted",
              "description": "Checks for equality with the object’s `lockgranted` field.",
              "type": {
                "kind": "SCALAR",
                "name": "Datetime",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "lockedby",
              "description": "Checks for equality with the object’s `lockedby` field.",
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "defaultValue": null
            }
          ],
          "interfaces": null,
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "OBJECT",
          "name": "DatabasechangeloglocksConnection",
          "description": "A connection to a list of `Databasechangeloglock` values.",
          "fields": [
            {
              "name": "pageInfo",
              "description": "Information to aid in pagination.",
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "OBJECT",
                  "name": "PageInfo",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "totalCount",
              "description": "The count of *all* `Databasechangeloglock` you could get from the connection.",
              "args": [],
              "type": {
                "kind": "SCALAR",
                "name": "Int",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "edges",
              "description": "A list of edges which contains the `Databasechangeloglock` and cursor to aid in pagination.",
              "args": [],
              "type": {
                "kind": "LIST",
                "name": null,
                "ofType": {
                  "kind": "OBJECT",
                  "name": "DatabasechangeloglocksEdge",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "nodes",
              "description": "A list of `Databasechangeloglock` objects.",
              "args": [],
              "type": {
                "kind": "LIST",
                "name": null,
                "ofType": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "Databasechangeloglock",
                    "ofType": null
                  }
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            }
          ],
          "inputFields": null,
          "interfaces": [],
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "OBJECT",
          "name": "DatabasechangeloglocksEdge",
          "description": "A `Databasechangeloglock` edge in the connection.",
          "fields": [
            {
              "name": "cursor",
              "description": "A cursor for use in pagination.",
              "args": [],
              "type": {
                "kind": "SCALAR",
                "name": "Cursor",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "node",
              "description": "The `Databasechangeloglock` at the end of the edge.",
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "OBJECT",
                  "name": "Databasechangeloglock",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            }
          ],
          "inputFields": null,
          "interfaces": [],
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "OBJECT",
          "name": "Databasechangeloglock",
          "description": null,
          "fields": [
            {
              "name": "id",
              "description": "A globally unique identifier. Can be used in various places throughout the system to identify this single value.",
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "ID",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "rowId",
              "description": null,
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "locked",
              "description": null,
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "Boolean",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "lockgranted",
              "description": null,
              "args": [],
              "type": {
                "kind": "SCALAR",
                "name": "Datetime",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "lockedby",
              "description": null,
              "args": [],
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            }
          ],
          "inputFields": null,
          "interfaces": [
            {
              "kind": "INTERFACE",
              "name": "Node",
              "ofType": null
            }
          ],
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "ENUM",
          "name": "DocsOrderBy",
          "description": "Methods to use when ordering `Doc`.",
          "fields": null,
          "inputFields": null,
          "interfaces": null,
          "enumValues": [
            {
              "name": "PRIMARY_KEY_ASC",
              "description": null,
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "PRIMARY_KEY_DESC",
              "description": null,
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "NATURAL",
              "description": null,
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "ID_ASC",
              "description": null,
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "ID_DESC",
              "description": null,
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "RECRUIT_ID_ASC",
              "description": null,
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "RECRUIT_ID_DESC",
              "description": null,
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "LINK_ASC",
              "description": null,
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "LINK_DESC",
              "description": null,
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "CREATED_ASC",
              "description": null,
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "CREATED_DESC",
              "description": null,
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "MODIFIED_ASC",
              "description": null,
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "MODIFIED_DESC",
              "description": null,
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "CLOSED_ASC",
              "description": null,
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "CLOSED_DESC",
              "description": null,
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "VALID_UNTIL_ASC",
              "description": null,
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "VALID_UNTIL_DESC",
              "description": null,
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "CREATED_BY_ASC",
              "description": null,
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "CREATED_BY_DESC",
              "description": null,
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "MODIFIED_BY_ASC",
              "description": null,
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "MODIFIED_BY_DESC",
              "description": null,
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "CLOSED_BY_ASC",
              "description": null,
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "CLOSED_BY_DESC",
              "description": null,
              "isDeprecated": false,
              "deprecationReason": null
            }
          ],
          "possibleTypes": null
        },
        {
          "kind": "INPUT_OBJECT",
          "name": "DocCondition",
          "description": "A condition to be used against `Doc` object types. All fields are tested for equality and combined with a logical ‘and.’",
          "fields": null,
          "inputFields": [
            {
              "name": "rowId",
              "description": "Checks for equality with the object’s `rowId` field.",
              "type": {
                "kind": "SCALAR",
                "name": "Int",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "recruitId",
              "description": "Checks for equality with the object’s `recruitId` field.",
              "type": {
                "kind": "SCALAR",
                "name": "Int",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "link",
              "description": "Checks for equality with the object’s `link` field.",
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "created",
              "description": "Checks for equality with the object’s `created` field.",
              "type": {
                "kind": "SCALAR",
                "name": "Datetime",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "modified",
              "description": "Checks for equality with the object’s `modified` field.",
              "type": {
                "kind": "SCALAR",
                "name": "Datetime",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "closed",
              "description": "Checks for equality with the object’s `closed` field.",
              "type": {
                "kind": "SCALAR",
                "name": "Datetime",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "validUntil",
              "description": "Checks for equality with the object’s `validUntil` field.",
              "type": {
                "kind": "SCALAR",
                "name": "Datetime",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "createdBy",
              "description": "Checks for equality with the object’s `createdBy` field.",
              "type": {
                "kind": "SCALAR",
                "name": "Int",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "modifiedBy",
              "description": "Checks for equality with the object’s `modifiedBy` field.",
              "type": {
                "kind": "SCALAR",
                "name": "Int",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "closedBy",
              "description": "Checks for equality with the object’s `closedBy` field.",
              "type": {
                "kind": "SCALAR",
                "name": "Int",
                "ofType": null
              },
              "defaultValue": null
            }
          ],
          "interfaces": null,
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "OBJECT",
          "name": "DocsConnection",
          "description": "A connection to a list of `Doc` values.",
          "fields": [
            {
              "name": "pageInfo",
              "description": "Information to aid in pagination.",
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "OBJECT",
                  "name": "PageInfo",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "totalCount",
              "description": "The count of *all* `Doc` you could get from the connection.",
              "args": [],
              "type": {
                "kind": "SCALAR",
                "name": "Int",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "edges",
              "description": "A list of edges which contains the `Doc` and cursor to aid in pagination.",
              "args": [],
              "type": {
                "kind": "LIST",
                "name": null,
                "ofType": {
                  "kind": "OBJECT",
                  "name": "DocsEdge",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "nodes",
              "description": "A list of `Doc` objects.",
              "args": [],
              "type": {
                "kind": "LIST",
                "name": null,
                "ofType": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "Doc",
                    "ofType": null
                  }
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            }
          ],
          "inputFields": null,
          "interfaces": [],
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "OBJECT",
          "name": "DocsEdge",
          "description": "A `Doc` edge in the connection.",
          "fields": [
            {
              "name": "cursor",
              "description": "A cursor for use in pagination.",
              "args": [],
              "type": {
                "kind": "SCALAR",
                "name": "Cursor",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "node",
              "description": "The `Doc` at the end of the edge.",
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "OBJECT",
                  "name": "Doc",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            }
          ],
          "inputFields": null,
          "interfaces": [],
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "OBJECT",
          "name": "Doc",
          "description": null,
          "fields": [
            {
              "name": "id",
              "description": "A globally unique identifier. Can be used in various places throughout the system to identify this single value.",
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "ID",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "rowId",
              "description": null,
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "recruitId",
              "description": null,
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "link",
              "description": null,
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "created",
              "description": null,
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "Datetime",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "modified",
              "description": null,
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "Datetime",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "closed",
              "description": null,
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "Datetime",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "validUntil",
              "description": null,
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "Datetime",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "createdBy",
              "description": null,
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "modifiedBy",
              "description": null,
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "closedBy",
              "description": null,
              "args": [],
              "type": {
                "kind": "SCALAR",
                "name": "Int",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "recruitByRecruitId",
              "description": "Reads a single `Recruit` that is related to this `Doc`.",
              "args": [],
              "type": {
                "kind": "OBJECT",
                "name": "Recruit",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "employeeByCreatedBy",
              "description": "Reads a single `Employee` that is related to this `Doc`.",
              "args": [],
              "type": {
                "kind": "OBJECT",
                "name": "Employee",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "employeeByModifiedBy",
              "description": "Reads a single `Employee` that is related to this `Doc`.",
              "args": [],
              "type": {
                "kind": "OBJECT",
                "name": "Employee",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "employeeByClosedBy",
              "description": "Reads a single `Employee` that is related to this `Doc`.",
              "args": [],
              "type": {
                "kind": "OBJECT",
                "name": "Employee",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            }
          ],
          "inputFields": null,
          "interfaces": [
            {
              "kind": "INTERFACE",
              "name": "Node",
              "ofType": null
            }
          ],
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "OBJECT",
          "name": "Recruit",
          "description": null,
          "fields": [
            {
              "name": "id",
              "description": "A globally unique identifier. Can be used in various places throughout the system to identify this single value.",
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "ID",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "rowId",
              "description": null,
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "lastName",
              "description": null,
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "firstName",
              "description": null,
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "middleName",
              "description": null,
              "args": [],
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "suffixName",
              "description": null,
              "args": [],
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "address1",
              "description": null,
              "args": [],
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "address2",
              "description": null,
              "args": [],
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "city",
              "description": null,
              "args": [],
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "state",
              "description": null,
              "args": [],
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "county",
              "description": null,
              "args": [],
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "country",
              "description": null,
              "args": [],
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "citizenship",
              "description": null,
              "args": [],
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "gender",
              "description": null,
              "args": [],
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "ethnic",
              "description": null,
              "args": [],
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "race",
              "description": null,
              "args": [],
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "maritalStatus",
              "description": null,
              "args": [],
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "dependents",
              "description": null,
              "args": [],
              "type": {
                "kind": "SCALAR",
                "name": "Int",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "religion",
              "description": null,
              "args": [],
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "education",
              "description": null,
              "args": [],
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "foreignLanguage",
              "description": null,
              "args": [],
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "driversLicense",
              "description": null,
              "args": [],
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "driversLicenseExp",
              "description": null,
              "args": [],
              "type": {
                "kind": "SCALAR",
                "name": "Date",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "personId",
              "description": null,
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "recruiterId",
              "description": null,
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "mepsId",
              "description": null,
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "asvabReq",
              "description": null,
              "args": [],
              "type": {
                "kind": "SCALAR",
                "name": "Boolean",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "lastHighSchool",
              "description": null,
              "args": [],
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "medicalReq",
              "description": null,
              "args": [],
              "type": {
                "kind": "SCALAR",
                "name": "Boolean",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "medicalInsurance",
              "description": null,
              "args": [],
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "created",
              "description": null,
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "Datetime",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "modified",
              "description": null,
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "Datetime",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "closed",
              "description": null,
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "Datetime",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "validUntil",
              "description": null,
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "Datetime",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "createdBy",
              "description": null,
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "modifiedBy",
              "description": null,
              "args": [],
              "type": {
                "kind": "SCALAR",
                "name": "Int",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "employeeByCreatedBy",
              "description": "Reads a single `Employee` that is related to this `Recruit`.",
              "args": [],
              "type": {
                "kind": "OBJECT",
                "name": "Employee",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "employeeByModifiedBy",
              "description": "Reads a single `Employee` that is related to this `Recruit`.",
              "args": [],
              "type": {
                "kind": "OBJECT",
                "name": "Employee",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "mepByMepsId",
              "description": "Reads a single `Mep` that is related to this `Recruit`.",
              "args": [],
              "type": {
                "kind": "OBJECT",
                "name": "Mep",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "recruiterByRecruiterId",
              "description": "Reads a single `Recruiter` that is related to this `Recruit`.",
              "args": [],
              "type": {
                "kind": "OBJECT",
                "name": "Recruiter",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "personByPersonId",
              "description": "Reads a single `Person` that is related to this `Recruit`.",
              "args": [],
              "type": {
                "kind": "OBJECT",
                "name": "Person",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "docsByRecruitId",
              "description": "Reads and enables paginatation through a set of `Doc`.",
              "args": [
                {
                  "name": "orderBy",
                  "description": "The method to use when ordering `Doc`.",
                  "type": {
                    "kind": "ENUM",
                    "name": "DocsOrderBy",
                    "ofType": null
                  },
                  "defaultValue": "PRIMARY_KEY_ASC"
                },
                {
                  "name": "before",
                  "description": "Read all values in the set before (above) this cursor.",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Cursor",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "name": "after",
                  "description": "Read all values in the set after (below) this cursor.",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Cursor",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "name": "first",
                  "description": "Only read the first `n` values of the set.",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Int",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "name": "last",
                  "description": "Only read the last `n` values of the set.",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Int",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "name": "offset",
                  "description": "Skip the first `n` values from our `after` cursor, an alternative to cursor based pagination. May not be used with `last`.",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Int",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "name": "condition",
                  "description": "A condition to be used in determining which values should be returned by the collection.",
                  "type": {
                    "kind": "INPUT_OBJECT",
                    "name": "DocCondition",
                    "ofType": null
                  },
                  "defaultValue": null
                }
              ],
              "type": {
                "kind": "OBJECT",
                "name": "DocsConnection",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "medicalsByRecruitId",
              "description": "Reads and enables paginatation through a set of `Medical`.",
              "args": [
                {
                  "name": "orderBy",
                  "description": "The method to use when ordering `Medical`.",
                  "type": {
                    "kind": "ENUM",
                    "name": "MedicalsOrderBy",
                    "ofType": null
                  },
                  "defaultValue": "NATURAL"
                },
                {
                  "name": "before",
                  "description": "Read all values in the set before (above) this cursor.",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Cursor",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "name": "after",
                  "description": "Read all values in the set after (below) this cursor.",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Cursor",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "name": "first",
                  "description": "Only read the first `n` values of the set.",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Int",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "name": "last",
                  "description": "Only read the last `n` values of the set.",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Int",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "name": "offset",
                  "description": "Skip the first `n` values from our `after` cursor, an alternative to cursor based pagination. May not be used with `last`.",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Int",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "name": "condition",
                  "description": "A condition to be used in determining which values should be returned by the collection.",
                  "type": {
                    "kind": "INPUT_OBJECT",
                    "name": "MedicalCondition",
                    "ofType": null
                  },
                  "defaultValue": null
                }
              ],
              "type": {
                "kind": "OBJECT",
                "name": "MedicalsConnection",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "operationsByRecruitId",
              "description": "Reads and enables paginatation through a set of `Operation`.",
              "args": [
                {
                  "name": "orderBy",
                  "description": "The method to use when ordering `Operation`.",
                  "type": {
                    "kind": "ENUM",
                    "name": "OperationsOrderBy",
                    "ofType": null
                  },
                  "defaultValue": "NATURAL"
                },
                {
                  "name": "before",
                  "description": "Read all values in the set before (above) this cursor.",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Cursor",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "name": "after",
                  "description": "Read all values in the set after (below) this cursor.",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Cursor",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "name": "first",
                  "description": "Only read the first `n` values of the set.",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Int",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "name": "last",
                  "description": "Only read the last `n` values of the set.",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Int",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "name": "offset",
                  "description": "Skip the first `n` values from our `after` cursor, an alternative to cursor based pagination. May not be used with `last`.",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Int",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "name": "condition",
                  "description": "A condition to be used in determining which values should be returned by the collection.",
                  "type": {
                    "kind": "INPUT_OBJECT",
                    "name": "OperationCondition",
                    "ofType": null
                  },
                  "defaultValue": null
                }
              ],
              "type": {
                "kind": "OBJECT",
                "name": "OperationsConnection",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "testsByRecruitId",
              "description": "Reads and enables paginatation through a set of `Test`.",
              "args": [
                {
                  "name": "orderBy",
                  "description": "The method to use when ordering `Test`.",
                  "type": {
                    "kind": "ENUM",
                    "name": "TestsOrderBy",
                    "ofType": null
                  },
                  "defaultValue": "PRIMARY_KEY_ASC"
                },
                {
                  "name": "before",
                  "description": "Read all values in the set before (above) this cursor.",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Cursor",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "name": "after",
                  "description": "Read all values in the set after (below) this cursor.",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Cursor",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "name": "first",
                  "description": "Only read the first `n` values of the set.",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Int",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "name": "last",
                  "description": "Only read the last `n` values of the set.",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Int",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "name": "offset",
                  "description": "Skip the first `n` values from our `after` cursor, an alternative to cursor based pagination. May not be used with `last`.",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Int",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "name": "condition",
                  "description": "A condition to be used in determining which values should be returned by the collection.",
                  "type": {
                    "kind": "INPUT_OBJECT",
                    "name": "TestCondition",
                    "ofType": null
                  },
                  "defaultValue": null
                }
              ],
              "type": {
                "kind": "OBJECT",
                "name": "TestsConnection",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            }
          ],
          "inputFields": null,
          "interfaces": [
            {
              "kind": "INTERFACE",
              "name": "Node",
              "ofType": null
            }
          ],
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "SCALAR",
          "name": "Date",
          "description": "The day, does not include a time.",
          "fields": null,
          "inputFields": null,
          "interfaces": null,
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "OBJECT",
          "name": "Employee",
          "description": null,
          "fields": [
            {
              "name": "id",
              "description": "A globally unique identifier. Can be used in various places throughout the system to identify this single value.",
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "ID",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "rowId",
              "description": null,
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "lastName",
              "description": null,
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "firstName",
              "description": null,
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "role",
              "description": null,
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "created",
              "description": null,
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "Datetime",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "modified",
              "description": null,
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "Datetime",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "closed",
              "description": null,
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "Datetime",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "validUntil",
              "description": null,
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "Datetime",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "createdBy",
              "description": null,
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "modifiedBy",
              "description": null,
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "docsByCreatedBy",
              "description": "Reads and enables paginatation through a set of `Doc`.",
              "args": [
                {
                  "name": "orderBy",
                  "description": "The method to use when ordering `Doc`.",
                  "type": {
                    "kind": "ENUM",
                    "name": "DocsOrderBy",
                    "ofType": null
                  },
                  "defaultValue": "PRIMARY_KEY_ASC"
                },
                {
                  "name": "before",
                  "description": "Read all values in the set before (above) this cursor.",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Cursor",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "name": "after",
                  "description": "Read all values in the set after (below) this cursor.",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Cursor",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "name": "first",
                  "description": "Only read the first `n` values of the set.",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Int",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "name": "last",
                  "description": "Only read the last `n` values of the set.",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Int",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "name": "offset",
                  "description": "Skip the first `n` values from our `after` cursor, an alternative to cursor based pagination. May not be used with `last`.",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Int",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "name": "condition",
                  "description": "A condition to be used in determining which values should be returned by the collection.",
                  "type": {
                    "kind": "INPUT_OBJECT",
                    "name": "DocCondition",
                    "ofType": null
                  },
                  "defaultValue": null
                }
              ],
              "type": {
                "kind": "OBJECT",
                "name": "DocsConnection",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "docsByModifiedBy",
              "description": "Reads and enables paginatation through a set of `Doc`.",
              "args": [
                {
                  "name": "orderBy",
                  "description": "The method to use when ordering `Doc`.",
                  "type": {
                    "kind": "ENUM",
                    "name": "DocsOrderBy",
                    "ofType": null
                  },
                  "defaultValue": "PRIMARY_KEY_ASC"
                },
                {
                  "name": "before",
                  "description": "Read all values in the set before (above) this cursor.",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Cursor",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "name": "after",
                  "description": "Read all values in the set after (below) this cursor.",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Cursor",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "name": "first",
                  "description": "Only read the first `n` values of the set.",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Int",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "name": "last",
                  "description": "Only read the last `n` values of the set.",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Int",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "name": "offset",
                  "description": "Skip the first `n` values from our `after` cursor, an alternative to cursor based pagination. May not be used with `last`.",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Int",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "name": "condition",
                  "description": "A condition to be used in determining which values should be returned by the collection.",
                  "type": {
                    "kind": "INPUT_OBJECT",
                    "name": "DocCondition",
                    "ofType": null
                  },
                  "defaultValue": null
                }
              ],
              "type": {
                "kind": "OBJECT",
                "name": "DocsConnection",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "docsByClosedBy",
              "description": "Reads and enables paginatation through a set of `Doc`.",
              "args": [
                {
                  "name": "orderBy",
                  "description": "The method to use when ordering `Doc`.",
                  "type": {
                    "kind": "ENUM",
                    "name": "DocsOrderBy",
                    "ofType": null
                  },
                  "defaultValue": "PRIMARY_KEY_ASC"
                },
                {
                  "name": "before",
                  "description": "Read all values in the set before (above) this cursor.",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Cursor",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "name": "after",
                  "description": "Read all values in the set after (below) this cursor.",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Cursor",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "name": "first",
                  "description": "Only read the first `n` values of the set.",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Int",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "name": "last",
                  "description": "Only read the last `n` values of the set.",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Int",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "name": "offset",
                  "description": "Skip the first `n` values from our `after` cursor, an alternative to cursor based pagination. May not be used with `last`.",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Int",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "name": "condition",
                  "description": "A condition to be used in determining which values should be returned by the collection.",
                  "type": {
                    "kind": "INPUT_OBJECT",
                    "name": "DocCondition",
                    "ofType": null
                  },
                  "defaultValue": null
                }
              ],
              "type": {
                "kind": "OBJECT",
                "name": "DocsConnection",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "medicalsByCreatedBy",
              "description": "Reads and enables paginatation through a set of `Medical`.",
              "args": [
                {
                  "name": "orderBy",
                  "description": "The method to use when ordering `Medical`.",
                  "type": {
                    "kind": "ENUM",
                    "name": "MedicalsOrderBy",
                    "ofType": null
                  },
                  "defaultValue": "NATURAL"
                },
                {
                  "name": "before",
                  "description": "Read all values in the set before (above) this cursor.",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Cursor",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "name": "after",
                  "description": "Read all values in the set after (below) this cursor.",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Cursor",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "name": "first",
                  "description": "Only read the first `n` values of the set.",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Int",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "name": "last",
                  "description": "Only read the last `n` values of the set.",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Int",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "name": "offset",
                  "description": "Skip the first `n` values from our `after` cursor, an alternative to cursor based pagination. May not be used with `last`.",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Int",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "name": "condition",
                  "description": "A condition to be used in determining which values should be returned by the collection.",
                  "type": {
                    "kind": "INPUT_OBJECT",
                    "name": "MedicalCondition",
                    "ofType": null
                  },
                  "defaultValue": null
                }
              ],
              "type": {
                "kind": "OBJECT",
                "name": "MedicalsConnection",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "medicalsByModifiedBy",
              "description": "Reads and enables paginatation through a set of `Medical`.",
              "args": [
                {
                  "name": "orderBy",
                  "description": "The method to use when ordering `Medical`.",
                  "type": {
                    "kind": "ENUM",
                    "name": "MedicalsOrderBy",
                    "ofType": null
                  },
                  "defaultValue": "NATURAL"
                },
                {
                  "name": "before",
                  "description": "Read all values in the set before (above) this cursor.",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Cursor",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "name": "after",
                  "description": "Read all values in the set after (below) this cursor.",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Cursor",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "name": "first",
                  "description": "Only read the first `n` values of the set.",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Int",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "name": "last",
                  "description": "Only read the last `n` values of the set.",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Int",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "name": "offset",
                  "description": "Skip the first `n` values from our `after` cursor, an alternative to cursor based pagination. May not be used with `last`.",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Int",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "name": "condition",
                  "description": "A condition to be used in determining which values should be returned by the collection.",
                  "type": {
                    "kind": "INPUT_OBJECT",
                    "name": "MedicalCondition",
                    "ofType": null
                  },
                  "defaultValue": null
                }
              ],
              "type": {
                "kind": "OBJECT",
                "name": "MedicalsConnection",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "medicalsByClosedBy",
              "description": "Reads and enables paginatation through a set of `Medical`.",
              "args": [
                {
                  "name": "orderBy",
                  "description": "The method to use when ordering `Medical`.",
                  "type": {
                    "kind": "ENUM",
                    "name": "MedicalsOrderBy",
                    "ofType": null
                  },
                  "defaultValue": "NATURAL"
                },
                {
                  "name": "before",
                  "description": "Read all values in the set before (above) this cursor.",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Cursor",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "name": "after",
                  "description": "Read all values in the set after (below) this cursor.",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Cursor",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "name": "first",
                  "description": "Only read the first `n` values of the set.",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Int",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "name": "last",
                  "description": "Only read the last `n` values of the set.",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Int",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "name": "offset",
                  "description": "Skip the first `n` values from our `after` cursor, an alternative to cursor based pagination. May not be used with `last`.",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Int",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "name": "condition",
                  "description": "A condition to be used in determining which values should be returned by the collection.",
                  "type": {
                    "kind": "INPUT_OBJECT",
                    "name": "MedicalCondition",
                    "ofType": null
                  },
                  "defaultValue": null
                }
              ],
              "type": {
                "kind": "OBJECT",
                "name": "MedicalsConnection",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "operationsByCreatedBy",
              "description": "Reads and enables paginatation through a set of `Operation`.",
              "args": [
                {
                  "name": "orderBy",
                  "description": "The method to use when ordering `Operation`.",
                  "type": {
                    "kind": "ENUM",
                    "name": "OperationsOrderBy",
                    "ofType": null
                  },
                  "defaultValue": "NATURAL"
                },
                {
                  "name": "before",
                  "description": "Read all values in the set before (above) this cursor.",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Cursor",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "name": "after",
                  "description": "Read all values in the set after (below) this cursor.",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Cursor",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "name": "first",
                  "description": "Only read the first `n` values of the set.",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Int",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "name": "last",
                  "description": "Only read the last `n` values of the set.",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Int",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "name": "offset",
                  "description": "Skip the first `n` values from our `after` cursor, an alternative to cursor based pagination. May not be used with `last`.",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Int",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "name": "condition",
                  "description": "A condition to be used in determining which values should be returned by the collection.",
                  "type": {
                    "kind": "INPUT_OBJECT",
                    "name": "OperationCondition",
                    "ofType": null
                  },
                  "defaultValue": null
                }
              ],
              "type": {
                "kind": "OBJECT",
                "name": "OperationsConnection",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "operationsByModifiedBy",
              "description": "Reads and enables paginatation through a set of `Operation`.",
              "args": [
                {
                  "name": "orderBy",
                  "description": "The method to use when ordering `Operation`.",
                  "type": {
                    "kind": "ENUM",
                    "name": "OperationsOrderBy",
                    "ofType": null
                  },
                  "defaultValue": "NATURAL"
                },
                {
                  "name": "before",
                  "description": "Read all values in the set before (above) this cursor.",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Cursor",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "name": "after",
                  "description": "Read all values in the set after (below) this cursor.",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Cursor",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "name": "first",
                  "description": "Only read the first `n` values of the set.",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Int",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "name": "last",
                  "description": "Only read the last `n` values of the set.",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Int",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "name": "offset",
                  "description": "Skip the first `n` values from our `after` cursor, an alternative to cursor based pagination. May not be used with `last`.",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Int",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "name": "condition",
                  "description": "A condition to be used in determining which values should be returned by the collection.",
                  "type": {
                    "kind": "INPUT_OBJECT",
                    "name": "OperationCondition",
                    "ofType": null
                  },
                  "defaultValue": null
                }
              ],
              "type": {
                "kind": "OBJECT",
                "name": "OperationsConnection",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "operationsByClosedBy",
              "description": "Reads and enables paginatation through a set of `Operation`.",
              "args": [
                {
                  "name": "orderBy",
                  "description": "The method to use when ordering `Operation`.",
                  "type": {
                    "kind": "ENUM",
                    "name": "OperationsOrderBy",
                    "ofType": null
                  },
                  "defaultValue": "NATURAL"
                },
                {
                  "name": "before",
                  "description": "Read all values in the set before (above) this cursor.",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Cursor",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "name": "after",
                  "description": "Read all values in the set after (below) this cursor.",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Cursor",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "name": "first",
                  "description": "Only read the first `n` values of the set.",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Int",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "name": "last",
                  "description": "Only read the last `n` values of the set.",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Int",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "name": "offset",
                  "description": "Skip the first `n` values from our `after` cursor, an alternative to cursor based pagination. May not be used with `last`.",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Int",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "name": "condition",
                  "description": "A condition to be used in determining which values should be returned by the collection.",
                  "type": {
                    "kind": "INPUT_OBJECT",
                    "name": "OperationCondition",
                    "ofType": null
                  },
                  "defaultValue": null
                }
              ],
              "type": {
                "kind": "OBJECT",
                "name": "OperationsConnection",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "peopleByCreatedBy",
              "description": "Reads and enables paginatation through a set of `Person`.",
              "args": [
                {
                  "name": "orderBy",
                  "description": "The method to use when ordering `Person`.",
                  "type": {
                    "kind": "ENUM",
                    "name": "PeopleOrderBy",
                    "ofType": null
                  },
                  "defaultValue": "PRIMARY_KEY_ASC"
                },
                {
                  "name": "before",
                  "description": "Read all values in the set before (above) this cursor.",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Cursor",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "name": "after",
                  "description": "Read all values in the set after (below) this cursor.",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Cursor",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "name": "first",
                  "description": "Only read the first `n` values of the set.",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Int",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "name": "last",
                  "description": "Only read the last `n` values of the set.",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Int",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "name": "offset",
                  "description": "Skip the first `n` values from our `after` cursor, an alternative to cursor based pagination. May not be used with `last`.",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Int",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "name": "condition",
                  "description": "A condition to be used in determining which values should be returned by the collection.",
                  "type": {
                    "kind": "INPUT_OBJECT",
                    "name": "PersonCondition",
                    "ofType": null
                  },
                  "defaultValue": null
                }
              ],
              "type": {
                "kind": "OBJECT",
                "name": "PeopleConnection",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "peopleByModifiedBy",
              "description": "Reads and enables paginatation through a set of `Person`.",
              "args": [
                {
                  "name": "orderBy",
                  "description": "The method to use when ordering `Person`.",
                  "type": {
                    "kind": "ENUM",
                    "name": "PeopleOrderBy",
                    "ofType": null
                  },
                  "defaultValue": "PRIMARY_KEY_ASC"
                },
                {
                  "name": "before",
                  "description": "Read all values in the set before (above) this cursor.",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Cursor",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "name": "after",
                  "description": "Read all values in the set after (below) this cursor.",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Cursor",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "name": "first",
                  "description": "Only read the first `n` values of the set.",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Int",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "name": "last",
                  "description": "Only read the last `n` values of the set.",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Int",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "name": "offset",
                  "description": "Skip the first `n` values from our `after` cursor, an alternative to cursor based pagination. May not be used with `last`.",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Int",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "name": "condition",
                  "description": "A condition to be used in determining which values should be returned by the collection.",
                  "type": {
                    "kind": "INPUT_OBJECT",
                    "name": "PersonCondition",
                    "ofType": null
                  },
                  "defaultValue": null
                }
              ],
              "type": {
                "kind": "OBJECT",
                "name": "PeopleConnection",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "recruitsByCreatedBy",
              "description": "Reads and enables paginatation through a set of `Recruit`.",
              "args": [
                {
                  "name": "orderBy",
                  "description": "The method to use when ordering `Recruit`.",
                  "type": {
                    "kind": "ENUM",
                    "name": "RecruitsOrderBy",
                    "ofType": null
                  },
                  "defaultValue": "PRIMARY_KEY_ASC"
                },
                {
                  "name": "before",
                  "description": "Read all values in the set before (above) this cursor.",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Cursor",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "name": "after",
                  "description": "Read all values in the set after (below) this cursor.",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Cursor",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "name": "first",
                  "description": "Only read the first `n` values of the set.",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Int",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "name": "last",
                  "description": "Only read the last `n` values of the set.",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Int",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "name": "offset",
                  "description": "Skip the first `n` values from our `after` cursor, an alternative to cursor based pagination. May not be used with `last`.",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Int",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "name": "condition",
                  "description": "A condition to be used in determining which values should be returned by the collection.",
                  "type": {
                    "kind": "INPUT_OBJECT",
                    "name": "RecruitCondition",
                    "ofType": null
                  },
                  "defaultValue": null
                }
              ],
              "type": {
                "kind": "OBJECT",
                "name": "RecruitsConnection",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "recruitsByModifiedBy",
              "description": "Reads and enables paginatation through a set of `Recruit`.",
              "args": [
                {
                  "name": "orderBy",
                  "description": "The method to use when ordering `Recruit`.",
                  "type": {
                    "kind": "ENUM",
                    "name": "RecruitsOrderBy",
                    "ofType": null
                  },
                  "defaultValue": "PRIMARY_KEY_ASC"
                },
                {
                  "name": "before",
                  "description": "Read all values in the set before (above) this cursor.",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Cursor",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "name": "after",
                  "description": "Read all values in the set after (below) this cursor.",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Cursor",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "name": "first",
                  "description": "Only read the first `n` values of the set.",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Int",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "name": "last",
                  "description": "Only read the last `n` values of the set.",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Int",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "name": "offset",
                  "description": "Skip the first `n` values from our `after` cursor, an alternative to cursor based pagination. May not be used with `last`.",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Int",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "name": "condition",
                  "description": "A condition to be used in determining which values should be returned by the collection.",
                  "type": {
                    "kind": "INPUT_OBJECT",
                    "name": "RecruitCondition",
                    "ofType": null
                  },
                  "defaultValue": null
                }
              ],
              "type": {
                "kind": "OBJECT",
                "name": "RecruitsConnection",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "recruitersByCreatedBy",
              "description": "Reads and enables paginatation through a set of `Recruiter`.",
              "args": [
                {
                  "name": "orderBy",
                  "description": "The method to use when ordering `Recruiter`.",
                  "type": {
                    "kind": "ENUM",
                    "name": "RecruitersOrderBy",
                    "ofType": null
                  },
                  "defaultValue": "PRIMARY_KEY_ASC"
                },
                {
                  "name": "before",
                  "description": "Read all values in the set before (above) this cursor.",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Cursor",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "name": "after",
                  "description": "Read all values in the set after (below) this cursor.",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Cursor",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "name": "first",
                  "description": "Only read the first `n` values of the set.",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Int",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "name": "last",
                  "description": "Only read the last `n` values of the set.",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Int",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "name": "offset",
                  "description": "Skip the first `n` values from our `after` cursor, an alternative to cursor based pagination. May not be used with `last`.",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Int",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "name": "condition",
                  "description": "A condition to be used in determining which values should be returned by the collection.",
                  "type": {
                    "kind": "INPUT_OBJECT",
                    "name": "RecruiterCondition",
                    "ofType": null
                  },
                  "defaultValue": null
                }
              ],
              "type": {
                "kind": "OBJECT",
                "name": "RecruitersConnection",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "recruitersByModifiedBy",
              "description": "Reads and enables paginatation through a set of `Recruiter`.",
              "args": [
                {
                  "name": "orderBy",
                  "description": "The method to use when ordering `Recruiter`.",
                  "type": {
                    "kind": "ENUM",
                    "name": "RecruitersOrderBy",
                    "ofType": null
                  },
                  "defaultValue": "PRIMARY_KEY_ASC"
                },
                {
                  "name": "before",
                  "description": "Read all values in the set before (above) this cursor.",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Cursor",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "name": "after",
                  "description": "Read all values in the set after (below) this cursor.",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Cursor",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "name": "first",
                  "description": "Only read the first `n` values of the set.",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Int",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "name": "last",
                  "description": "Only read the last `n` values of the set.",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Int",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "name": "offset",
                  "description": "Skip the first `n` values from our `after` cursor, an alternative to cursor based pagination. May not be used with `last`.",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Int",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "name": "condition",
                  "description": "A condition to be used in determining which values should be returned by the collection.",
                  "type": {
                    "kind": "INPUT_OBJECT",
                    "name": "RecruiterCondition",
                    "ofType": null
                  },
                  "defaultValue": null
                }
              ],
              "type": {
                "kind": "OBJECT",
                "name": "RecruitersConnection",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "testsByCreatedBy",
              "description": "Reads and enables paginatation through a set of `Test`.",
              "args": [
                {
                  "name": "orderBy",
                  "description": "The method to use when ordering `Test`.",
                  "type": {
                    "kind": "ENUM",
                    "name": "TestsOrderBy",
                    "ofType": null
                  },
                  "defaultValue": "PRIMARY_KEY_ASC"
                },
                {
                  "name": "before",
                  "description": "Read all values in the set before (above) this cursor.",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Cursor",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "name": "after",
                  "description": "Read all values in the set after (below) this cursor.",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Cursor",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "name": "first",
                  "description": "Only read the first `n` values of the set.",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Int",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "name": "last",
                  "description": "Only read the last `n` values of the set.",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Int",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "name": "offset",
                  "description": "Skip the first `n` values from our `after` cursor, an alternative to cursor based pagination. May not be used with `last`.",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Int",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "name": "condition",
                  "description": "A condition to be used in determining which values should be returned by the collection.",
                  "type": {
                    "kind": "INPUT_OBJECT",
                    "name": "TestCondition",
                    "ofType": null
                  },
                  "defaultValue": null
                }
              ],
              "type": {
                "kind": "OBJECT",
                "name": "TestsConnection",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "testsByModifiedBy",
              "description": "Reads and enables paginatation through a set of `Test`.",
              "args": [
                {
                  "name": "orderBy",
                  "description": "The method to use when ordering `Test`.",
                  "type": {
                    "kind": "ENUM",
                    "name": "TestsOrderBy",
                    "ofType": null
                  },
                  "defaultValue": "PRIMARY_KEY_ASC"
                },
                {
                  "name": "before",
                  "description": "Read all values in the set before (above) this cursor.",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Cursor",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "name": "after",
                  "description": "Read all values in the set after (below) this cursor.",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Cursor",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "name": "first",
                  "description": "Only read the first `n` values of the set.",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Int",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "name": "last",
                  "description": "Only read the last `n` values of the set.",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Int",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "name": "offset",
                  "description": "Skip the first `n` values from our `after` cursor, an alternative to cursor based pagination. May not be used with `last`.",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Int",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "name": "condition",
                  "description": "A condition to be used in determining which values should be returned by the collection.",
                  "type": {
                    "kind": "INPUT_OBJECT",
                    "name": "TestCondition",
                    "ofType": null
                  },
                  "defaultValue": null
                }
              ],
              "type": {
                "kind": "OBJECT",
                "name": "TestsConnection",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "testsByClosedBy",
              "description": "Reads and enables paginatation through a set of `Test`.",
              "args": [
                {
                  "name": "orderBy",
                  "description": "The method to use when ordering `Test`.",
                  "type": {
                    "kind": "ENUM",
                    "name": "TestsOrderBy",
                    "ofType": null
                  },
                  "defaultValue": "PRIMARY_KEY_ASC"
                },
                {
                  "name": "before",
                  "description": "Read all values in the set before (above) this cursor.",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Cursor",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "name": "after",
                  "description": "Read all values in the set after (below) this cursor.",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Cursor",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "name": "first",
                  "description": "Only read the first `n` values of the set.",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Int",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "name": "last",
                  "description": "Only read the last `n` values of the set.",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Int",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "name": "offset",
                  "description": "Skip the first `n` values from our `after` cursor, an alternative to cursor based pagination. May not be used with `last`.",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Int",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "name": "condition",
                  "description": "A condition to be used in determining which values should be returned by the collection.",
                  "type": {
                    "kind": "INPUT_OBJECT",
                    "name": "TestCondition",
                    "ofType": null
                  },
                  "defaultValue": null
                }
              ],
              "type": {
                "kind": "OBJECT",
                "name": "TestsConnection",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            }
          ],
          "inputFields": null,
          "interfaces": [
            {
              "kind": "INTERFACE",
              "name": "Node",
              "ofType": null
            }
          ],
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "ENUM",
          "name": "MedicalsOrderBy",
          "description": "Methods to use when ordering `Medical`.",
          "fields": null,
          "inputFields": null,
          "interfaces": null,
          "enumValues": [
            {
              "name": "NATURAL",
              "description": null,
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "RECRUIT_ID_ASC",
              "description": null,
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "RECRUIT_ID_DESC",
              "description": null,
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "EXAM_TYPE_ASC",
              "description": null,
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "EXAM_TYPE_DESC",
              "description": null,
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "RESULT_ASC",
              "description": null,
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "RESULT_DESC",
              "description": null,
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "CREATED_ASC",
              "description": null,
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "CREATED_DESC",
              "description": null,
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "MODIFIED_ASC",
              "description": null,
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "MODIFIED_DESC",
              "description": null,
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "CLOSED_ASC",
              "description": null,
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "CLOSED_DESC",
              "description": null,
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "VALID_UNTIL_ASC",
              "description": null,
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "VALID_UNTIL_DESC",
              "description": null,
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "CREATED_BY_ASC",
              "description": null,
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "CREATED_BY_DESC",
              "description": null,
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "MODIFIED_BY_ASC",
              "description": null,
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "MODIFIED_BY_DESC",
              "description": null,
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "CLOSED_BY_ASC",
              "description": null,
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "CLOSED_BY_DESC",
              "description": null,
              "isDeprecated": false,
              "deprecationReason": null
            }
          ],
          "possibleTypes": null
        },
        {
          "kind": "INPUT_OBJECT",
          "name": "MedicalCondition",
          "description": "A condition to be used against `Medical` object types. All fields are tested for equality and combined with a logical ‘and.’",
          "fields": null,
          "inputFields": [
            {
              "name": "recruitId",
              "description": "Checks for equality with the object’s `recruitId` field.",
              "type": {
                "kind": "SCALAR",
                "name": "Int",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "examType",
              "description": "Checks for equality with the object’s `examType` field.",
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "result",
              "description": "Checks for equality with the object’s `result` field.",
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "created",
              "description": "Checks for equality with the object’s `created` field.",
              "type": {
                "kind": "SCALAR",
                "name": "Datetime",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "modified",
              "description": "Checks for equality with the object’s `modified` field.",
              "type": {
                "kind": "SCALAR",
                "name": "Datetime",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "closed",
              "description": "Checks for equality with the object’s `closed` field.",
              "type": {
                "kind": "SCALAR",
                "name": "Datetime",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "validUntil",
              "description": "Checks for equality with the object’s `validUntil` field.",
              "type": {
                "kind": "SCALAR",
                "name": "Datetime",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "createdBy",
              "description": "Checks for equality with the object’s `createdBy` field.",
              "type": {
                "kind": "SCALAR",
                "name": "Int",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "modifiedBy",
              "description": "Checks for equality with the object’s `modifiedBy` field.",
              "type": {
                "kind": "SCALAR",
                "name": "Int",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "closedBy",
              "description": "Checks for equality with the object’s `closedBy` field.",
              "type": {
                "kind": "SCALAR",
                "name": "Int",
                "ofType": null
              },
              "defaultValue": null
            }
          ],
          "interfaces": null,
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "OBJECT",
          "name": "MedicalsConnection",
          "description": "A connection to a list of `Medical` values.",
          "fields": [
            {
              "name": "pageInfo",
              "description": "Information to aid in pagination.",
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "OBJECT",
                  "name": "PageInfo",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "totalCount",
              "description": "The count of *all* `Medical` you could get from the connection.",
              "args": [],
              "type": {
                "kind": "SCALAR",
                "name": "Int",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "edges",
              "description": "A list of edges which contains the `Medical` and cursor to aid in pagination.",
              "args": [],
              "type": {
                "kind": "LIST",
                "name": null,
                "ofType": {
                  "kind": "OBJECT",
                  "name": "MedicalsEdge",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "nodes",
              "description": "A list of `Medical` objects.",
              "args": [],
              "type": {
                "kind": "LIST",
                "name": null,
                "ofType": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "Medical",
                    "ofType": null
                  }
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            }
          ],
          "inputFields": null,
          "interfaces": [],
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "OBJECT",
          "name": "MedicalsEdge",
          "description": "A `Medical` edge in the connection.",
          "fields": [
            {
              "name": "cursor",
              "description": "A cursor for use in pagination.",
              "args": [],
              "type": {
                "kind": "SCALAR",
                "name": "Cursor",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "node",
              "description": "The `Medical` at the end of the edge.",
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "OBJECT",
                  "name": "Medical",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            }
          ],
          "inputFields": null,
          "interfaces": [],
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "OBJECT",
          "name": "Medical",
          "description": null,
          "fields": [
            {
              "name": "recruitId",
              "description": null,
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "examType",
              "description": null,
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "result",
              "description": null,
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "created",
              "description": null,
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "Datetime",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "modified",
              "description": null,
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "Datetime",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "closed",
              "description": null,
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "Datetime",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "validUntil",
              "description": null,
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "Datetime",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "createdBy",
              "description": null,
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "modifiedBy",
              "description": null,
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "closedBy",
              "description": null,
              "args": [],
              "type": {
                "kind": "SCALAR",
                "name": "Int",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "recruitByRecruitId",
              "description": "Reads a single `Recruit` that is related to this `Medical`.",
              "args": [],
              "type": {
                "kind": "OBJECT",
                "name": "Recruit",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "employeeByCreatedBy",
              "description": "Reads a single `Employee` that is related to this `Medical`.",
              "args": [],
              "type": {
                "kind": "OBJECT",
                "name": "Employee",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "employeeByModifiedBy",
              "description": "Reads a single `Employee` that is related to this `Medical`.",
              "args": [],
              "type": {
                "kind": "OBJECT",
                "name": "Employee",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "employeeByClosedBy",
              "description": "Reads a single `Employee` that is related to this `Medical`.",
              "args": [],
              "type": {
                "kind": "OBJECT",
                "name": "Employee",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            }
          ],
          "inputFields": null,
          "interfaces": [],
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "ENUM",
          "name": "OperationsOrderBy",
          "description": "Methods to use when ordering `Operation`.",
          "fields": null,
          "inputFields": null,
          "interfaces": null,
          "enumValues": [
            {
              "name": "NATURAL",
              "description": null,
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "RECRUIT_ID_ASC",
              "description": null,
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "RECRUIT_ID_DESC",
              "description": null,
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "COUNSELED_ASC",
              "description": null,
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "COUNSELED_DESC",
              "description": null,
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "FINGERPRINTED_ASC",
              "description": null,
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "FINGERPRINTED_DESC",
              "description": null,
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "SWORN_IN_ASC",
              "description": null,
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "SWORN_IN_DESC",
              "description": null,
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "CONTRACTED_ASC",
              "description": null,
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "CONTRACTED_DESC",
              "description": null,
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "CREATED_ASC",
              "description": null,
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "CREATED_DESC",
              "description": null,
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "MODIFIED_ASC",
              "description": null,
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "MODIFIED_DESC",
              "description": null,
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "CLOSED_ASC",
              "description": null,
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "CLOSED_DESC",
              "description": null,
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "VALID_UNTIL_ASC",
              "description": null,
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "VALID_UNTIL_DESC",
              "description": null,
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "CREATED_BY_ASC",
              "description": null,
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "CREATED_BY_DESC",
              "description": null,
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "MODIFIED_BY_ASC",
              "description": null,
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "MODIFIED_BY_DESC",
              "description": null,
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "CLOSED_BY_ASC",
              "description": null,
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "CLOSED_BY_DESC",
              "description": null,
              "isDeprecated": false,
              "deprecationReason": null
            }
          ],
          "possibleTypes": null
        },
        {
          "kind": "INPUT_OBJECT",
          "name": "OperationCondition",
          "description": "A condition to be used against `Operation` object types. All fields are tested for equality and combined with a logical ‘and.’",
          "fields": null,
          "inputFields": [
            {
              "name": "recruitId",
              "description": "Checks for equality with the object’s `recruitId` field.",
              "type": {
                "kind": "SCALAR",
                "name": "Int",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "counseled",
              "description": "Checks for equality with the object’s `counseled` field.",
              "type": {
                "kind": "SCALAR",
                "name": "Datetime",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "fingerprinted",
              "description": "Checks for equality with the object’s `fingerprinted` field.",
              "type": {
                "kind": "SCALAR",
                "name": "Datetime",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "swornIn",
              "description": "Checks for equality with the object’s `swornIn` field.",
              "type": {
                "kind": "SCALAR",
                "name": "Datetime",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "contracted",
              "description": "Checks for equality with the object’s `contracted` field.",
              "type": {
                "kind": "SCALAR",
                "name": "Datetime",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "created",
              "description": "Checks for equality with the object’s `created` field.",
              "type": {
                "kind": "SCALAR",
                "name": "Datetime",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "modified",
              "description": "Checks for equality with the object’s `modified` field.",
              "type": {
                "kind": "SCALAR",
                "name": "Datetime",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "closed",
              "description": "Checks for equality with the object’s `closed` field.",
              "type": {
                "kind": "SCALAR",
                "name": "Datetime",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "validUntil",
              "description": "Checks for equality with the object’s `validUntil` field.",
              "type": {
                "kind": "SCALAR",
                "name": "Datetime",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "createdBy",
              "description": "Checks for equality with the object’s `createdBy` field.",
              "type": {
                "kind": "SCALAR",
                "name": "Int",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "modifiedBy",
              "description": "Checks for equality with the object’s `modifiedBy` field.",
              "type": {
                "kind": "SCALAR",
                "name": "Int",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "closedBy",
              "description": "Checks for equality with the object’s `closedBy` field.",
              "type": {
                "kind": "SCALAR",
                "name": "Int",
                "ofType": null
              },
              "defaultValue": null
            }
          ],
          "interfaces": null,
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "OBJECT",
          "name": "OperationsConnection",
          "description": "A connection to a list of `Operation` values.",
          "fields": [
            {
              "name": "pageInfo",
              "description": "Information to aid in pagination.",
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "OBJECT",
                  "name": "PageInfo",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "totalCount",
              "description": "The count of *all* `Operation` you could get from the connection.",
              "args": [],
              "type": {
                "kind": "SCALAR",
                "name": "Int",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "edges",
              "description": "A list of edges which contains the `Operation` and cursor to aid in pagination.",
              "args": [],
              "type": {
                "kind": "LIST",
                "name": null,
                "ofType": {
                  "kind": "OBJECT",
                  "name": "OperationsEdge",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "nodes",
              "description": "A list of `Operation` objects.",
              "args": [],
              "type": {
                "kind": "LIST",
                "name": null,
                "ofType": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "Operation",
                    "ofType": null
                  }
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            }
          ],
          "inputFields": null,
          "interfaces": [],
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "OBJECT",
          "name": "OperationsEdge",
          "description": "A `Operation` edge in the connection.",
          "fields": [
            {
              "name": "cursor",
              "description": "A cursor for use in pagination.",
              "args": [],
              "type": {
                "kind": "SCALAR",
                "name": "Cursor",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "node",
              "description": "The `Operation` at the end of the edge.",
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "OBJECT",
                  "name": "Operation",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            }
          ],
          "inputFields": null,
          "interfaces": [],
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "OBJECT",
          "name": "Operation",
          "description": null,
          "fields": [
            {
              "name": "recruitId",
              "description": null,
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "counseled",
              "description": null,
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "Datetime",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "fingerprinted",
              "description": null,
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "Datetime",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "swornIn",
              "description": null,
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "Datetime",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "contracted",
              "description": null,
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "Datetime",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "created",
              "description": null,
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "Datetime",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "modified",
              "description": null,
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "Datetime",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "closed",
              "description": null,
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "Datetime",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "validUntil",
              "description": null,
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "Datetime",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "createdBy",
              "description": null,
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "modifiedBy",
              "description": null,
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "closedBy",
              "description": null,
              "args": [],
              "type": {
                "kind": "SCALAR",
                "name": "Int",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "recruitByRecruitId",
              "description": "Reads a single `Recruit` that is related to this `Operation`.",
              "args": [],
              "type": {
                "kind": "OBJECT",
                "name": "Recruit",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "employeeByCreatedBy",
              "description": "Reads a single `Employee` that is related to this `Operation`.",
              "args": [],
              "type": {
                "kind": "OBJECT",
                "name": "Employee",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "employeeByModifiedBy",
              "description": "Reads a single `Employee` that is related to this `Operation`.",
              "args": [],
              "type": {
                "kind": "OBJECT",
                "name": "Employee",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "employeeByClosedBy",
              "description": "Reads a single `Employee` that is related to this `Operation`.",
              "args": [],
              "type": {
                "kind": "OBJECT",
                "name": "Employee",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            }
          ],
          "inputFields": null,
          "interfaces": [],
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "ENUM",
          "name": "PeopleOrderBy",
          "description": "Methods to use when ordering `Person`.",
          "fields": null,
          "inputFields": null,
          "interfaces": null,
          "enumValues": [
            {
              "name": "PRIMARY_KEY_ASC",
              "description": null,
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "PRIMARY_KEY_DESC",
              "description": null,
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "NATURAL",
              "description": null,
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "ID_ASC",
              "description": null,
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "ID_DESC",
              "description": null,
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "SSN_ASC",
              "description": null,
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "SSN_DESC",
              "description": null,
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "BIRTHDAY_ASC",
              "description": null,
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "BIRTHDAY_DESC",
              "description": null,
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "CITY_OF_BIRTH_ASC",
              "description": null,
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "CITY_OF_BIRTH_DESC",
              "description": null,
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "STATE_OF_BIRTH_ASC",
              "description": null,
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "STATE_OF_BIRTH_DESC",
              "description": null,
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "COUNTY_OF_BIRTH_ASC",
              "description": null,
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "COUNTY_OF_BIRTH_DESC",
              "description": null,
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "COUNTRY_OF_BIRTH_ASC",
              "description": null,
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "COUNTRY_OF_BIRTH_DESC",
              "description": null,
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "CREATED_ASC",
              "description": null,
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "CREATED_DESC",
              "description": null,
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "MODIFIED_ASC",
              "description": null,
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "MODIFIED_DESC",
              "description": null,
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "VALID_UNTIL_ASC",
              "description": null,
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "VALID_UNTIL_DESC",
              "description": null,
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "CREATED_BY_ASC",
              "description": null,
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "CREATED_BY_DESC",
              "description": null,
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "MODIFIED_BY_ASC",
              "description": null,
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "MODIFIED_BY_DESC",
              "description": null,
              "isDeprecated": false,
              "deprecationReason": null
            }
          ],
          "possibleTypes": null
        },
        {
          "kind": "INPUT_OBJECT",
          "name": "PersonCondition",
          "description": "A condition to be used against `Person` object types. All fields are tested for equality and combined with a logical ‘and.’",
          "fields": null,
          "inputFields": [
            {
              "name": "rowId",
              "description": "Checks for equality with the object’s `rowId` field.",
              "type": {
                "kind": "SCALAR",
                "name": "Int",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "ssn",
              "description": "Checks for equality with the object’s `ssn` field.",
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "birthday",
              "description": "Checks for equality with the object’s `birthday` field.",
              "type": {
                "kind": "SCALAR",
                "name": "Date",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "cityOfBirth",
              "description": "Checks for equality with the object’s `cityOfBirth` field.",
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "stateOfBirth",
              "description": "Checks for equality with the object’s `stateOfBirth` field.",
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "countyOfBirth",
              "description": "Checks for equality with the object’s `countyOfBirth` field.",
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "countryOfBirth",
              "description": "Checks for equality with the object’s `countryOfBirth` field.",
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "created",
              "description": "Checks for equality with the object’s `created` field.",
              "type": {
                "kind": "SCALAR",
                "name": "Datetime",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "modified",
              "description": "Checks for equality with the object’s `modified` field.",
              "type": {
                "kind": "SCALAR",
                "name": "Datetime",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "validUntil",
              "description": "Checks for equality with the object’s `validUntil` field.",
              "type": {
                "kind": "SCALAR",
                "name": "Datetime",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "createdBy",
              "description": "Checks for equality with the object’s `createdBy` field.",
              "type": {
                "kind": "SCALAR",
                "name": "Int",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "modifiedBy",
              "description": "Checks for equality with the object’s `modifiedBy` field.",
              "type": {
                "kind": "SCALAR",
                "name": "Int",
                "ofType": null
              },
              "defaultValue": null
            }
          ],
          "interfaces": null,
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "OBJECT",
          "name": "PeopleConnection",
          "description": "A connection to a list of `Person` values.",
          "fields": [
            {
              "name": "pageInfo",
              "description": "Information to aid in pagination.",
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "OBJECT",
                  "name": "PageInfo",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "totalCount",
              "description": "The count of *all* `Person` you could get from the connection.",
              "args": [],
              "type": {
                "kind": "SCALAR",
                "name": "Int",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "edges",
              "description": "A list of edges which contains the `Person` and cursor to aid in pagination.",
              "args": [],
              "type": {
                "kind": "LIST",
                "name": null,
                "ofType": {
                  "kind": "OBJECT",
                  "name": "PeopleEdge",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "nodes",
              "description": "A list of `Person` objects.",
              "args": [],
              "type": {
                "kind": "LIST",
                "name": null,
                "ofType": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "Person",
                    "ofType": null
                  }
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            }
          ],
          "inputFields": null,
          "interfaces": [],
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "OBJECT",
          "name": "PeopleEdge",
          "description": "A `Person` edge in the connection.",
          "fields": [
            {
              "name": "cursor",
              "description": "A cursor for use in pagination.",
              "args": [],
              "type": {
                "kind": "SCALAR",
                "name": "Cursor",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "node",
              "description": "The `Person` at the end of the edge.",
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "OBJECT",
                  "name": "Person",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            }
          ],
          "inputFields": null,
          "interfaces": [],
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "OBJECT",
          "name": "Person",
          "description": null,
          "fields": [
            {
              "name": "id",
              "description": "A globally unique identifier. Can be used in various places throughout the system to identify this single value.",
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "ID",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "rowId",
              "description": null,
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "ssn",
              "description": null,
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "birthday",
              "description": null,
              "args": [],
              "type": {
                "kind": "SCALAR",
                "name": "Date",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "cityOfBirth",
              "description": null,
              "args": [],
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "stateOfBirth",
              "description": null,
              "args": [],
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "countyOfBirth",
              "description": null,
              "args": [],
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "countryOfBirth",
              "description": null,
              "args": [],
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "created",
              "description": null,
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "Datetime",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "modified",
              "description": null,
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "Datetime",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "validUntil",
              "description": null,
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "Datetime",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "createdBy",
              "description": null,
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "modifiedBy",
              "description": null,
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "employeeByCreatedBy",
              "description": "Reads a single `Employee` that is related to this `Person`.",
              "args": [],
              "type": {
                "kind": "OBJECT",
                "name": "Employee",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "employeeByModifiedBy",
              "description": "Reads a single `Employee` that is related to this `Person`.",
              "args": [],
              "type": {
                "kind": "OBJECT",
                "name": "Employee",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "recruitsByPersonId",
              "description": "Reads and enables paginatation through a set of `Recruit`.",
              "args": [
                {
                  "name": "orderBy",
                  "description": "The method to use when ordering `Recruit`.",
                  "type": {
                    "kind": "ENUM",
                    "name": "RecruitsOrderBy",
                    "ofType": null
                  },
                  "defaultValue": "PRIMARY_KEY_ASC"
                },
                {
                  "name": "before",
                  "description": "Read all values in the set before (above) this cursor.",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Cursor",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "name": "after",
                  "description": "Read all values in the set after (below) this cursor.",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Cursor",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "name": "first",
                  "description": "Only read the first `n` values of the set.",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Int",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "name": "last",
                  "description": "Only read the last `n` values of the set.",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Int",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "name": "offset",
                  "description": "Skip the first `n` values from our `after` cursor, an alternative to cursor based pagination. May not be used with `last`.",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Int",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "name": "condition",
                  "description": "A condition to be used in determining which values should be returned by the collection.",
                  "type": {
                    "kind": "INPUT_OBJECT",
                    "name": "RecruitCondition",
                    "ofType": null
                  },
                  "defaultValue": null
                }
              ],
              "type": {
                "kind": "OBJECT",
                "name": "RecruitsConnection",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            }
          ],
          "inputFields": null,
          "interfaces": [
            {
              "kind": "INTERFACE",
              "name": "Node",
              "ofType": null
            }
          ],
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "ENUM",
          "name": "RecruitsOrderBy",
          "description": "Methods to use when ordering `Recruit`.",
          "fields": null,
          "inputFields": null,
          "interfaces": null,
          "enumValues": [
            {
              "name": "PRIMARY_KEY_ASC",
              "description": null,
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "PRIMARY_KEY_DESC",
              "description": null,
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "NATURAL",
              "description": null,
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "ID_ASC",
              "description": null,
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "ID_DESC",
              "description": null,
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "LAST_NAME_ASC",
              "description": null,
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "LAST_NAME_DESC",
              "description": null,
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "FIRST_NAME_ASC",
              "description": null,
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "FIRST_NAME_DESC",
              "description": null,
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "MIDDLE_NAME_ASC",
              "description": null,
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "MIDDLE_NAME_DESC",
              "description": null,
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "SUFFIX_NAME_ASC",
              "description": null,
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "SUFFIX_NAME_DESC",
              "description": null,
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "ADDRESS1_ASC",
              "description": null,
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "ADDRESS1_DESC",
              "description": null,
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "ADDRESS2_ASC",
              "description": null,
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "ADDRESS2_DESC",
              "description": null,
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "CITY_ASC",
              "description": null,
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "CITY_DESC",
              "description": null,
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "STATE_ASC",
              "description": null,
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "STATE_DESC",
              "description": null,
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "COUNTY_ASC",
              "description": null,
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "COUNTY_DESC",
              "description": null,
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "COUNTRY_ASC",
              "description": null,
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "COUNTRY_DESC",
              "description": null,
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "CITIZENSHIP_ASC",
              "description": null,
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "CITIZENSHIP_DESC",
              "description": null,
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "GENDER_ASC",
              "description": null,
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "GENDER_DESC",
              "description": null,
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "ETHNIC_ASC",
              "description": null,
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "ETHNIC_DESC",
              "description": null,
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "RACE_ASC",
              "description": null,
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "RACE_DESC",
              "description": null,
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "MARITAL_STATUS_ASC",
              "description": null,
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "MARITAL_STATUS_DESC",
              "description": null,
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "DEPENDENTS_ASC",
              "description": null,
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "DEPENDENTS_DESC",
              "description": null,
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "RELIGION_ASC",
              "description": null,
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "RELIGION_DESC",
              "description": null,
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "EDUCATION_ASC",
              "description": null,
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "EDUCATION_DESC",
              "description": null,
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "FOREIGN_LANGUAGE_ASC",
              "description": null,
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "FOREIGN_LANGUAGE_DESC",
              "description": null,
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "DRIVERS_LICENSE_ASC",
              "description": null,
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "DRIVERS_LICENSE_DESC",
              "description": null,
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "DRIVERS_LICENSE_EXP_ASC",
              "description": null,
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "DRIVERS_LICENSE_EXP_DESC",
              "description": null,
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "PERSON_ID_ASC",
              "description": null,
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "PERSON_ID_DESC",
              "description": null,
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "RECRUITER_ID_ASC",
              "description": null,
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "RECRUITER_ID_DESC",
              "description": null,
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "MEPS_ID_ASC",
              "description": null,
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "MEPS_ID_DESC",
              "description": null,
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "ASVAB_REQ_ASC",
              "description": null,
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "ASVAB_REQ_DESC",
              "description": null,
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "LAST_HIGH_SCHOOL_ASC",
              "description": null,
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "LAST_HIGH_SCHOOL_DESC",
              "description": null,
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "MEDICAL_REQ_ASC",
              "description": null,
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "MEDICAL_REQ_DESC",
              "description": null,
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "MEDICAL_INSURANCE_ASC",
              "description": null,
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "MEDICAL_INSURANCE_DESC",
              "description": null,
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "CREATED_ASC",
              "description": null,
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "CREATED_DESC",
              "description": null,
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "MODIFIED_ASC",
              "description": null,
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "MODIFIED_DESC",
              "description": null,
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "CLOSED_ASC",
              "description": null,
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "CLOSED_DESC",
              "description": null,
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "VALID_UNTIL_ASC",
              "description": null,
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "VALID_UNTIL_DESC",
              "description": null,
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "CREATED_BY_ASC",
              "description": null,
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "CREATED_BY_DESC",
              "description": null,
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "MODIFIED_BY_ASC",
              "description": null,
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "MODIFIED_BY_DESC",
              "description": null,
              "isDeprecated": false,
              "deprecationReason": null
            }
          ],
          "possibleTypes": null
        },
        {
          "kind": "INPUT_OBJECT",
          "name": "RecruitCondition",
          "description": "A condition to be used against `Recruit` object types. All fields are tested for equality and combined with a logical ‘and.’",
          "fields": null,
          "inputFields": [
            {
              "name": "rowId",
              "description": "Checks for equality with the object’s `rowId` field.",
              "type": {
                "kind": "SCALAR",
                "name": "Int",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "lastName",
              "description": "Checks for equality with the object’s `lastName` field.",
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "firstName",
              "description": "Checks for equality with the object’s `firstName` field.",
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "middleName",
              "description": "Checks for equality with the object’s `middleName` field.",
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "suffixName",
              "description": "Checks for equality with the object’s `suffixName` field.",
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "address1",
              "description": "Checks for equality with the object’s `address1` field.",
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "address2",
              "description": "Checks for equality with the object’s `address2` field.",
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "city",
              "description": "Checks for equality with the object’s `city` field.",
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "state",
              "description": "Checks for equality with the object’s `state` field.",
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "county",
              "description": "Checks for equality with the object’s `county` field.",
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "country",
              "description": "Checks for equality with the object’s `country` field.",
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "citizenship",
              "description": "Checks for equality with the object’s `citizenship` field.",
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "gender",
              "description": "Checks for equality with the object’s `gender` field.",
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "ethnic",
              "description": "Checks for equality with the object’s `ethnic` field.",
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "race",
              "description": "Checks for equality with the object’s `race` field.",
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "maritalStatus",
              "description": "Checks for equality with the object’s `maritalStatus` field.",
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "dependents",
              "description": "Checks for equality with the object’s `dependents` field.",
              "type": {
                "kind": "SCALAR",
                "name": "Int",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "religion",
              "description": "Checks for equality with the object’s `religion` field.",
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "education",
              "description": "Checks for equality with the object’s `education` field.",
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "foreignLanguage",
              "description": "Checks for equality with the object’s `foreignLanguage` field.",
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "driversLicense",
              "description": "Checks for equality with the object’s `driversLicense` field.",
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "driversLicenseExp",
              "description": "Checks for equality with the object’s `driversLicenseExp` field.",
              "type": {
                "kind": "SCALAR",
                "name": "Date",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "personId",
              "description": "Checks for equality with the object’s `personId` field.",
              "type": {
                "kind": "SCALAR",
                "name": "Int",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "recruiterId",
              "description": "Checks for equality with the object’s `recruiterId` field.",
              "type": {
                "kind": "SCALAR",
                "name": "Int",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "mepsId",
              "description": "Checks for equality with the object’s `mepsId` field.",
              "type": {
                "kind": "SCALAR",
                "name": "Int",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "asvabReq",
              "description": "Checks for equality with the object’s `asvabReq` field.",
              "type": {
                "kind": "SCALAR",
                "name": "Boolean",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "lastHighSchool",
              "description": "Checks for equality with the object’s `lastHighSchool` field.",
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "medicalReq",
              "description": "Checks for equality with the object’s `medicalReq` field.",
              "type": {
                "kind": "SCALAR",
                "name": "Boolean",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "medicalInsurance",
              "description": "Checks for equality with the object’s `medicalInsurance` field.",
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "created",
              "description": "Checks for equality with the object’s `created` field.",
              "type": {
                "kind": "SCALAR",
                "name": "Datetime",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "modified",
              "description": "Checks for equality with the object’s `modified` field.",
              "type": {
                "kind": "SCALAR",
                "name": "Datetime",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "closed",
              "description": "Checks for equality with the object’s `closed` field.",
              "type": {
                "kind": "SCALAR",
                "name": "Datetime",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "validUntil",
              "description": "Checks for equality with the object’s `validUntil` field.",
              "type": {
                "kind": "SCALAR",
                "name": "Datetime",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "createdBy",
              "description": "Checks for equality with the object’s `createdBy` field.",
              "type": {
                "kind": "SCALAR",
                "name": "Int",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "modifiedBy",
              "description": "Checks for equality with the object’s `modifiedBy` field.",
              "type": {
                "kind": "SCALAR",
                "name": "Int",
                "ofType": null
              },
              "defaultValue": null
            }
          ],
          "interfaces": null,
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "OBJECT",
          "name": "RecruitsConnection",
          "description": "A connection to a list of `Recruit` values.",
          "fields": [
            {
              "name": "pageInfo",
              "description": "Information to aid in pagination.",
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "OBJECT",
                  "name": "PageInfo",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "totalCount",
              "description": "The count of *all* `Recruit` you could get from the connection.",
              "args": [],
              "type": {
                "kind": "SCALAR",
                "name": "Int",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "edges",
              "description": "A list of edges which contains the `Recruit` and cursor to aid in pagination.",
              "args": [],
              "type": {
                "kind": "LIST",
                "name": null,
                "ofType": {
                  "kind": "OBJECT",
                  "name": "RecruitsEdge",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "nodes",
              "description": "A list of `Recruit` objects.",
              "args": [],
              "type": {
                "kind": "LIST",
                "name": null,
                "ofType": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "Recruit",
                    "ofType": null
                  }
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            }
          ],
          "inputFields": null,
          "interfaces": [],
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "OBJECT",
          "name": "RecruitsEdge",
          "description": "A `Recruit` edge in the connection.",
          "fields": [
            {
              "name": "cursor",
              "description": "A cursor for use in pagination.",
              "args": [],
              "type": {
                "kind": "SCALAR",
                "name": "Cursor",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "node",
              "description": "The `Recruit` at the end of the edge.",
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "OBJECT",
                  "name": "Recruit",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            }
          ],
          "inputFields": null,
          "interfaces": [],
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "ENUM",
          "name": "RecruitersOrderBy",
          "description": "Methods to use when ordering `Recruiter`.",
          "fields": null,
          "inputFields": null,
          "interfaces": null,
          "enumValues": [
            {
              "name": "PRIMARY_KEY_ASC",
              "description": null,
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "PRIMARY_KEY_DESC",
              "description": null,
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "NATURAL",
              "description": null,
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "ID_ASC",
              "description": null,
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "ID_DESC",
              "description": null,
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "LAST_NAME_ASC",
              "description": null,
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "LAST_NAME_DESC",
              "description": null,
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "FIRST_NAME_ASC",
              "description": null,
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "FIRST_NAME_DESC",
              "description": null,
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "CREATED_ASC",
              "description": null,
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "CREATED_DESC",
              "description": null,
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "MODIFIED_ASC",
              "description": null,
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "MODIFIED_DESC",
              "description": null,
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "VALID_UNTIL_ASC",
              "description": null,
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "VALID_UNTIL_DESC",
              "description": null,
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "CREATED_BY_ASC",
              "description": null,
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "CREATED_BY_DESC",
              "description": null,
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "MODIFIED_BY_ASC",
              "description": null,
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "MODIFIED_BY_DESC",
              "description": null,
              "isDeprecated": false,
              "deprecationReason": null
            }
          ],
          "possibleTypes": null
        },
        {
          "kind": "INPUT_OBJECT",
          "name": "RecruiterCondition",
          "description": "A condition to be used against `Recruiter` object types. All fields are tested for equality and combined with a logical ‘and.’",
          "fields": null,
          "inputFields": [
            {
              "name": "rowId",
              "description": "Checks for equality with the object’s `rowId` field.",
              "type": {
                "kind": "SCALAR",
                "name": "Int",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "lastName",
              "description": "Checks for equality with the object’s `lastName` field.",
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "firstName",
              "description": "Checks for equality with the object’s `firstName` field.",
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "created",
              "description": "Checks for equality with the object’s `created` field.",
              "type": {
                "kind": "SCALAR",
                "name": "Datetime",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "modified",
              "description": "Checks for equality with the object’s `modified` field.",
              "type": {
                "kind": "SCALAR",
                "name": "Datetime",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "validUntil",
              "description": "Checks for equality with the object’s `validUntil` field.",
              "type": {
                "kind": "SCALAR",
                "name": "Datetime",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "createdBy",
              "description": "Checks for equality with the object’s `createdBy` field.",
              "type": {
                "kind": "SCALAR",
                "name": "Int",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "modifiedBy",
              "description": "Checks for equality with the object’s `modifiedBy` field.",
              "type": {
                "kind": "SCALAR",
                "name": "Int",
                "ofType": null
              },
              "defaultValue": null
            }
          ],
          "interfaces": null,
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "OBJECT",
          "name": "RecruitersConnection",
          "description": "A connection to a list of `Recruiter` values.",
          "fields": [
            {
              "name": "pageInfo",
              "description": "Information to aid in pagination.",
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "OBJECT",
                  "name": "PageInfo",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "totalCount",
              "description": "The count of *all* `Recruiter` you could get from the connection.",
              "args": [],
              "type": {
                "kind": "SCALAR",
                "name": "Int",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "edges",
              "description": "A list of edges which contains the `Recruiter` and cursor to aid in pagination.",
              "args": [],
              "type": {
                "kind": "LIST",
                "name": null,
                "ofType": {
                  "kind": "OBJECT",
                  "name": "RecruitersEdge",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "nodes",
              "description": "A list of `Recruiter` objects.",
              "args": [],
              "type": {
                "kind": "LIST",
                "name": null,
                "ofType": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "Recruiter",
                    "ofType": null
                  }
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            }
          ],
          "inputFields": null,
          "interfaces": [],
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "OBJECT",
          "name": "RecruitersEdge",
          "description": "A `Recruiter` edge in the connection.",
          "fields": [
            {
              "name": "cursor",
              "description": "A cursor for use in pagination.",
              "args": [],
              "type": {
                "kind": "SCALAR",
                "name": "Cursor",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "node",
              "description": "The `Recruiter` at the end of the edge.",
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "OBJECT",
                  "name": "Recruiter",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            }
          ],
          "inputFields": null,
          "interfaces": [],
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "OBJECT",
          "name": "Recruiter",
          "description": null,
          "fields": [
            {
              "name": "id",
              "description": "A globally unique identifier. Can be used in various places throughout the system to identify this single value.",
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "ID",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "rowId",
              "description": null,
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "lastName",
              "description": null,
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "firstName",
              "description": null,
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "created",
              "description": null,
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "Datetime",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "modified",
              "description": null,
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "Datetime",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "validUntil",
              "description": null,
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "Datetime",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "createdBy",
              "description": null,
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "modifiedBy",
              "description": null,
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "employeeByCreatedBy",
              "description": "Reads a single `Employee` that is related to this `Recruiter`.",
              "args": [],
              "type": {
                "kind": "OBJECT",
                "name": "Employee",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "employeeByModifiedBy",
              "description": "Reads a single `Employee` that is related to this `Recruiter`.",
              "args": [],
              "type": {
                "kind": "OBJECT",
                "name": "Employee",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "recruitsByRecruiterId",
              "description": "Reads and enables paginatation through a set of `Recruit`.",
              "args": [
                {
                  "name": "orderBy",
                  "description": "The method to use when ordering `Recruit`.",
                  "type": {
                    "kind": "ENUM",
                    "name": "RecruitsOrderBy",
                    "ofType": null
                  },
                  "defaultValue": "PRIMARY_KEY_ASC"
                },
                {
                  "name": "before",
                  "description": "Read all values in the set before (above) this cursor.",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Cursor",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "name": "after",
                  "description": "Read all values in the set after (below) this cursor.",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Cursor",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "name": "first",
                  "description": "Only read the first `n` values of the set.",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Int",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "name": "last",
                  "description": "Only read the last `n` values of the set.",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Int",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "name": "offset",
                  "description": "Skip the first `n` values from our `after` cursor, an alternative to cursor based pagination. May not be used with `last`.",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Int",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "name": "condition",
                  "description": "A condition to be used in determining which values should be returned by the collection.",
                  "type": {
                    "kind": "INPUT_OBJECT",
                    "name": "RecruitCondition",
                    "ofType": null
                  },
                  "defaultValue": null
                }
              ],
              "type": {
                "kind": "OBJECT",
                "name": "RecruitsConnection",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            }
          ],
          "inputFields": null,
          "interfaces": [
            {
              "kind": "INTERFACE",
              "name": "Node",
              "ofType": null
            }
          ],
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "ENUM",
          "name": "TestsOrderBy",
          "description": "Methods to use when ordering `Test`.",
          "fields": null,
          "inputFields": null,
          "interfaces": null,
          "enumValues": [
            {
              "name": "PRIMARY_KEY_ASC",
              "description": null,
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "PRIMARY_KEY_DESC",
              "description": null,
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "NATURAL",
              "description": null,
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "RECRUIT_ID_ASC",
              "description": null,
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "RECRUIT_ID_DESC",
              "description": null,
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "TEST_TYPE_ASC",
              "description": null,
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "TEST_TYPE_DESC",
              "description": null,
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "SCORE_ASC",
              "description": null,
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "SCORE_DESC",
              "description": null,
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "CREATED_ASC",
              "description": null,
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "CREATED_DESC",
              "description": null,
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "MODIFIED_ASC",
              "description": null,
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "MODIFIED_DESC",
              "description": null,
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "CLOSED_ASC",
              "description": null,
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "CLOSED_DESC",
              "description": null,
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "VALID_UNTIL_ASC",
              "description": null,
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "VALID_UNTIL_DESC",
              "description": null,
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "CREATED_BY_ASC",
              "description": null,
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "CREATED_BY_DESC",
              "description": null,
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "MODIFIED_BY_ASC",
              "description": null,
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "MODIFIED_BY_DESC",
              "description": null,
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "CLOSED_BY_ASC",
              "description": null,
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "CLOSED_BY_DESC",
              "description": null,
              "isDeprecated": false,
              "deprecationReason": null
            }
          ],
          "possibleTypes": null
        },
        {
          "kind": "INPUT_OBJECT",
          "name": "TestCondition",
          "description": "A condition to be used against `Test` object types. All fields are tested for equality and combined with a logical ‘and.’",
          "fields": null,
          "inputFields": [
            {
              "name": "recruitId",
              "description": "Checks for equality with the object’s `recruitId` field.",
              "type": {
                "kind": "SCALAR",
                "name": "Int",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "testType",
              "description": "Checks for equality with the object’s `testType` field.",
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "score",
              "description": "Checks for equality with the object’s `score` field.",
              "type": {
                "kind": "SCALAR",
                "name": "Json",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "created",
              "description": "Checks for equality with the object’s `created` field.",
              "type": {
                "kind": "SCALAR",
                "name": "Datetime",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "modified",
              "description": "Checks for equality with the object’s `modified` field.",
              "type": {
                "kind": "SCALAR",
                "name": "Datetime",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "closed",
              "description": "Checks for equality with the object’s `closed` field.",
              "type": {
                "kind": "SCALAR",
                "name": "Datetime",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "validUntil",
              "description": "Checks for equality with the object’s `validUntil` field.",
              "type": {
                "kind": "SCALAR",
                "name": "Datetime",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "createdBy",
              "description": "Checks for equality with the object’s `createdBy` field.",
              "type": {
                "kind": "SCALAR",
                "name": "Int",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "modifiedBy",
              "description": "Checks for equality with the object’s `modifiedBy` field.",
              "type": {
                "kind": "SCALAR",
                "name": "Int",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "closedBy",
              "description": "Checks for equality with the object’s `closedBy` field.",
              "type": {
                "kind": "SCALAR",
                "name": "Int",
                "ofType": null
              },
              "defaultValue": null
            }
          ],
          "interfaces": null,
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "SCALAR",
          "name": "Json",
          "description": "A JavaScript object encoded in the JSON format as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf).",
          "fields": null,
          "inputFields": null,
          "interfaces": null,
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "OBJECT",
          "name": "TestsConnection",
          "description": "A connection to a list of `Test` values.",
          "fields": [
            {
              "name": "pageInfo",
              "description": "Information to aid in pagination.",
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "OBJECT",
                  "name": "PageInfo",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "totalCount",
              "description": "The count of *all* `Test` you could get from the connection.",
              "args": [],
              "type": {
                "kind": "SCALAR",
                "name": "Int",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "edges",
              "description": "A list of edges which contains the `Test` and cursor to aid in pagination.",
              "args": [],
              "type": {
                "kind": "LIST",
                "name": null,
                "ofType": {
                  "kind": "OBJECT",
                  "name": "TestsEdge",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "nodes",
              "description": "A list of `Test` objects.",
              "args": [],
              "type": {
                "kind": "LIST",
                "name": null,
                "ofType": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "Test",
                    "ofType": null
                  }
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            }
          ],
          "inputFields": null,
          "interfaces": [],
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "OBJECT",
          "name": "TestsEdge",
          "description": "A `Test` edge in the connection.",
          "fields": [
            {
              "name": "cursor",
              "description": "A cursor for use in pagination.",
              "args": [],
              "type": {
                "kind": "SCALAR",
                "name": "Cursor",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "node",
              "description": "The `Test` at the end of the edge.",
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "OBJECT",
                  "name": "Test",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            }
          ],
          "inputFields": null,
          "interfaces": [],
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "OBJECT",
          "name": "Test",
          "description": null,
          "fields": [
            {
              "name": "id",
              "description": "A globally unique identifier. Can be used in various places throughout the system to identify this single value.",
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "ID",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "recruitId",
              "description": null,
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "testType",
              "description": null,
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "score",
              "description": null,
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "Json",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "created",
              "description": null,
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "Datetime",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "modified",
              "description": null,
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "Datetime",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "closed",
              "description": null,
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "Datetime",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "validUntil",
              "description": null,
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "Datetime",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "createdBy",
              "description": null,
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "modifiedBy",
              "description": null,
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "closedBy",
              "description": null,
              "args": [],
              "type": {
                "kind": "SCALAR",
                "name": "Int",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "recruitByRecruitId",
              "description": "Reads a single `Recruit` that is related to this `Test`.",
              "args": [],
              "type": {
                "kind": "OBJECT",
                "name": "Recruit",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "employeeByCreatedBy",
              "description": "Reads a single `Employee` that is related to this `Test`.",
              "args": [],
              "type": {
                "kind": "OBJECT",
                "name": "Employee",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "employeeByModifiedBy",
              "description": "Reads a single `Employee` that is related to this `Test`.",
              "args": [],
              "type": {
                "kind": "OBJECT",
                "name": "Employee",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "employeeByClosedBy",
              "description": "Reads a single `Employee` that is related to this `Test`.",
              "args": [],
              "type": {
                "kind": "OBJECT",
                "name": "Employee",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            }
          ],
          "inputFields": null,
          "interfaces": [
            {
              "kind": "INTERFACE",
              "name": "Node",
              "ofType": null
            }
          ],
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "OBJECT",
          "name": "Mep",
          "description": null,
          "fields": [
            {
              "name": "id",
              "description": "A globally unique identifier. Can be used in various places throughout the system to identify this single value.",
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "ID",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "rowId",
              "description": null,
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "name",
              "description": null,
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "recruitsByMepsId",
              "description": "Reads and enables paginatation through a set of `Recruit`.",
              "args": [
                {
                  "name": "orderBy",
                  "description": "The method to use when ordering `Recruit`.",
                  "type": {
                    "kind": "ENUM",
                    "name": "RecruitsOrderBy",
                    "ofType": null
                  },
                  "defaultValue": "PRIMARY_KEY_ASC"
                },
                {
                  "name": "before",
                  "description": "Read all values in the set before (above) this cursor.",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Cursor",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "name": "after",
                  "description": "Read all values in the set after (below) this cursor.",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Cursor",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "name": "first",
                  "description": "Only read the first `n` values of the set.",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Int",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "name": "last",
                  "description": "Only read the last `n` values of the set.",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Int",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "name": "offset",
                  "description": "Skip the first `n` values from our `after` cursor, an alternative to cursor based pagination. May not be used with `last`.",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Int",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "name": "condition",
                  "description": "A condition to be used in determining which values should be returned by the collection.",
                  "type": {
                    "kind": "INPUT_OBJECT",
                    "name": "RecruitCondition",
                    "ofType": null
                  },
                  "defaultValue": null
                }
              ],
              "type": {
                "kind": "OBJECT",
                "name": "RecruitsConnection",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            }
          ],
          "inputFields": null,
          "interfaces": [
            {
              "kind": "INTERFACE",
              "name": "Node",
              "ofType": null
            }
          ],
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "ENUM",
          "name": "EmployeesOrderBy",
          "description": "Methods to use when ordering `Employee`.",
          "fields": null,
          "inputFields": null,
          "interfaces": null,
          "enumValues": [
            {
              "name": "PRIMARY_KEY_ASC",
              "description": null,
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "PRIMARY_KEY_DESC",
              "description": null,
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "NATURAL",
              "description": null,
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "ID_ASC",
              "description": null,
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "ID_DESC",
              "description": null,
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "LAST_NAME_ASC",
              "description": null,
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "LAST_NAME_DESC",
              "description": null,
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "FIRST_NAME_ASC",
              "description": null,
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "FIRST_NAME_DESC",
              "description": null,
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "ROLE_ASC",
              "description": null,
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "ROLE_DESC",
              "description": null,
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "CREATED_ASC",
              "description": null,
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "CREATED_DESC",
              "description": null,
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "MODIFIED_ASC",
              "description": null,
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "MODIFIED_DESC",
              "description": null,
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "CLOSED_ASC",
              "description": null,
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "CLOSED_DESC",
              "description": null,
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "VALID_UNTIL_ASC",
              "description": null,
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "VALID_UNTIL_DESC",
              "description": null,
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "CREATED_BY_ASC",
              "description": null,
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "CREATED_BY_DESC",
              "description": null,
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "MODIFIED_BY_ASC",
              "description": null,
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "MODIFIED_BY_DESC",
              "description": null,
              "isDeprecated": false,
              "deprecationReason": null
            }
          ],
          "possibleTypes": null
        },
        {
          "kind": "INPUT_OBJECT",
          "name": "EmployeeCondition",
          "description": "A condition to be used against `Employee` object types. All fields are tested for equality and combined with a logical ‘and.’",
          "fields": null,
          "inputFields": [
            {
              "name": "rowId",
              "description": "Checks for equality with the object’s `rowId` field.",
              "type": {
                "kind": "SCALAR",
                "name": "Int",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "lastName",
              "description": "Checks for equality with the object’s `lastName` field.",
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "firstName",
              "description": "Checks for equality with the object’s `firstName` field.",
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "role",
              "description": "Checks for equality with the object’s `role` field.",
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "created",
              "description": "Checks for equality with the object’s `created` field.",
              "type": {
                "kind": "SCALAR",
                "name": "Datetime",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "modified",
              "description": "Checks for equality with the object’s `modified` field.",
              "type": {
                "kind": "SCALAR",
                "name": "Datetime",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "closed",
              "description": "Checks for equality with the object’s `closed` field.",
              "type": {
                "kind": "SCALAR",
                "name": "Datetime",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "validUntil",
              "description": "Checks for equality with the object’s `validUntil` field.",
              "type": {
                "kind": "SCALAR",
                "name": "Datetime",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "createdBy",
              "description": "Checks for equality with the object’s `createdBy` field.",
              "type": {
                "kind": "SCALAR",
                "name": "Int",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "modifiedBy",
              "description": "Checks for equality with the object’s `modifiedBy` field.",
              "type": {
                "kind": "SCALAR",
                "name": "Int",
                "ofType": null
              },
              "defaultValue": null
            }
          ],
          "interfaces": null,
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "OBJECT",
          "name": "EmployeesConnection",
          "description": "A connection to a list of `Employee` values.",
          "fields": [
            {
              "name": "pageInfo",
              "description": "Information to aid in pagination.",
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "OBJECT",
                  "name": "PageInfo",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "totalCount",
              "description": "The count of *all* `Employee` you could get from the connection.",
              "args": [],
              "type": {
                "kind": "SCALAR",
                "name": "Int",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "edges",
              "description": "A list of edges which contains the `Employee` and cursor to aid in pagination.",
              "args": [],
              "type": {
                "kind": "LIST",
                "name": null,
                "ofType": {
                  "kind": "OBJECT",
                  "name": "EmployeesEdge",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "nodes",
              "description": "A list of `Employee` objects.",
              "args": [],
              "type": {
                "kind": "LIST",
                "name": null,
                "ofType": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "Employee",
                    "ofType": null
                  }
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            }
          ],
          "inputFields": null,
          "interfaces": [],
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "OBJECT",
          "name": "EmployeesEdge",
          "description": "A `Employee` edge in the connection.",
          "fields": [
            {
              "name": "cursor",
              "description": "A cursor for use in pagination.",
              "args": [],
              "type": {
                "kind": "SCALAR",
                "name": "Cursor",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "node",
              "description": "The `Employee` at the end of the edge.",
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "OBJECT",
                  "name": "Employee",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            }
          ],
          "inputFields": null,
          "interfaces": [],
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "ENUM",
          "name": "MepsOrderBy",
          "description": "Methods to use when ordering `Mep`.",
          "fields": null,
          "inputFields": null,
          "interfaces": null,
          "enumValues": [
            {
              "name": "PRIMARY_KEY_ASC",
              "description": null,
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "PRIMARY_KEY_DESC",
              "description": null,
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "NATURAL",
              "description": null,
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "ID_ASC",
              "description": null,
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "ID_DESC",
              "description": null,
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "NAME_ASC",
              "description": null,
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "NAME_DESC",
              "description": null,
              "isDeprecated": false,
              "deprecationReason": null
            }
          ],
          "possibleTypes": null
        },
        {
          "kind": "INPUT_OBJECT",
          "name": "MepCondition",
          "description": "A condition to be used against `Mep` object types. All fields are tested for equality and combined with a logical ‘and.’",
          "fields": null,
          "inputFields": [
            {
              "name": "rowId",
              "description": "Checks for equality with the object’s `rowId` field.",
              "type": {
                "kind": "SCALAR",
                "name": "Int",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "name",
              "description": "Checks for equality with the object’s `name` field.",
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "defaultValue": null
            }
          ],
          "interfaces": null,
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "OBJECT",
          "name": "MepsConnection",
          "description": "A connection to a list of `Mep` values.",
          "fields": [
            {
              "name": "pageInfo",
              "description": "Information to aid in pagination.",
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "OBJECT",
                  "name": "PageInfo",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "totalCount",
              "description": "The count of *all* `Mep` you could get from the connection.",
              "args": [],
              "type": {
                "kind": "SCALAR",
                "name": "Int",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "edges",
              "description": "A list of edges which contains the `Mep` and cursor to aid in pagination.",
              "args": [],
              "type": {
                "kind": "LIST",
                "name": null,
                "ofType": {
                  "kind": "OBJECT",
                  "name": "MepsEdge",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "nodes",
              "description": "A list of `Mep` objects.",
              "args": [],
              "type": {
                "kind": "LIST",
                "name": null,
                "ofType": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "Mep",
                    "ofType": null
                  }
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            }
          ],
          "inputFields": null,
          "interfaces": [],
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "OBJECT",
          "name": "MepsEdge",
          "description": "A `Mep` edge in the connection.",
          "fields": [
            {
              "name": "cursor",
              "description": "A cursor for use in pagination.",
              "args": [],
              "type": {
                "kind": "SCALAR",
                "name": "Cursor",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "node",
              "description": "The `Mep` at the end of the edge.",
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "OBJECT",
                  "name": "Mep",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            }
          ],
          "inputFields": null,
          "interfaces": [],
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "OBJECT",
          "name": "Mutation",
          "description": "The root mutation type which contains root level fields which mutate data.",
          "fields": [
            {
              "name": "genRandomBytes",
              "description": null,
              "args": [
                {
                  "name": "input",
                  "description": "The exclusive input argument for this mutation. An object type, make sure to see documentation for this object’s fields.",
                  "type": {
                    "kind": "NON_NULL",
                    "name": null,
                    "ofType": {
                      "kind": "INPUT_OBJECT",
                      "name": "GenRandomBytesInput",
                      "ofType": null
                    }
                  },
                  "defaultValue": null
                }
              ],
              "type": {
                "kind": "OBJECT",
                "name": "GenRandomBytesPayload",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "genRandomUuid",
              "description": null,
              "args": [
                {
                  "name": "input",
                  "description": "The exclusive input argument for this mutation. An object type, make sure to see documentation for this object’s fields.",
                  "type": {
                    "kind": "NON_NULL",
                    "name": null,
                    "ofType": {
                      "kind": "INPUT_OBJECT",
                      "name": "GenRandomUuidInput",
                      "ofType": null
                    }
                  },
                  "defaultValue": null
                }
              ],
              "type": {
                "kind": "OBJECT",
                "name": "GenRandomUuidPayload",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "login",
              "description": null,
              "args": [
                {
                  "name": "input",
                  "description": "The exclusive input argument for this mutation. An object type, make sure to see documentation for this object’s fields.",
                  "type": {
                    "kind": "NON_NULL",
                    "name": null,
                    "ofType": {
                      "kind": "INPUT_OBJECT",
                      "name": "LoginInput",
                      "ofType": null
                    }
                  },
                  "defaultValue": null
                }
              ],
              "type": {
                "kind": "OBJECT",
                "name": "LoginPayload",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "createDatabasechangelog",
              "description": "Creates a single `Databasechangelog`.",
              "args": [
                {
                  "name": "input",
                  "description": "The exclusive input argument for this mutation. An object type, make sure to see documentation for this object’s fields.",
                  "type": {
                    "kind": "NON_NULL",
                    "name": null,
                    "ofType": {
                      "kind": "INPUT_OBJECT",
                      "name": "CreateDatabasechangelogInput",
                      "ofType": null
                    }
                  },
                  "defaultValue": null
                }
              ],
              "type": {
                "kind": "OBJECT",
                "name": "CreateDatabasechangelogPayload",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "createDatabasechangeloglock",
              "description": "Creates a single `Databasechangeloglock`.",
              "args": [
                {
                  "name": "input",
                  "description": "The exclusive input argument for this mutation. An object type, make sure to see documentation for this object’s fields.",
                  "type": {
                    "kind": "NON_NULL",
                    "name": null,
                    "ofType": {
                      "kind": "INPUT_OBJECT",
                      "name": "CreateDatabasechangeloglockInput",
                      "ofType": null
                    }
                  },
                  "defaultValue": null
                }
              ],
              "type": {
                "kind": "OBJECT",
                "name": "CreateDatabasechangeloglockPayload",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "updateDatabasechangeloglock",
              "description": "Updates a single `Databasechangeloglock` using its globally unique id and a patch.",
              "args": [
                {
                  "name": "input",
                  "description": "The exclusive input argument for this mutation. An object type, make sure to see documentation for this object’s fields.",
                  "type": {
                    "kind": "NON_NULL",
                    "name": null,
                    "ofType": {
                      "kind": "INPUT_OBJECT",
                      "name": "UpdateDatabasechangeloglockInput",
                      "ofType": null
                    }
                  },
                  "defaultValue": null
                }
              ],
              "type": {
                "kind": "OBJECT",
                "name": "UpdateDatabasechangeloglockPayload",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "updateDatabasechangeloglockByRowId",
              "description": "Updates a single `Databasechangeloglock` using a unique key and a patch.",
              "args": [
                {
                  "name": "input",
                  "description": "The exclusive input argument for this mutation. An object type, make sure to see documentation for this object’s fields.",
                  "type": {
                    "kind": "NON_NULL",
                    "name": null,
                    "ofType": {
                      "kind": "INPUT_OBJECT",
                      "name": "UpdateDatabasechangeloglockByRowIdInput",
                      "ofType": null
                    }
                  },
                  "defaultValue": null
                }
              ],
              "type": {
                "kind": "OBJECT",
                "name": "UpdateDatabasechangeloglockPayload",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "deleteDatabasechangeloglock",
              "description": "Deletes a single `Databasechangeloglock` using its globally unique id.",
              "args": [
                {
                  "name": "input",
                  "description": "The exclusive input argument for this mutation. An object type, make sure to see documentation for this object’s fields.",
                  "type": {
                    "kind": "NON_NULL",
                    "name": null,
                    "ofType": {
                      "kind": "INPUT_OBJECT",
                      "name": "DeleteDatabasechangeloglockInput",
                      "ofType": null
                    }
                  },
                  "defaultValue": null
                }
              ],
              "type": {
                "kind": "OBJECT",
                "name": "DeleteDatabasechangeloglockPayload",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "deleteDatabasechangeloglockByRowId",
              "description": "Deletes a single `Databasechangeloglock` using a unique key.",
              "args": [
                {
                  "name": "input",
                  "description": "The exclusive input argument for this mutation. An object type, make sure to see documentation for this object’s fields.",
                  "type": {
                    "kind": "NON_NULL",
                    "name": null,
                    "ofType": {
                      "kind": "INPUT_OBJECT",
                      "name": "DeleteDatabasechangeloglockByRowIdInput",
                      "ofType": null
                    }
                  },
                  "defaultValue": null
                }
              ],
              "type": {
                "kind": "OBJECT",
                "name": "DeleteDatabasechangeloglockPayload",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "createDoc",
              "description": "Creates a single `Doc`.",
              "args": [
                {
                  "name": "input",
                  "description": "The exclusive input argument for this mutation. An object type, make sure to see documentation for this object’s fields.",
                  "type": {
                    "kind": "NON_NULL",
                    "name": null,
                    "ofType": {
                      "kind": "INPUT_OBJECT",
                      "name": "CreateDocInput",
                      "ofType": null
                    }
                  },
                  "defaultValue": null
                }
              ],
              "type": {
                "kind": "OBJECT",
                "name": "CreateDocPayload",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "updateDoc",
              "description": "Updates a single `Doc` using its globally unique id and a patch.",
              "args": [
                {
                  "name": "input",
                  "description": "The exclusive input argument for this mutation. An object type, make sure to see documentation for this object’s fields.",
                  "type": {
                    "kind": "NON_NULL",
                    "name": null,
                    "ofType": {
                      "kind": "INPUT_OBJECT",
                      "name": "UpdateDocInput",
                      "ofType": null
                    }
                  },
                  "defaultValue": null
                }
              ],
              "type": {
                "kind": "OBJECT",
                "name": "UpdateDocPayload",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "updateDocByRowId",
              "description": "Updates a single `Doc` using a unique key and a patch.",
              "args": [
                {
                  "name": "input",
                  "description": "The exclusive input argument for this mutation. An object type, make sure to see documentation for this object’s fields.",
                  "type": {
                    "kind": "NON_NULL",
                    "name": null,
                    "ofType": {
                      "kind": "INPUT_OBJECT",
                      "name": "UpdateDocByRowIdInput",
                      "ofType": null
                    }
                  },
                  "defaultValue": null
                }
              ],
              "type": {
                "kind": "OBJECT",
                "name": "UpdateDocPayload",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "deleteDoc",
              "description": "Deletes a single `Doc` using its globally unique id.",
              "args": [
                {
                  "name": "input",
                  "description": "The exclusive input argument for this mutation. An object type, make sure to see documentation for this object’s fields.",
                  "type": {
                    "kind": "NON_NULL",
                    "name": null,
                    "ofType": {
                      "kind": "INPUT_OBJECT",
                      "name": "DeleteDocInput",
                      "ofType": null
                    }
                  },
                  "defaultValue": null
                }
              ],
              "type": {
                "kind": "OBJECT",
                "name": "DeleteDocPayload",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "deleteDocByRowId",
              "description": "Deletes a single `Doc` using a unique key.",
              "args": [
                {
                  "name": "input",
                  "description": "The exclusive input argument for this mutation. An object type, make sure to see documentation for this object’s fields.",
                  "type": {
                    "kind": "NON_NULL",
                    "name": null,
                    "ofType": {
                      "kind": "INPUT_OBJECT",
                      "name": "DeleteDocByRowIdInput",
                      "ofType": null
                    }
                  },
                  "defaultValue": null
                }
              ],
              "type": {
                "kind": "OBJECT",
                "name": "DeleteDocPayload",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "createEmployee",
              "description": "Creates a single `Employee`.",
              "args": [
                {
                  "name": "input",
                  "description": "The exclusive input argument for this mutation. An object type, make sure to see documentation for this object’s fields.",
                  "type": {
                    "kind": "NON_NULL",
                    "name": null,
                    "ofType": {
                      "kind": "INPUT_OBJECT",
                      "name": "CreateEmployeeInput",
                      "ofType": null
                    }
                  },
                  "defaultValue": null
                }
              ],
              "type": {
                "kind": "OBJECT",
                "name": "CreateEmployeePayload",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "updateEmployee",
              "description": "Updates a single `Employee` using its globally unique id and a patch.",
              "args": [
                {
                  "name": "input",
                  "description": "The exclusive input argument for this mutation. An object type, make sure to see documentation for this object’s fields.",
                  "type": {
                    "kind": "NON_NULL",
                    "name": null,
                    "ofType": {
                      "kind": "INPUT_OBJECT",
                      "name": "UpdateEmployeeInput",
                      "ofType": null
                    }
                  },
                  "defaultValue": null
                }
              ],
              "type": {
                "kind": "OBJECT",
                "name": "UpdateEmployeePayload",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "updateEmployeeByRowId",
              "description": "Updates a single `Employee` using a unique key and a patch.",
              "args": [
                {
                  "name": "input",
                  "description": "The exclusive input argument for this mutation. An object type, make sure to see documentation for this object’s fields.",
                  "type": {
                    "kind": "NON_NULL",
                    "name": null,
                    "ofType": {
                      "kind": "INPUT_OBJECT",
                      "name": "UpdateEmployeeByRowIdInput",
                      "ofType": null
                    }
                  },
                  "defaultValue": null
                }
              ],
              "type": {
                "kind": "OBJECT",
                "name": "UpdateEmployeePayload",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "deleteEmployee",
              "description": "Deletes a single `Employee` using its globally unique id.",
              "args": [
                {
                  "name": "input",
                  "description": "The exclusive input argument for this mutation. An object type, make sure to see documentation for this object’s fields.",
                  "type": {
                    "kind": "NON_NULL",
                    "name": null,
                    "ofType": {
                      "kind": "INPUT_OBJECT",
                      "name": "DeleteEmployeeInput",
                      "ofType": null
                    }
                  },
                  "defaultValue": null
                }
              ],
              "type": {
                "kind": "OBJECT",
                "name": "DeleteEmployeePayload",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "deleteEmployeeByRowId",
              "description": "Deletes a single `Employee` using a unique key.",
              "args": [
                {
                  "name": "input",
                  "description": "The exclusive input argument for this mutation. An object type, make sure to see documentation for this object’s fields.",
                  "type": {
                    "kind": "NON_NULL",
                    "name": null,
                    "ofType": {
                      "kind": "INPUT_OBJECT",
                      "name": "DeleteEmployeeByRowIdInput",
                      "ofType": null
                    }
                  },
                  "defaultValue": null
                }
              ],
              "type": {
                "kind": "OBJECT",
                "name": "DeleteEmployeePayload",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "createMedical",
              "description": "Creates a single `Medical`.",
              "args": [
                {
                  "name": "input",
                  "description": "The exclusive input argument for this mutation. An object type, make sure to see documentation for this object’s fields.",
                  "type": {
                    "kind": "NON_NULL",
                    "name": null,
                    "ofType": {
                      "kind": "INPUT_OBJECT",
                      "name": "CreateMedicalInput",
                      "ofType": null
                    }
                  },
                  "defaultValue": null
                }
              ],
              "type": {
                "kind": "OBJECT",
                "name": "CreateMedicalPayload",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "createMep",
              "description": "Creates a single `Mep`.",
              "args": [
                {
                  "name": "input",
                  "description": "The exclusive input argument for this mutation. An object type, make sure to see documentation for this object’s fields.",
                  "type": {
                    "kind": "NON_NULL",
                    "name": null,
                    "ofType": {
                      "kind": "INPUT_OBJECT",
                      "name": "CreateMepInput",
                      "ofType": null
                    }
                  },
                  "defaultValue": null
                }
              ],
              "type": {
                "kind": "OBJECT",
                "name": "CreateMepPayload",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "updateMep",
              "description": "Updates a single `Mep` using its globally unique id and a patch.",
              "args": [
                {
                  "name": "input",
                  "description": "The exclusive input argument for this mutation. An object type, make sure to see documentation for this object’s fields.",
                  "type": {
                    "kind": "NON_NULL",
                    "name": null,
                    "ofType": {
                      "kind": "INPUT_OBJECT",
                      "name": "UpdateMepInput",
                      "ofType": null
                    }
                  },
                  "defaultValue": null
                }
              ],
              "type": {
                "kind": "OBJECT",
                "name": "UpdateMepPayload",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "updateMepByRowId",
              "description": "Updates a single `Mep` using a unique key and a patch.",
              "args": [
                {
                  "name": "input",
                  "description": "The exclusive input argument for this mutation. An object type, make sure to see documentation for this object’s fields.",
                  "type": {
                    "kind": "NON_NULL",
                    "name": null,
                    "ofType": {
                      "kind": "INPUT_OBJECT",
                      "name": "UpdateMepByRowIdInput",
                      "ofType": null
                    }
                  },
                  "defaultValue": null
                }
              ],
              "type": {
                "kind": "OBJECT",
                "name": "UpdateMepPayload",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "deleteMep",
              "description": "Deletes a single `Mep` using its globally unique id.",
              "args": [
                {
                  "name": "input",
                  "description": "The exclusive input argument for this mutation. An object type, make sure to see documentation for this object’s fields.",
                  "type": {
                    "kind": "NON_NULL",
                    "name": null,
                    "ofType": {
                      "kind": "INPUT_OBJECT",
                      "name": "DeleteMepInput",
                      "ofType": null
                    }
                  },
                  "defaultValue": null
                }
              ],
              "type": {
                "kind": "OBJECT",
                "name": "DeleteMepPayload",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "deleteMepByRowId",
              "description": "Deletes a single `Mep` using a unique key.",
              "args": [
                {
                  "name": "input",
                  "description": "The exclusive input argument for this mutation. An object type, make sure to see documentation for this object’s fields.",
                  "type": {
                    "kind": "NON_NULL",
                    "name": null,
                    "ofType": {
                      "kind": "INPUT_OBJECT",
                      "name": "DeleteMepByRowIdInput",
                      "ofType": null
                    }
                  },
                  "defaultValue": null
                }
              ],
              "type": {
                "kind": "OBJECT",
                "name": "DeleteMepPayload",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "createOperation",
              "description": "Creates a single `Operation`.",
              "args": [
                {
                  "name": "input",
                  "description": "The exclusive input argument for this mutation. An object type, make sure to see documentation for this object’s fields.",
                  "type": {
                    "kind": "NON_NULL",
                    "name": null,
                    "ofType": {
                      "kind": "INPUT_OBJECT",
                      "name": "CreateOperationInput",
                      "ofType": null
                    }
                  },
                  "defaultValue": null
                }
              ],
              "type": {
                "kind": "OBJECT",
                "name": "CreateOperationPayload",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "createPerson",
              "description": "Creates a single `Person`.",
              "args": [
                {
                  "name": "input",
                  "description": "The exclusive input argument for this mutation. An object type, make sure to see documentation for this object’s fields.",
                  "type": {
                    "kind": "NON_NULL",
                    "name": null,
                    "ofType": {
                      "kind": "INPUT_OBJECT",
                      "name": "CreatePersonInput",
                      "ofType": null
                    }
                  },
                  "defaultValue": null
                }
              ],
              "type": {
                "kind": "OBJECT",
                "name": "CreatePersonPayload",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "updatePerson",
              "description": "Updates a single `Person` using its globally unique id and a patch.",
              "args": [
                {
                  "name": "input",
                  "description": "The exclusive input argument for this mutation. An object type, make sure to see documentation for this object’s fields.",
                  "type": {
                    "kind": "NON_NULL",
                    "name": null,
                    "ofType": {
                      "kind": "INPUT_OBJECT",
                      "name": "UpdatePersonInput",
                      "ofType": null
                    }
                  },
                  "defaultValue": null
                }
              ],
              "type": {
                "kind": "OBJECT",
                "name": "UpdatePersonPayload",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "updatePersonByRowId",
              "description": "Updates a single `Person` using a unique key and a patch.",
              "args": [
                {
                  "name": "input",
                  "description": "The exclusive input argument for this mutation. An object type, make sure to see documentation for this object’s fields.",
                  "type": {
                    "kind": "NON_NULL",
                    "name": null,
                    "ofType": {
                      "kind": "INPUT_OBJECT",
                      "name": "UpdatePersonByRowIdInput",
                      "ofType": null
                    }
                  },
                  "defaultValue": null
                }
              ],
              "type": {
                "kind": "OBJECT",
                "name": "UpdatePersonPayload",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "deletePerson",
              "description": "Deletes a single `Person` using its globally unique id.",
              "args": [
                {
                  "name": "input",
                  "description": "The exclusive input argument for this mutation. An object type, make sure to see documentation for this object’s fields.",
                  "type": {
                    "kind": "NON_NULL",
                    "name": null,
                    "ofType": {
                      "kind": "INPUT_OBJECT",
                      "name": "DeletePersonInput",
                      "ofType": null
                    }
                  },
                  "defaultValue": null
                }
              ],
              "type": {
                "kind": "OBJECT",
                "name": "DeletePersonPayload",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "deletePersonByRowId",
              "description": "Deletes a single `Person` using a unique key.",
              "args": [
                {
                  "name": "input",
                  "description": "The exclusive input argument for this mutation. An object type, make sure to see documentation for this object’s fields.",
                  "type": {
                    "kind": "NON_NULL",
                    "name": null,
                    "ofType": {
                      "kind": "INPUT_OBJECT",
                      "name": "DeletePersonByRowIdInput",
                      "ofType": null
                    }
                  },
                  "defaultValue": null
                }
              ],
              "type": {
                "kind": "OBJECT",
                "name": "DeletePersonPayload",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "createRecruit",
              "description": "Creates a single `Recruit`.",
              "args": [
                {
                  "name": "input",
                  "description": "The exclusive input argument for this mutation. An object type, make sure to see documentation for this object’s fields.",
                  "type": {
                    "kind": "NON_NULL",
                    "name": null,
                    "ofType": {
                      "kind": "INPUT_OBJECT",
                      "name": "CreateRecruitInput",
                      "ofType": null
                    }
                  },
                  "defaultValue": null
                }
              ],
              "type": {
                "kind": "OBJECT",
                "name": "CreateRecruitPayload",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "updateRecruit",
              "description": "Updates a single `Recruit` using its globally unique id and a patch.",
              "args": [
                {
                  "name": "input",
                  "description": "The exclusive input argument for this mutation. An object type, make sure to see documentation for this object’s fields.",
                  "type": {
                    "kind": "NON_NULL",
                    "name": null,
                    "ofType": {
                      "kind": "INPUT_OBJECT",
                      "name": "UpdateRecruitInput",
                      "ofType": null
                    }
                  },
                  "defaultValue": null
                }
              ],
              "type": {
                "kind": "OBJECT",
                "name": "UpdateRecruitPayload",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "updateRecruitByRowId",
              "description": "Updates a single `Recruit` using a unique key and a patch.",
              "args": [
                {
                  "name": "input",
                  "description": "The exclusive input argument for this mutation. An object type, make sure to see documentation for this object’s fields.",
                  "type": {
                    "kind": "NON_NULL",
                    "name": null,
                    "ofType": {
                      "kind": "INPUT_OBJECT",
                      "name": "UpdateRecruitByRowIdInput",
                      "ofType": null
                    }
                  },
                  "defaultValue": null
                }
              ],
              "type": {
                "kind": "OBJECT",
                "name": "UpdateRecruitPayload",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "deleteRecruit",
              "description": "Deletes a single `Recruit` using its globally unique id.",
              "args": [
                {
                  "name": "input",
                  "description": "The exclusive input argument for this mutation. An object type, make sure to see documentation for this object’s fields.",
                  "type": {
                    "kind": "NON_NULL",
                    "name": null,
                    "ofType": {
                      "kind": "INPUT_OBJECT",
                      "name": "DeleteRecruitInput",
                      "ofType": null
                    }
                  },
                  "defaultValue": null
                }
              ],
              "type": {
                "kind": "OBJECT",
                "name": "DeleteRecruitPayload",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "deleteRecruitByRowId",
              "description": "Deletes a single `Recruit` using a unique key.",
              "args": [
                {
                  "name": "input",
                  "description": "The exclusive input argument for this mutation. An object type, make sure to see documentation for this object’s fields.",
                  "type": {
                    "kind": "NON_NULL",
                    "name": null,
                    "ofType": {
                      "kind": "INPUT_OBJECT",
                      "name": "DeleteRecruitByRowIdInput",
                      "ofType": null
                    }
                  },
                  "defaultValue": null
                }
              ],
              "type": {
                "kind": "OBJECT",
                "name": "DeleteRecruitPayload",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "createRecruiter",
              "description": "Creates a single `Recruiter`.",
              "args": [
                {
                  "name": "input",
                  "description": "The exclusive input argument for this mutation. An object type, make sure to see documentation for this object’s fields.",
                  "type": {
                    "kind": "NON_NULL",
                    "name": null,
                    "ofType": {
                      "kind": "INPUT_OBJECT",
                      "name": "CreateRecruiterInput",
                      "ofType": null
                    }
                  },
                  "defaultValue": null
                }
              ],
              "type": {
                "kind": "OBJECT",
                "name": "CreateRecruiterPayload",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "updateRecruiter",
              "description": "Updates a single `Recruiter` using its globally unique id and a patch.",
              "args": [
                {
                  "name": "input",
                  "description": "The exclusive input argument for this mutation. An object type, make sure to see documentation for this object’s fields.",
                  "type": {
                    "kind": "NON_NULL",
                    "name": null,
                    "ofType": {
                      "kind": "INPUT_OBJECT",
                      "name": "UpdateRecruiterInput",
                      "ofType": null
                    }
                  },
                  "defaultValue": null
                }
              ],
              "type": {
                "kind": "OBJECT",
                "name": "UpdateRecruiterPayload",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "updateRecruiterByRowId",
              "description": "Updates a single `Recruiter` using a unique key and a patch.",
              "args": [
                {
                  "name": "input",
                  "description": "The exclusive input argument for this mutation. An object type, make sure to see documentation for this object’s fields.",
                  "type": {
                    "kind": "NON_NULL",
                    "name": null,
                    "ofType": {
                      "kind": "INPUT_OBJECT",
                      "name": "UpdateRecruiterByRowIdInput",
                      "ofType": null
                    }
                  },
                  "defaultValue": null
                }
              ],
              "type": {
                "kind": "OBJECT",
                "name": "UpdateRecruiterPayload",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "deleteRecruiter",
              "description": "Deletes a single `Recruiter` using its globally unique id.",
              "args": [
                {
                  "name": "input",
                  "description": "The exclusive input argument for this mutation. An object type, make sure to see documentation for this object’s fields.",
                  "type": {
                    "kind": "NON_NULL",
                    "name": null,
                    "ofType": {
                      "kind": "INPUT_OBJECT",
                      "name": "DeleteRecruiterInput",
                      "ofType": null
                    }
                  },
                  "defaultValue": null
                }
              ],
              "type": {
                "kind": "OBJECT",
                "name": "DeleteRecruiterPayload",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "deleteRecruiterByRowId",
              "description": "Deletes a single `Recruiter` using a unique key.",
              "args": [
                {
                  "name": "input",
                  "description": "The exclusive input argument for this mutation. An object type, make sure to see documentation for this object’s fields.",
                  "type": {
                    "kind": "NON_NULL",
                    "name": null,
                    "ofType": {
                      "kind": "INPUT_OBJECT",
                      "name": "DeleteRecruiterByRowIdInput",
                      "ofType": null
                    }
                  },
                  "defaultValue": null
                }
              ],
              "type": {
                "kind": "OBJECT",
                "name": "DeleteRecruiterPayload",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "createTest",
              "description": "Creates a single `Test`.",
              "args": [
                {
                  "name": "input",
                  "description": "The exclusive input argument for this mutation. An object type, make sure to see documentation for this object’s fields.",
                  "type": {
                    "kind": "NON_NULL",
                    "name": null,
                    "ofType": {
                      "kind": "INPUT_OBJECT",
                      "name": "CreateTestInput",
                      "ofType": null
                    }
                  },
                  "defaultValue": null
                }
              ],
              "type": {
                "kind": "OBJECT",
                "name": "CreateTestPayload",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "updateTest",
              "description": "Updates a single `Test` using its globally unique id and a patch.",
              "args": [
                {
                  "name": "input",
                  "description": "The exclusive input argument for this mutation. An object type, make sure to see documentation for this object’s fields.",
                  "type": {
                    "kind": "NON_NULL",
                    "name": null,
                    "ofType": {
                      "kind": "INPUT_OBJECT",
                      "name": "UpdateTestInput",
                      "ofType": null
                    }
                  },
                  "defaultValue": null
                }
              ],
              "type": {
                "kind": "OBJECT",
                "name": "UpdateTestPayload",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "updateTestByRecruitId",
              "description": "Updates a single `Test` using a unique key and a patch.",
              "args": [
                {
                  "name": "input",
                  "description": "The exclusive input argument for this mutation. An object type, make sure to see documentation for this object’s fields.",
                  "type": {
                    "kind": "NON_NULL",
                    "name": null,
                    "ofType": {
                      "kind": "INPUT_OBJECT",
                      "name": "UpdateTestByRecruitIdInput",
                      "ofType": null
                    }
                  },
                  "defaultValue": null
                }
              ],
              "type": {
                "kind": "OBJECT",
                "name": "UpdateTestPayload",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "deleteTest",
              "description": "Deletes a single `Test` using its globally unique id.",
              "args": [
                {
                  "name": "input",
                  "description": "The exclusive input argument for this mutation. An object type, make sure to see documentation for this object’s fields.",
                  "type": {
                    "kind": "NON_NULL",
                    "name": null,
                    "ofType": {
                      "kind": "INPUT_OBJECT",
                      "name": "DeleteTestInput",
                      "ofType": null
                    }
                  },
                  "defaultValue": null
                }
              ],
              "type": {
                "kind": "OBJECT",
                "name": "DeleteTestPayload",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "deleteTestByRecruitId",
              "description": "Deletes a single `Test` using a unique key.",
              "args": [
                {
                  "name": "input",
                  "description": "The exclusive input argument for this mutation. An object type, make sure to see documentation for this object’s fields.",
                  "type": {
                    "kind": "NON_NULL",
                    "name": null,
                    "ofType": {
                      "kind": "INPUT_OBJECT",
                      "name": "DeleteTestByRecruitIdInput",
                      "ofType": null
                    }
                  },
                  "defaultValue": null
                }
              ],
              "type": {
                "kind": "OBJECT",
                "name": "DeleteTestPayload",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            }
          ],
          "inputFields": null,
          "interfaces": [],
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "INPUT_OBJECT",
          "name": "GenRandomBytesInput",
          "description": "All input for the `genRandomBytes` mutation.",
          "fields": null,
          "inputFields": [
            {
              "name": "clientMutationId",
              "description": "An arbitrary string value with no semantic meaning. Will be included in the payload verbatim. May be used to track mutations by the client.",
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "arg0",
              "description": null,
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                }
              },
              "defaultValue": null
            }
          ],
          "interfaces": null,
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "OBJECT",
          "name": "GenRandomBytesPayload",
          "description": "The output of our `genRandomBytes` mutation.",
          "fields": [
            {
              "name": "clientMutationId",
              "description": "The exact same `clientMutationId` that was provided in the mutation input, unchanged and unused. May be used by a client to track mutations.",
              "args": [],
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "string",
              "description": null,
              "args": [],
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "query",
              "description": "Our root query field type. Allows us to run any query from our mutation payload.",
              "args": [],
              "type": {
                "kind": "OBJECT",
                "name": "Query",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            }
          ],
          "inputFields": null,
          "interfaces": [],
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "INPUT_OBJECT",
          "name": "GenRandomUuidInput",
          "description": "All input for the `genRandomUuid` mutation.",
          "fields": null,
          "inputFields": [
            {
              "name": "clientMutationId",
              "description": "An arbitrary string value with no semantic meaning. Will be included in the payload verbatim. May be used to track mutations by the client.",
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "defaultValue": null
            }
          ],
          "interfaces": null,
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "OBJECT",
          "name": "GenRandomUuidPayload",
          "description": "The output of our `genRandomUuid` mutation.",
          "fields": [
            {
              "name": "clientMutationId",
              "description": "The exact same `clientMutationId` that was provided in the mutation input, unchanged and unused. May be used by a client to track mutations.",
              "args": [],
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "uuid",
              "description": null,
              "args": [],
              "type": {
                "kind": "SCALAR",
                "name": "Uuid",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "query",
              "description": "Our root query field type. Allows us to run any query from our mutation payload.",
              "args": [],
              "type": {
                "kind": "OBJECT",
                "name": "Query",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            }
          ],
          "inputFields": null,
          "interfaces": [],
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "SCALAR",
          "name": "Uuid",
          "description": "A universally unique identifier as defined by [RFC 4122](https://tools.ietf.org/html/rfc4122).",
          "fields": null,
          "inputFields": null,
          "interfaces": null,
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "INPUT_OBJECT",
          "name": "LoginInput",
          "description": "All input for the `login` mutation.",
          "fields": null,
          "inputFields": [
            {
              "name": "clientMutationId",
              "description": "An arbitrary string value with no semantic meaning. Will be included in the payload verbatim. May be used to track mutations by the client.",
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "email",
              "description": null,
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "pass",
              "description": null,
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "defaultValue": null
            }
          ],
          "interfaces": null,
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "OBJECT",
          "name": "LoginPayload",
          "description": "The output of our `login` mutation.",
          "fields": [
            {
              "name": "clientMutationId",
              "description": "The exact same `clientMutationId` that was provided in the mutation input, unchanged and unused. May be used by a client to track mutations.",
              "args": [],
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "jwtToken",
              "description": null,
              "args": [],
              "type": {
                "kind": "OBJECT",
                "name": "JwtToken",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "query",
              "description": "Our root query field type. Allows us to run any query from our mutation payload.",
              "args": [],
              "type": {
                "kind": "OBJECT",
                "name": "Query",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            }
          ],
          "inputFields": null,
          "interfaces": [],
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "OBJECT",
          "name": "JwtToken",
          "description": null,
          "fields": [
            {
              "name": "token",
              "description": null,
              "args": [],
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            }
          ],
          "inputFields": null,
          "interfaces": [],
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "INPUT_OBJECT",
          "name": "CreateDatabasechangelogInput",
          "description": "All input for the `createDatabasechangelog` mutation.",
          "fields": null,
          "inputFields": [
            {
              "name": "clientMutationId",
              "description": "An arbitrary string value with no semantic meaning. Will be included in the payload verbatim. May be used to track mutations by the client.",
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "databasechangelog",
              "description": "The `Databasechangelog` to be created by this mutation.",
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "INPUT_OBJECT",
                  "name": "DatabasechangelogInput",
                  "ofType": null
                }
              },
              "defaultValue": null
            }
          ],
          "interfaces": null,
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "INPUT_OBJECT",
          "name": "DatabasechangelogInput",
          "description": null,
          "fields": null,
          "inputFields": [
            {
              "name": "rowId",
              "description": null,
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              },
              "defaultValue": null
            },
            {
              "name": "author",
              "description": null,
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              },
              "defaultValue": null
            },
            {
              "name": "filename",
              "description": null,
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              },
              "defaultValue": null
            },
            {
              "name": "dateexecuted",
              "description": null,
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "Datetime",
                  "ofType": null
                }
              },
              "defaultValue": null
            },
            {
              "name": "orderexecuted",
              "description": null,
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                }
              },
              "defaultValue": null
            },
            {
              "name": "exectype",
              "description": null,
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              },
              "defaultValue": null
            },
            {
              "name": "md5sum",
              "description": null,
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "description",
              "description": null,
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "comments",
              "description": null,
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "tag",
              "description": null,
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "liquibase",
              "description": null,
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "contexts",
              "description": null,
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "labels",
              "description": null,
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "deploymentId",
              "description": null,
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "defaultValue": null
            }
          ],
          "interfaces": null,
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "OBJECT",
          "name": "CreateDatabasechangelogPayload",
          "description": "The output of our `createDatabasechangelog` mutation.",
          "fields": [
            {
              "name": "clientMutationId",
              "description": "The exact same `clientMutationId` that was provided in the mutation input, unchanged and unused. May be used by a client to track mutations.",
              "args": [],
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "databasechangelog",
              "description": "The `Databasechangelog` that was created by this mutation.",
              "args": [],
              "type": {
                "kind": "OBJECT",
                "name": "Databasechangelog",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "databasechangelogEdge",
              "description": "An edge for our `Databasechangelog`. May be used by Relay 1.",
              "args": [
                {
                  "name": "orderBy",
                  "description": "The method to use when ordering `Databasechangelog`.",
                  "type": {
                    "kind": "ENUM",
                    "name": "DatabasechangelogsOrderBy",
                    "ofType": null
                  },
                  "defaultValue": "NATURAL"
                }
              ],
              "type": {
                "kind": "OBJECT",
                "name": "DatabasechangelogsEdge",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "query",
              "description": "Our root query field type. Allows us to run any query from our mutation payload.",
              "args": [],
              "type": {
                "kind": "OBJECT",
                "name": "Query",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            }
          ],
          "inputFields": null,
          "interfaces": [],
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "INPUT_OBJECT",
          "name": "CreateDatabasechangeloglockInput",
          "description": "All input for the `createDatabasechangeloglock` mutation.",
          "fields": null,
          "inputFields": [
            {
              "name": "clientMutationId",
              "description": "An arbitrary string value with no semantic meaning. Will be included in the payload verbatim. May be used to track mutations by the client.",
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "databasechangeloglock",
              "description": "The `Databasechangeloglock` to be created by this mutation.",
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "INPUT_OBJECT",
                  "name": "DatabasechangeloglockInput",
                  "ofType": null
                }
              },
              "defaultValue": null
            }
          ],
          "interfaces": null,
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "INPUT_OBJECT",
          "name": "DatabasechangeloglockInput",
          "description": null,
          "fields": null,
          "inputFields": [
            {
              "name": "rowId",
              "description": null,
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                }
              },
              "defaultValue": null
            },
            {
              "name": "locked",
              "description": null,
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "Boolean",
                  "ofType": null
                }
              },
              "defaultValue": null
            },
            {
              "name": "lockgranted",
              "description": null,
              "type": {
                "kind": "SCALAR",
                "name": "Datetime",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "lockedby",
              "description": null,
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "defaultValue": null
            }
          ],
          "interfaces": null,
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "OBJECT",
          "name": "CreateDatabasechangeloglockPayload",
          "description": "The output of our `createDatabasechangeloglock` mutation.",
          "fields": [
            {
              "name": "clientMutationId",
              "description": "The exact same `clientMutationId` that was provided in the mutation input, unchanged and unused. May be used by a client to track mutations.",
              "args": [],
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "databasechangeloglock",
              "description": "The `Databasechangeloglock` that was created by this mutation.",
              "args": [],
              "type": {
                "kind": "OBJECT",
                "name": "Databasechangeloglock",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "databasechangeloglockEdge",
              "description": "An edge for our `Databasechangeloglock`. May be used by Relay 1.",
              "args": [
                {
                  "name": "orderBy",
                  "description": "The method to use when ordering `Databasechangeloglock`.",
                  "type": {
                    "kind": "ENUM",
                    "name": "DatabasechangeloglocksOrderBy",
                    "ofType": null
                  },
                  "defaultValue": "PRIMARY_KEY_ASC"
                }
              ],
              "type": {
                "kind": "OBJECT",
                "name": "DatabasechangeloglocksEdge",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "query",
              "description": "Our root query field type. Allows us to run any query from our mutation payload.",
              "args": [],
              "type": {
                "kind": "OBJECT",
                "name": "Query",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            }
          ],
          "inputFields": null,
          "interfaces": [],
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "INPUT_OBJECT",
          "name": "UpdateDatabasechangeloglockInput",
          "description": "All input for the `updateDatabasechangeloglock` mutation.",
          "fields": null,
          "inputFields": [
            {
              "name": "clientMutationId",
              "description": "An arbitrary string value with no semantic meaning. Will be included in the payload verbatim. May be used to track mutations by the client.",
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "id",
              "description": "The globally unique `ID` which will identify a single `Databasechangeloglock` to be updated.",
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "ID",
                  "ofType": null
                }
              },
              "defaultValue": null
            },
            {
              "name": "databasechangeloglockPatch",
              "description": "An object where the defined keys will be set on the `Databasechangeloglock` identified by our globally unique `ID`.",
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "INPUT_OBJECT",
                  "name": "DatabasechangeloglockPatch",
                  "ofType": null
                }
              },
              "defaultValue": null
            }
          ],
          "interfaces": null,
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "INPUT_OBJECT",
          "name": "DatabasechangeloglockPatch",
          "description": "Represents an update to a `Databasechangeloglock`. Fields that are set will be updated.",
          "fields": null,
          "inputFields": [
            {
              "name": "rowId",
              "description": null,
              "type": {
                "kind": "SCALAR",
                "name": "Int",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "locked",
              "description": null,
              "type": {
                "kind": "SCALAR",
                "name": "Boolean",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "lockgranted",
              "description": null,
              "type": {
                "kind": "SCALAR",
                "name": "Datetime",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "lockedby",
              "description": null,
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "defaultValue": null
            }
          ],
          "interfaces": null,
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "OBJECT",
          "name": "UpdateDatabasechangeloglockPayload",
          "description": "The output of our `updateDatabasechangeloglock` mutation.",
          "fields": [
            {
              "name": "clientMutationId",
              "description": "The exact same `clientMutationId` that was provided in the mutation input, unchanged and unused. May be used by a client to track mutations.",
              "args": [],
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "databasechangeloglock",
              "description": null,
              "args": [],
              "type": {
                "kind": "OBJECT",
                "name": "Databasechangeloglock",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "query",
              "description": "Our root query field type. Allows us to run any query from our mutation payload.",
              "args": [],
              "type": {
                "kind": "OBJECT",
                "name": "Query",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            }
          ],
          "inputFields": null,
          "interfaces": [],
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "INPUT_OBJECT",
          "name": "UpdateDatabasechangeloglockByRowIdInput",
          "description": "All input for the `updateDatabasechangeloglockByRowId` mutation.",
          "fields": null,
          "inputFields": [
            {
              "name": "clientMutationId",
              "description": "An arbitrary string value with no semantic meaning. Will be included in the payload verbatim. May be used to track mutations by the client.",
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "rowId",
              "description": null,
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                }
              },
              "defaultValue": null
            },
            {
              "name": "databasechangeloglockPatch",
              "description": "An object where the defined keys will be set on the `Databasechangeloglock` identified by our unique key.",
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "INPUT_OBJECT",
                  "name": "DatabasechangeloglockPatch",
                  "ofType": null
                }
              },
              "defaultValue": null
            }
          ],
          "interfaces": null,
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "INPUT_OBJECT",
          "name": "DeleteDatabasechangeloglockInput",
          "description": "All input for the `deleteDatabasechangeloglock` mutation.",
          "fields": null,
          "inputFields": [
            {
              "name": "clientMutationId",
              "description": "An arbitrary string value with no semantic meaning. Will be included in the payload verbatim. May be used to track mutations by the client.",
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "id",
              "description": "The globally unique `ID` which will identify a single `Databasechangeloglock` to be deleted.",
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "ID",
                  "ofType": null
                }
              },
              "defaultValue": null
            }
          ],
          "interfaces": null,
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "OBJECT",
          "name": "DeleteDatabasechangeloglockPayload",
          "description": "The output of our `deleteDatabasechangeloglock` mutation.",
          "fields": [
            {
              "name": "clientMutationId",
              "description": "The exact same `clientMutationId` that was provided in the mutation input, unchanged and unused. May be used by a client to track mutations.",
              "args": [],
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "databasechangeloglock",
              "description": null,
              "args": [],
              "type": {
                "kind": "OBJECT",
                "name": "Databasechangeloglock",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "deletedDatabasechangeloglockId",
              "description": null,
              "args": [],
              "type": {
                "kind": "SCALAR",
                "name": "ID",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "query",
              "description": "Our root query field type. Allows us to run any query from our mutation payload.",
              "args": [],
              "type": {
                "kind": "OBJECT",
                "name": "Query",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            }
          ],
          "inputFields": null,
          "interfaces": [],
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "INPUT_OBJECT",
          "name": "DeleteDatabasechangeloglockByRowIdInput",
          "description": "All input for the `deleteDatabasechangeloglockByRowId` mutation.",
          "fields": null,
          "inputFields": [
            {
              "name": "clientMutationId",
              "description": "An arbitrary string value with no semantic meaning. Will be included in the payload verbatim. May be used to track mutations by the client.",
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "rowId",
              "description": null,
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                }
              },
              "defaultValue": null
            }
          ],
          "interfaces": null,
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "INPUT_OBJECT",
          "name": "CreateDocInput",
          "description": "All input for the `createDoc` mutation.",
          "fields": null,
          "inputFields": [
            {
              "name": "clientMutationId",
              "description": "An arbitrary string value with no semantic meaning. Will be included in the payload verbatim. May be used to track mutations by the client.",
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "doc",
              "description": "The `Doc` to be created by this mutation.",
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "INPUT_OBJECT",
                  "name": "DocInput",
                  "ofType": null
                }
              },
              "defaultValue": null
            }
          ],
          "interfaces": null,
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "INPUT_OBJECT",
          "name": "DocInput",
          "description": null,
          "fields": null,
          "inputFields": [
            {
              "name": "rowId",
              "description": null,
              "type": {
                "kind": "SCALAR",
                "name": "Int",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "recruitId",
              "description": null,
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                }
              },
              "defaultValue": null
            },
            {
              "name": "link",
              "description": null,
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              },
              "defaultValue": null
            },
            {
              "name": "created",
              "description": null,
              "type": {
                "kind": "SCALAR",
                "name": "Datetime",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "modified",
              "description": null,
              "type": {
                "kind": "SCALAR",
                "name": "Datetime",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "closed",
              "description": null,
              "type": {
                "kind": "SCALAR",
                "name": "Datetime",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "validUntil",
              "description": null,
              "type": {
                "kind": "SCALAR",
                "name": "Datetime",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "createdBy",
              "description": null,
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                }
              },
              "defaultValue": null
            },
            {
              "name": "modifiedBy",
              "description": null,
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                }
              },
              "defaultValue": null
            },
            {
              "name": "closedBy",
              "description": null,
              "type": {
                "kind": "SCALAR",
                "name": "Int",
                "ofType": null
              },
              "defaultValue": null
            }
          ],
          "interfaces": null,
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "OBJECT",
          "name": "CreateDocPayload",
          "description": "The output of our `createDoc` mutation.",
          "fields": [
            {
              "name": "clientMutationId",
              "description": "The exact same `clientMutationId` that was provided in the mutation input, unchanged and unused. May be used by a client to track mutations.",
              "args": [],
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "doc",
              "description": "The `Doc` that was created by this mutation.",
              "args": [],
              "type": {
                "kind": "OBJECT",
                "name": "Doc",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "docEdge",
              "description": "An edge for our `Doc`. May be used by Relay 1.",
              "args": [
                {
                  "name": "orderBy",
                  "description": "The method to use when ordering `Doc`.",
                  "type": {
                    "kind": "ENUM",
                    "name": "DocsOrderBy",
                    "ofType": null
                  },
                  "defaultValue": "PRIMARY_KEY_ASC"
                }
              ],
              "type": {
                "kind": "OBJECT",
                "name": "DocsEdge",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "recruitByRecruitId",
              "description": "Reads a single `Recruit` that is related to this `Doc`.",
              "args": [],
              "type": {
                "kind": "OBJECT",
                "name": "Recruit",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "employeeByCreatedBy",
              "description": "Reads a single `Employee` that is related to this `Doc`.",
              "args": [],
              "type": {
                "kind": "OBJECT",
                "name": "Employee",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "employeeByModifiedBy",
              "description": "Reads a single `Employee` that is related to this `Doc`.",
              "args": [],
              "type": {
                "kind": "OBJECT",
                "name": "Employee",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "employeeByClosedBy",
              "description": "Reads a single `Employee` that is related to this `Doc`.",
              "args": [],
              "type": {
                "kind": "OBJECT",
                "name": "Employee",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "query",
              "description": "Our root query field type. Allows us to run any query from our mutation payload.",
              "args": [],
              "type": {
                "kind": "OBJECT",
                "name": "Query",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            }
          ],
          "inputFields": null,
          "interfaces": [],
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "INPUT_OBJECT",
          "name": "UpdateDocInput",
          "description": "All input for the `updateDoc` mutation.",
          "fields": null,
          "inputFields": [
            {
              "name": "clientMutationId",
              "description": "An arbitrary string value with no semantic meaning. Will be included in the payload verbatim. May be used to track mutations by the client.",
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "id",
              "description": "The globally unique `ID` which will identify a single `Doc` to be updated.",
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "ID",
                  "ofType": null
                }
              },
              "defaultValue": null
            },
            {
              "name": "docPatch",
              "description": "An object where the defined keys will be set on the `Doc` identified by our globally unique `ID`.",
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "INPUT_OBJECT",
                  "name": "DocPatch",
                  "ofType": null
                }
              },
              "defaultValue": null
            }
          ],
          "interfaces": null,
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "INPUT_OBJECT",
          "name": "DocPatch",
          "description": "Represents an update to a `Doc`. Fields that are set will be updated.",
          "fields": null,
          "inputFields": [
            {
              "name": "rowId",
              "description": null,
              "type": {
                "kind": "SCALAR",
                "name": "Int",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "recruitId",
              "description": null,
              "type": {
                "kind": "SCALAR",
                "name": "Int",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "link",
              "description": null,
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "created",
              "description": null,
              "type": {
                "kind": "SCALAR",
                "name": "Datetime",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "modified",
              "description": null,
              "type": {
                "kind": "SCALAR",
                "name": "Datetime",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "closed",
              "description": null,
              "type": {
                "kind": "SCALAR",
                "name": "Datetime",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "validUntil",
              "description": null,
              "type": {
                "kind": "SCALAR",
                "name": "Datetime",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "createdBy",
              "description": null,
              "type": {
                "kind": "SCALAR",
                "name": "Int",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "modifiedBy",
              "description": null,
              "type": {
                "kind": "SCALAR",
                "name": "Int",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "closedBy",
              "description": null,
              "type": {
                "kind": "SCALAR",
                "name": "Int",
                "ofType": null
              },
              "defaultValue": null
            }
          ],
          "interfaces": null,
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "OBJECT",
          "name": "UpdateDocPayload",
          "description": "The output of our `updateDoc` mutation.",
          "fields": [
            {
              "name": "clientMutationId",
              "description": "The exact same `clientMutationId` that was provided in the mutation input, unchanged and unused. May be used by a client to track mutations.",
              "args": [],
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "doc",
              "description": null,
              "args": [],
              "type": {
                "kind": "OBJECT",
                "name": "Doc",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "recruitByRecruitId",
              "description": "Reads a single `Recruit` that is related to this `Doc`.",
              "args": [],
              "type": {
                "kind": "OBJECT",
                "name": "Recruit",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "employeeByCreatedBy",
              "description": "Reads a single `Employee` that is related to this `Doc`.",
              "args": [],
              "type": {
                "kind": "OBJECT",
                "name": "Employee",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "employeeByModifiedBy",
              "description": "Reads a single `Employee` that is related to this `Doc`.",
              "args": [],
              "type": {
                "kind": "OBJECT",
                "name": "Employee",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "employeeByClosedBy",
              "description": "Reads a single `Employee` that is related to this `Doc`.",
              "args": [],
              "type": {
                "kind": "OBJECT",
                "name": "Employee",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "query",
              "description": "Our root query field type. Allows us to run any query from our mutation payload.",
              "args": [],
              "type": {
                "kind": "OBJECT",
                "name": "Query",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            }
          ],
          "inputFields": null,
          "interfaces": [],
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "INPUT_OBJECT",
          "name": "UpdateDocByRowIdInput",
          "description": "All input for the `updateDocByRowId` mutation.",
          "fields": null,
          "inputFields": [
            {
              "name": "clientMutationId",
              "description": "An arbitrary string value with no semantic meaning. Will be included in the payload verbatim. May be used to track mutations by the client.",
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "rowId",
              "description": null,
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                }
              },
              "defaultValue": null
            },
            {
              "name": "docPatch",
              "description": "An object where the defined keys will be set on the `Doc` identified by our unique key.",
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "INPUT_OBJECT",
                  "name": "DocPatch",
                  "ofType": null
                }
              },
              "defaultValue": null
            }
          ],
          "interfaces": null,
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "INPUT_OBJECT",
          "name": "DeleteDocInput",
          "description": "All input for the `deleteDoc` mutation.",
          "fields": null,
          "inputFields": [
            {
              "name": "clientMutationId",
              "description": "An arbitrary string value with no semantic meaning. Will be included in the payload verbatim. May be used to track mutations by the client.",
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "id",
              "description": "The globally unique `ID` which will identify a single `Doc` to be deleted.",
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "ID",
                  "ofType": null
                }
              },
              "defaultValue": null
            }
          ],
          "interfaces": null,
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "OBJECT",
          "name": "DeleteDocPayload",
          "description": "The output of our `deleteDoc` mutation.",
          "fields": [
            {
              "name": "clientMutationId",
              "description": "The exact same `clientMutationId` that was provided in the mutation input, unchanged and unused. May be used by a client to track mutations.",
              "args": [],
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "doc",
              "description": null,
              "args": [],
              "type": {
                "kind": "OBJECT",
                "name": "Doc",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "deletedDocId",
              "description": null,
              "args": [],
              "type": {
                "kind": "SCALAR",
                "name": "ID",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "recruitByRecruitId",
              "description": "Reads a single `Recruit` that is related to this `Doc`.",
              "args": [],
              "type": {
                "kind": "OBJECT",
                "name": "Recruit",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "employeeByCreatedBy",
              "description": "Reads a single `Employee` that is related to this `Doc`.",
              "args": [],
              "type": {
                "kind": "OBJECT",
                "name": "Employee",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "employeeByModifiedBy",
              "description": "Reads a single `Employee` that is related to this `Doc`.",
              "args": [],
              "type": {
                "kind": "OBJECT",
                "name": "Employee",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "employeeByClosedBy",
              "description": "Reads a single `Employee` that is related to this `Doc`.",
              "args": [],
              "type": {
                "kind": "OBJECT",
                "name": "Employee",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "query",
              "description": "Our root query field type. Allows us to run any query from our mutation payload.",
              "args": [],
              "type": {
                "kind": "OBJECT",
                "name": "Query",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            }
          ],
          "inputFields": null,
          "interfaces": [],
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "INPUT_OBJECT",
          "name": "DeleteDocByRowIdInput",
          "description": "All input for the `deleteDocByRowId` mutation.",
          "fields": null,
          "inputFields": [
            {
              "name": "clientMutationId",
              "description": "An arbitrary string value with no semantic meaning. Will be included in the payload verbatim. May be used to track mutations by the client.",
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "rowId",
              "description": null,
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                }
              },
              "defaultValue": null
            }
          ],
          "interfaces": null,
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "INPUT_OBJECT",
          "name": "CreateEmployeeInput",
          "description": "All input for the `createEmployee` mutation.",
          "fields": null,
          "inputFields": [
            {
              "name": "clientMutationId",
              "description": "An arbitrary string value with no semantic meaning. Will be included in the payload verbatim. May be used to track mutations by the client.",
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "employee",
              "description": "The `Employee` to be created by this mutation.",
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "INPUT_OBJECT",
                  "name": "EmployeeInput",
                  "ofType": null
                }
              },
              "defaultValue": null
            }
          ],
          "interfaces": null,
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "INPUT_OBJECT",
          "name": "EmployeeInput",
          "description": null,
          "fields": null,
          "inputFields": [
            {
              "name": "rowId",
              "description": null,
              "type": {
                "kind": "SCALAR",
                "name": "Int",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "lastName",
              "description": null,
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              },
              "defaultValue": null
            },
            {
              "name": "firstName",
              "description": null,
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              },
              "defaultValue": null
            },
            {
              "name": "role",
              "description": null,
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              },
              "defaultValue": null
            },
            {
              "name": "created",
              "description": null,
              "type": {
                "kind": "SCALAR",
                "name": "Datetime",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "modified",
              "description": null,
              "type": {
                "kind": "SCALAR",
                "name": "Datetime",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "closed",
              "description": null,
              "type": {
                "kind": "SCALAR",
                "name": "Datetime",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "validUntil",
              "description": null,
              "type": {
                "kind": "SCALAR",
                "name": "Datetime",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "createdBy",
              "description": null,
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                }
              },
              "defaultValue": null
            },
            {
              "name": "modifiedBy",
              "description": null,
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                }
              },
              "defaultValue": null
            }
          ],
          "interfaces": null,
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "OBJECT",
          "name": "CreateEmployeePayload",
          "description": "The output of our `createEmployee` mutation.",
          "fields": [
            {
              "name": "clientMutationId",
              "description": "The exact same `clientMutationId` that was provided in the mutation input, unchanged and unused. May be used by a client to track mutations.",
              "args": [],
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "employee",
              "description": "The `Employee` that was created by this mutation.",
              "args": [],
              "type": {
                "kind": "OBJECT",
                "name": "Employee",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "employeeEdge",
              "description": "An edge for our `Employee`. May be used by Relay 1.",
              "args": [
                {
                  "name": "orderBy",
                  "description": "The method to use when ordering `Employee`.",
                  "type": {
                    "kind": "ENUM",
                    "name": "EmployeesOrderBy",
                    "ofType": null
                  },
                  "defaultValue": "PRIMARY_KEY_ASC"
                }
              ],
              "type": {
                "kind": "OBJECT",
                "name": "EmployeesEdge",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "query",
              "description": "Our root query field type. Allows us to run any query from our mutation payload.",
              "args": [],
              "type": {
                "kind": "OBJECT",
                "name": "Query",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            }
          ],
          "inputFields": null,
          "interfaces": [],
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "INPUT_OBJECT",
          "name": "UpdateEmployeeInput",
          "description": "All input for the `updateEmployee` mutation.",
          "fields": null,
          "inputFields": [
            {
              "name": "clientMutationId",
              "description": "An arbitrary string value with no semantic meaning. Will be included in the payload verbatim. May be used to track mutations by the client.",
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "id",
              "description": "The globally unique `ID` which will identify a single `Employee` to be updated.",
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "ID",
                  "ofType": null
                }
              },
              "defaultValue": null
            },
            {
              "name": "employeePatch",
              "description": "An object where the defined keys will be set on the `Employee` identified by our globally unique `ID`.",
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "INPUT_OBJECT",
                  "name": "EmployeePatch",
                  "ofType": null
                }
              },
              "defaultValue": null
            }
          ],
          "interfaces": null,
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "INPUT_OBJECT",
          "name": "EmployeePatch",
          "description": "Represents an update to a `Employee`. Fields that are set will be updated.",
          "fields": null,
          "inputFields": [
            {
              "name": "rowId",
              "description": null,
              "type": {
                "kind": "SCALAR",
                "name": "Int",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "lastName",
              "description": null,
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "firstName",
              "description": null,
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "role",
              "description": null,
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "created",
              "description": null,
              "type": {
                "kind": "SCALAR",
                "name": "Datetime",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "modified",
              "description": null,
              "type": {
                "kind": "SCALAR",
                "name": "Datetime",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "closed",
              "description": null,
              "type": {
                "kind": "SCALAR",
                "name": "Datetime",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "validUntil",
              "description": null,
              "type": {
                "kind": "SCALAR",
                "name": "Datetime",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "createdBy",
              "description": null,
              "type": {
                "kind": "SCALAR",
                "name": "Int",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "modifiedBy",
              "description": null,
              "type": {
                "kind": "SCALAR",
                "name": "Int",
                "ofType": null
              },
              "defaultValue": null
            }
          ],
          "interfaces": null,
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "OBJECT",
          "name": "UpdateEmployeePayload",
          "description": "The output of our `updateEmployee` mutation.",
          "fields": [
            {
              "name": "clientMutationId",
              "description": "The exact same `clientMutationId` that was provided in the mutation input, unchanged and unused. May be used by a client to track mutations.",
              "args": [],
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "employee",
              "description": null,
              "args": [],
              "type": {
                "kind": "OBJECT",
                "name": "Employee",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "query",
              "description": "Our root query field type. Allows us to run any query from our mutation payload.",
              "args": [],
              "type": {
                "kind": "OBJECT",
                "name": "Query",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            }
          ],
          "inputFields": null,
          "interfaces": [],
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "INPUT_OBJECT",
          "name": "UpdateEmployeeByRowIdInput",
          "description": "All input for the `updateEmployeeByRowId` mutation.",
          "fields": null,
          "inputFields": [
            {
              "name": "clientMutationId",
              "description": "An arbitrary string value with no semantic meaning. Will be included in the payload verbatim. May be used to track mutations by the client.",
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "rowId",
              "description": null,
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                }
              },
              "defaultValue": null
            },
            {
              "name": "employeePatch",
              "description": "An object where the defined keys will be set on the `Employee` identified by our unique key.",
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "INPUT_OBJECT",
                  "name": "EmployeePatch",
                  "ofType": null
                }
              },
              "defaultValue": null
            }
          ],
          "interfaces": null,
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "INPUT_OBJECT",
          "name": "DeleteEmployeeInput",
          "description": "All input for the `deleteEmployee` mutation.",
          "fields": null,
          "inputFields": [
            {
              "name": "clientMutationId",
              "description": "An arbitrary string value with no semantic meaning. Will be included in the payload verbatim. May be used to track mutations by the client.",
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "id",
              "description": "The globally unique `ID` which will identify a single `Employee` to be deleted.",
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "ID",
                  "ofType": null
                }
              },
              "defaultValue": null
            }
          ],
          "interfaces": null,
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "OBJECT",
          "name": "DeleteEmployeePayload",
          "description": "The output of our `deleteEmployee` mutation.",
          "fields": [
            {
              "name": "clientMutationId",
              "description": "The exact same `clientMutationId` that was provided in the mutation input, unchanged and unused. May be used by a client to track mutations.",
              "args": [],
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "employee",
              "description": null,
              "args": [],
              "type": {
                "kind": "OBJECT",
                "name": "Employee",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "deletedEmployeeId",
              "description": null,
              "args": [],
              "type": {
                "kind": "SCALAR",
                "name": "ID",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "query",
              "description": "Our root query field type. Allows us to run any query from our mutation payload.",
              "args": [],
              "type": {
                "kind": "OBJECT",
                "name": "Query",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            }
          ],
          "inputFields": null,
          "interfaces": [],
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "INPUT_OBJECT",
          "name": "DeleteEmployeeByRowIdInput",
          "description": "All input for the `deleteEmployeeByRowId` mutation.",
          "fields": null,
          "inputFields": [
            {
              "name": "clientMutationId",
              "description": "An arbitrary string value with no semantic meaning. Will be included in the payload verbatim. May be used to track mutations by the client.",
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "rowId",
              "description": null,
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                }
              },
              "defaultValue": null
            }
          ],
          "interfaces": null,
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "INPUT_OBJECT",
          "name": "CreateMedicalInput",
          "description": "All input for the `createMedical` mutation.",
          "fields": null,
          "inputFields": [
            {
              "name": "clientMutationId",
              "description": "An arbitrary string value with no semantic meaning. Will be included in the payload verbatim. May be used to track mutations by the client.",
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "medical",
              "description": "The `Medical` to be created by this mutation.",
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "INPUT_OBJECT",
                  "name": "MedicalInput",
                  "ofType": null
                }
              },
              "defaultValue": null
            }
          ],
          "interfaces": null,
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "INPUT_OBJECT",
          "name": "MedicalInput",
          "description": null,
          "fields": null,
          "inputFields": [
            {
              "name": "recruitId",
              "description": null,
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                }
              },
              "defaultValue": null
            },
            {
              "name": "examType",
              "description": null,
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              },
              "defaultValue": null
            },
            {
              "name": "result",
              "description": null,
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              },
              "defaultValue": null
            },
            {
              "name": "created",
              "description": null,
              "type": {
                "kind": "SCALAR",
                "name": "Datetime",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "modified",
              "description": null,
              "type": {
                "kind": "SCALAR",
                "name": "Datetime",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "closed",
              "description": null,
              "type": {
                "kind": "SCALAR",
                "name": "Datetime",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "validUntil",
              "description": null,
              "type": {
                "kind": "SCALAR",
                "name": "Datetime",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "createdBy",
              "description": null,
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                }
              },
              "defaultValue": null
            },
            {
              "name": "modifiedBy",
              "description": null,
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                }
              },
              "defaultValue": null
            },
            {
              "name": "closedBy",
              "description": null,
              "type": {
                "kind": "SCALAR",
                "name": "Int",
                "ofType": null
              },
              "defaultValue": null
            }
          ],
          "interfaces": null,
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "OBJECT",
          "name": "CreateMedicalPayload",
          "description": "The output of our `createMedical` mutation.",
          "fields": [
            {
              "name": "clientMutationId",
              "description": "The exact same `clientMutationId` that was provided in the mutation input, unchanged and unused. May be used by a client to track mutations.",
              "args": [],
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "medical",
              "description": "The `Medical` that was created by this mutation.",
              "args": [],
              "type": {
                "kind": "OBJECT",
                "name": "Medical",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "medicalEdge",
              "description": "An edge for our `Medical`. May be used by Relay 1.",
              "args": [
                {
                  "name": "orderBy",
                  "description": "The method to use when ordering `Medical`.",
                  "type": {
                    "kind": "ENUM",
                    "name": "MedicalsOrderBy",
                    "ofType": null
                  },
                  "defaultValue": "NATURAL"
                }
              ],
              "type": {
                "kind": "OBJECT",
                "name": "MedicalsEdge",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "recruitByRecruitId",
              "description": "Reads a single `Recruit` that is related to this `Medical`.",
              "args": [],
              "type": {
                "kind": "OBJECT",
                "name": "Recruit",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "employeeByCreatedBy",
              "description": "Reads a single `Employee` that is related to this `Medical`.",
              "args": [],
              "type": {
                "kind": "OBJECT",
                "name": "Employee",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "employeeByModifiedBy",
              "description": "Reads a single `Employee` that is related to this `Medical`.",
              "args": [],
              "type": {
                "kind": "OBJECT",
                "name": "Employee",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "employeeByClosedBy",
              "description": "Reads a single `Employee` that is related to this `Medical`.",
              "args": [],
              "type": {
                "kind": "OBJECT",
                "name": "Employee",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "query",
              "description": "Our root query field type. Allows us to run any query from our mutation payload.",
              "args": [],
              "type": {
                "kind": "OBJECT",
                "name": "Query",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            }
          ],
          "inputFields": null,
          "interfaces": [],
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "INPUT_OBJECT",
          "name": "CreateMepInput",
          "description": "All input for the `createMep` mutation.",
          "fields": null,
          "inputFields": [
            {
              "name": "clientMutationId",
              "description": "An arbitrary string value with no semantic meaning. Will be included in the payload verbatim. May be used to track mutations by the client.",
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "mep",
              "description": "The `Mep` to be created by this mutation.",
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "INPUT_OBJECT",
                  "name": "MepInput",
                  "ofType": null
                }
              },
              "defaultValue": null
            }
          ],
          "interfaces": null,
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "INPUT_OBJECT",
          "name": "MepInput",
          "description": null,
          "fields": null,
          "inputFields": [
            {
              "name": "rowId",
              "description": null,
              "type": {
                "kind": "SCALAR",
                "name": "Int",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "name",
              "description": null,
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              },
              "defaultValue": null
            }
          ],
          "interfaces": null,
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "OBJECT",
          "name": "CreateMepPayload",
          "description": "The output of our `createMep` mutation.",
          "fields": [
            {
              "name": "clientMutationId",
              "description": "The exact same `clientMutationId` that was provided in the mutation input, unchanged and unused. May be used by a client to track mutations.",
              "args": [],
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "mep",
              "description": "The `Mep` that was created by this mutation.",
              "args": [],
              "type": {
                "kind": "OBJECT",
                "name": "Mep",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "mepEdge",
              "description": "An edge for our `Mep`. May be used by Relay 1.",
              "args": [
                {
                  "name": "orderBy",
                  "description": "The method to use when ordering `Mep`.",
                  "type": {
                    "kind": "ENUM",
                    "name": "MepsOrderBy",
                    "ofType": null
                  },
                  "defaultValue": "PRIMARY_KEY_ASC"
                }
              ],
              "type": {
                "kind": "OBJECT",
                "name": "MepsEdge",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "query",
              "description": "Our root query field type. Allows us to run any query from our mutation payload.",
              "args": [],
              "type": {
                "kind": "OBJECT",
                "name": "Query",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            }
          ],
          "inputFields": null,
          "interfaces": [],
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "INPUT_OBJECT",
          "name": "UpdateMepInput",
          "description": "All input for the `updateMep` mutation.",
          "fields": null,
          "inputFields": [
            {
              "name": "clientMutationId",
              "description": "An arbitrary string value with no semantic meaning. Will be included in the payload verbatim. May be used to track mutations by the client.",
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "id",
              "description": "The globally unique `ID` which will identify a single `Mep` to be updated.",
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "ID",
                  "ofType": null
                }
              },
              "defaultValue": null
            },
            {
              "name": "mepPatch",
              "description": "An object where the defined keys will be set on the `Mep` identified by our globally unique `ID`.",
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "INPUT_OBJECT",
                  "name": "MepPatch",
                  "ofType": null
                }
              },
              "defaultValue": null
            }
          ],
          "interfaces": null,
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "INPUT_OBJECT",
          "name": "MepPatch",
          "description": "Represents an update to a `Mep`. Fields that are set will be updated.",
          "fields": null,
          "inputFields": [
            {
              "name": "rowId",
              "description": null,
              "type": {
                "kind": "SCALAR",
                "name": "Int",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "name",
              "description": null,
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "defaultValue": null
            }
          ],
          "interfaces": null,
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "OBJECT",
          "name": "UpdateMepPayload",
          "description": "The output of our `updateMep` mutation.",
          "fields": [
            {
              "name": "clientMutationId",
              "description": "The exact same `clientMutationId` that was provided in the mutation input, unchanged and unused. May be used by a client to track mutations.",
              "args": [],
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "mep",
              "description": null,
              "args": [],
              "type": {
                "kind": "OBJECT",
                "name": "Mep",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "query",
              "description": "Our root query field type. Allows us to run any query from our mutation payload.",
              "args": [],
              "type": {
                "kind": "OBJECT",
                "name": "Query",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            }
          ],
          "inputFields": null,
          "interfaces": [],
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "INPUT_OBJECT",
          "name": "UpdateMepByRowIdInput",
          "description": "All input for the `updateMepByRowId` mutation.",
          "fields": null,
          "inputFields": [
            {
              "name": "clientMutationId",
              "description": "An arbitrary string value with no semantic meaning. Will be included in the payload verbatim. May be used to track mutations by the client.",
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "rowId",
              "description": null,
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                }
              },
              "defaultValue": null
            },
            {
              "name": "mepPatch",
              "description": "An object where the defined keys will be set on the `Mep` identified by our unique key.",
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "INPUT_OBJECT",
                  "name": "MepPatch",
                  "ofType": null
                }
              },
              "defaultValue": null
            }
          ],
          "interfaces": null,
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "INPUT_OBJECT",
          "name": "DeleteMepInput",
          "description": "All input for the `deleteMep` mutation.",
          "fields": null,
          "inputFields": [
            {
              "name": "clientMutationId",
              "description": "An arbitrary string value with no semantic meaning. Will be included in the payload verbatim. May be used to track mutations by the client.",
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "id",
              "description": "The globally unique `ID` which will identify a single `Mep` to be deleted.",
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "ID",
                  "ofType": null
                }
              },
              "defaultValue": null
            }
          ],
          "interfaces": null,
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "OBJECT",
          "name": "DeleteMepPayload",
          "description": "The output of our `deleteMep` mutation.",
          "fields": [
            {
              "name": "clientMutationId",
              "description": "The exact same `clientMutationId` that was provided in the mutation input, unchanged and unused. May be used by a client to track mutations.",
              "args": [],
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "mep",
              "description": null,
              "args": [],
              "type": {
                "kind": "OBJECT",
                "name": "Mep",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "deletedMepId",
              "description": null,
              "args": [],
              "type": {
                "kind": "SCALAR",
                "name": "ID",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "query",
              "description": "Our root query field type. Allows us to run any query from our mutation payload.",
              "args": [],
              "type": {
                "kind": "OBJECT",
                "name": "Query",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            }
          ],
          "inputFields": null,
          "interfaces": [],
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "INPUT_OBJECT",
          "name": "DeleteMepByRowIdInput",
          "description": "All input for the `deleteMepByRowId` mutation.",
          "fields": null,
          "inputFields": [
            {
              "name": "clientMutationId",
              "description": "An arbitrary string value with no semantic meaning. Will be included in the payload verbatim. May be used to track mutations by the client.",
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "rowId",
              "description": null,
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                }
              },
              "defaultValue": null
            }
          ],
          "interfaces": null,
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "INPUT_OBJECT",
          "name": "CreateOperationInput",
          "description": "All input for the `createOperation` mutation.",
          "fields": null,
          "inputFields": [
            {
              "name": "clientMutationId",
              "description": "An arbitrary string value with no semantic meaning. Will be included in the payload verbatim. May be used to track mutations by the client.",
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "operation",
              "description": "The `Operation` to be created by this mutation.",
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "INPUT_OBJECT",
                  "name": "OperationInput",
                  "ofType": null
                }
              },
              "defaultValue": null
            }
          ],
          "interfaces": null,
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "INPUT_OBJECT",
          "name": "OperationInput",
          "description": null,
          "fields": null,
          "inputFields": [
            {
              "name": "recruitId",
              "description": null,
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                }
              },
              "defaultValue": null
            },
            {
              "name": "counseled",
              "description": null,
              "type": {
                "kind": "SCALAR",
                "name": "Datetime",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "fingerprinted",
              "description": null,
              "type": {
                "kind": "SCALAR",
                "name": "Datetime",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "swornIn",
              "description": null,
              "type": {
                "kind": "SCALAR",
                "name": "Datetime",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "contracted",
              "description": null,
              "type": {
                "kind": "SCALAR",
                "name": "Datetime",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "created",
              "description": null,
              "type": {
                "kind": "SCALAR",
                "name": "Datetime",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "modified",
              "description": null,
              "type": {
                "kind": "SCALAR",
                "name": "Datetime",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "closed",
              "description": null,
              "type": {
                "kind": "SCALAR",
                "name": "Datetime",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "validUntil",
              "description": null,
              "type": {
                "kind": "SCALAR",
                "name": "Datetime",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "createdBy",
              "description": null,
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                }
              },
              "defaultValue": null
            },
            {
              "name": "modifiedBy",
              "description": null,
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                }
              },
              "defaultValue": null
            },
            {
              "name": "closedBy",
              "description": null,
              "type": {
                "kind": "SCALAR",
                "name": "Int",
                "ofType": null
              },
              "defaultValue": null
            }
          ],
          "interfaces": null,
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "OBJECT",
          "name": "CreateOperationPayload",
          "description": "The output of our `createOperation` mutation.",
          "fields": [
            {
              "name": "clientMutationId",
              "description": "The exact same `clientMutationId` that was provided in the mutation input, unchanged and unused. May be used by a client to track mutations.",
              "args": [],
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "operation",
              "description": "The `Operation` that was created by this mutation.",
              "args": [],
              "type": {
                "kind": "OBJECT",
                "name": "Operation",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "operationEdge",
              "description": "An edge for our `Operation`. May be used by Relay 1.",
              "args": [
                {
                  "name": "orderBy",
                  "description": "The method to use when ordering `Operation`.",
                  "type": {
                    "kind": "ENUM",
                    "name": "OperationsOrderBy",
                    "ofType": null
                  },
                  "defaultValue": "NATURAL"
                }
              ],
              "type": {
                "kind": "OBJECT",
                "name": "OperationsEdge",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "recruitByRecruitId",
              "description": "Reads a single `Recruit` that is related to this `Operation`.",
              "args": [],
              "type": {
                "kind": "OBJECT",
                "name": "Recruit",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "employeeByCreatedBy",
              "description": "Reads a single `Employee` that is related to this `Operation`.",
              "args": [],
              "type": {
                "kind": "OBJECT",
                "name": "Employee",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "employeeByModifiedBy",
              "description": "Reads a single `Employee` that is related to this `Operation`.",
              "args": [],
              "type": {
                "kind": "OBJECT",
                "name": "Employee",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "employeeByClosedBy",
              "description": "Reads a single `Employee` that is related to this `Operation`.",
              "args": [],
              "type": {
                "kind": "OBJECT",
                "name": "Employee",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "query",
              "description": "Our root query field type. Allows us to run any query from our mutation payload.",
              "args": [],
              "type": {
                "kind": "OBJECT",
                "name": "Query",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            }
          ],
          "inputFields": null,
          "interfaces": [],
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "INPUT_OBJECT",
          "name": "CreatePersonInput",
          "description": "All input for the `createPerson` mutation.",
          "fields": null,
          "inputFields": [
            {
              "name": "clientMutationId",
              "description": "An arbitrary string value with no semantic meaning. Will be included in the payload verbatim. May be used to track mutations by the client.",
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "person",
              "description": "The `Person` to be created by this mutation.",
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "INPUT_OBJECT",
                  "name": "PersonInput",
                  "ofType": null
                }
              },
              "defaultValue": null
            }
          ],
          "interfaces": null,
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "INPUT_OBJECT",
          "name": "PersonInput",
          "description": null,
          "fields": null,
          "inputFields": [
            {
              "name": "rowId",
              "description": null,
              "type": {
                "kind": "SCALAR",
                "name": "Int",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "ssn",
              "description": null,
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              },
              "defaultValue": null
            },
            {
              "name": "birthday",
              "description": null,
              "type": {
                "kind": "SCALAR",
                "name": "Date",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "cityOfBirth",
              "description": null,
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "stateOfBirth",
              "description": null,
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "countyOfBirth",
              "description": null,
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "countryOfBirth",
              "description": null,
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "created",
              "description": null,
              "type": {
                "kind": "SCALAR",
                "name": "Datetime",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "modified",
              "description": null,
              "type": {
                "kind": "SCALAR",
                "name": "Datetime",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "validUntil",
              "description": null,
              "type": {
                "kind": "SCALAR",
                "name": "Datetime",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "createdBy",
              "description": null,
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                }
              },
              "defaultValue": null
            },
            {
              "name": "modifiedBy",
              "description": null,
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                }
              },
              "defaultValue": null
            }
          ],
          "interfaces": null,
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "OBJECT",
          "name": "CreatePersonPayload",
          "description": "The output of our `createPerson` mutation.",
          "fields": [
            {
              "name": "clientMutationId",
              "description": "The exact same `clientMutationId` that was provided in the mutation input, unchanged and unused. May be used by a client to track mutations.",
              "args": [],
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "person",
              "description": "The `Person` that was created by this mutation.",
              "args": [],
              "type": {
                "kind": "OBJECT",
                "name": "Person",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "personEdge",
              "description": "An edge for our `Person`. May be used by Relay 1.",
              "args": [
                {
                  "name": "orderBy",
                  "description": "The method to use when ordering `Person`.",
                  "type": {
                    "kind": "ENUM",
                    "name": "PeopleOrderBy",
                    "ofType": null
                  },
                  "defaultValue": "PRIMARY_KEY_ASC"
                }
              ],
              "type": {
                "kind": "OBJECT",
                "name": "PeopleEdge",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "employeeByCreatedBy",
              "description": "Reads a single `Employee` that is related to this `Person`.",
              "args": [],
              "type": {
                "kind": "OBJECT",
                "name": "Employee",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "employeeByModifiedBy",
              "description": "Reads a single `Employee` that is related to this `Person`.",
              "args": [],
              "type": {
                "kind": "OBJECT",
                "name": "Employee",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "query",
              "description": "Our root query field type. Allows us to run any query from our mutation payload.",
              "args": [],
              "type": {
                "kind": "OBJECT",
                "name": "Query",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            }
          ],
          "inputFields": null,
          "interfaces": [],
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "INPUT_OBJECT",
          "name": "UpdatePersonInput",
          "description": "All input for the `updatePerson` mutation.",
          "fields": null,
          "inputFields": [
            {
              "name": "clientMutationId",
              "description": "An arbitrary string value with no semantic meaning. Will be included in the payload verbatim. May be used to track mutations by the client.",
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "id",
              "description": "The globally unique `ID` which will identify a single `Person` to be updated.",
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "ID",
                  "ofType": null
                }
              },
              "defaultValue": null
            },
            {
              "name": "personPatch",
              "description": "An object where the defined keys will be set on the `Person` identified by our globally unique `ID`.",
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "INPUT_OBJECT",
                  "name": "PersonPatch",
                  "ofType": null
                }
              },
              "defaultValue": null
            }
          ],
          "interfaces": null,
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "INPUT_OBJECT",
          "name": "PersonPatch",
          "description": "Represents an update to a `Person`. Fields that are set will be updated.",
          "fields": null,
          "inputFields": [
            {
              "name": "rowId",
              "description": null,
              "type": {
                "kind": "SCALAR",
                "name": "Int",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "ssn",
              "description": null,
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "birthday",
              "description": null,
              "type": {
                "kind": "SCALAR",
                "name": "Date",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "cityOfBirth",
              "description": null,
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "stateOfBirth",
              "description": null,
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "countyOfBirth",
              "description": null,
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "countryOfBirth",
              "description": null,
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "created",
              "description": null,
              "type": {
                "kind": "SCALAR",
                "name": "Datetime",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "modified",
              "description": null,
              "type": {
                "kind": "SCALAR",
                "name": "Datetime",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "validUntil",
              "description": null,
              "type": {
                "kind": "SCALAR",
                "name": "Datetime",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "createdBy",
              "description": null,
              "type": {
                "kind": "SCALAR",
                "name": "Int",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "modifiedBy",
              "description": null,
              "type": {
                "kind": "SCALAR",
                "name": "Int",
                "ofType": null
              },
              "defaultValue": null
            }
          ],
          "interfaces": null,
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "OBJECT",
          "name": "UpdatePersonPayload",
          "description": "The output of our `updatePerson` mutation.",
          "fields": [
            {
              "name": "clientMutationId",
              "description": "The exact same `clientMutationId` that was provided in the mutation input, unchanged and unused. May be used by a client to track mutations.",
              "args": [],
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "person",
              "description": null,
              "args": [],
              "type": {
                "kind": "OBJECT",
                "name": "Person",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "employeeByCreatedBy",
              "description": "Reads a single `Employee` that is related to this `Person`.",
              "args": [],
              "type": {
                "kind": "OBJECT",
                "name": "Employee",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "employeeByModifiedBy",
              "description": "Reads a single `Employee` that is related to this `Person`.",
              "args": [],
              "type": {
                "kind": "OBJECT",
                "name": "Employee",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "query",
              "description": "Our root query field type. Allows us to run any query from our mutation payload.",
              "args": [],
              "type": {
                "kind": "OBJECT",
                "name": "Query",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            }
          ],
          "inputFields": null,
          "interfaces": [],
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "INPUT_OBJECT",
          "name": "UpdatePersonByRowIdInput",
          "description": "All input for the `updatePersonByRowId` mutation.",
          "fields": null,
          "inputFields": [
            {
              "name": "clientMutationId",
              "description": "An arbitrary string value with no semantic meaning. Will be included in the payload verbatim. May be used to track mutations by the client.",
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "rowId",
              "description": null,
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                }
              },
              "defaultValue": null
            },
            {
              "name": "personPatch",
              "description": "An object where the defined keys will be set on the `Person` identified by our unique key.",
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "INPUT_OBJECT",
                  "name": "PersonPatch",
                  "ofType": null
                }
              },
              "defaultValue": null
            }
          ],
          "interfaces": null,
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "INPUT_OBJECT",
          "name": "DeletePersonInput",
          "description": "All input for the `deletePerson` mutation.",
          "fields": null,
          "inputFields": [
            {
              "name": "clientMutationId",
              "description": "An arbitrary string value with no semantic meaning. Will be included in the payload verbatim. May be used to track mutations by the client.",
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "id",
              "description": "The globally unique `ID` which will identify a single `Person` to be deleted.",
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "ID",
                  "ofType": null
                }
              },
              "defaultValue": null
            }
          ],
          "interfaces": null,
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "OBJECT",
          "name": "DeletePersonPayload",
          "description": "The output of our `deletePerson` mutation.",
          "fields": [
            {
              "name": "clientMutationId",
              "description": "The exact same `clientMutationId` that was provided in the mutation input, unchanged and unused. May be used by a client to track mutations.",
              "args": [],
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "person",
              "description": null,
              "args": [],
              "type": {
                "kind": "OBJECT",
                "name": "Person",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "deletedPersonId",
              "description": null,
              "args": [],
              "type": {
                "kind": "SCALAR",
                "name": "ID",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "employeeByCreatedBy",
              "description": "Reads a single `Employee` that is related to this `Person`.",
              "args": [],
              "type": {
                "kind": "OBJECT",
                "name": "Employee",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "employeeByModifiedBy",
              "description": "Reads a single `Employee` that is related to this `Person`.",
              "args": [],
              "type": {
                "kind": "OBJECT",
                "name": "Employee",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "query",
              "description": "Our root query field type. Allows us to run any query from our mutation payload.",
              "args": [],
              "type": {
                "kind": "OBJECT",
                "name": "Query",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            }
          ],
          "inputFields": null,
          "interfaces": [],
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "INPUT_OBJECT",
          "name": "DeletePersonByRowIdInput",
          "description": "All input for the `deletePersonByRowId` mutation.",
          "fields": null,
          "inputFields": [
            {
              "name": "clientMutationId",
              "description": "An arbitrary string value with no semantic meaning. Will be included in the payload verbatim. May be used to track mutations by the client.",
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "rowId",
              "description": null,
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                }
              },
              "defaultValue": null
            }
          ],
          "interfaces": null,
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "INPUT_OBJECT",
          "name": "CreateRecruitInput",
          "description": "All input for the `createRecruit` mutation.",
          "fields": null,
          "inputFields": [
            {
              "name": "clientMutationId",
              "description": "An arbitrary string value with no semantic meaning. Will be included in the payload verbatim. May be used to track mutations by the client.",
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "recruit",
              "description": "The `Recruit` to be created by this mutation.",
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "INPUT_OBJECT",
                  "name": "RecruitInput",
                  "ofType": null
                }
              },
              "defaultValue": null
            }
          ],
          "interfaces": null,
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "INPUT_OBJECT",
          "name": "RecruitInput",
          "description": null,
          "fields": null,
          "inputFields": [
            {
              "name": "rowId",
              "description": null,
              "type": {
                "kind": "SCALAR",
                "name": "Int",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "lastName",
              "description": null,
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              },
              "defaultValue": null
            },
            {
              "name": "firstName",
              "description": null,
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              },
              "defaultValue": null
            },
            {
              "name": "middleName",
              "description": null,
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "suffixName",
              "description": null,
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "address1",
              "description": null,
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "address2",
              "description": null,
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "city",
              "description": null,
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "state",
              "description": null,
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "county",
              "description": null,
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "country",
              "description": null,
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "citizenship",
              "description": null,
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "gender",
              "description": null,
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "ethnic",
              "description": null,
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "race",
              "description": null,
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "maritalStatus",
              "description": null,
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "dependents",
              "description": null,
              "type": {
                "kind": "SCALAR",
                "name": "Int",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "religion",
              "description": null,
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "education",
              "description": null,
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "foreignLanguage",
              "description": null,
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "driversLicense",
              "description": null,
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "driversLicenseExp",
              "description": null,
              "type": {
                "kind": "SCALAR",
                "name": "Date",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "personId",
              "description": null,
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                }
              },
              "defaultValue": null
            },
            {
              "name": "recruiterId",
              "description": null,
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                }
              },
              "defaultValue": null
            },
            {
              "name": "mepsId",
              "description": null,
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                }
              },
              "defaultValue": null
            },
            {
              "name": "asvabReq",
              "description": null,
              "type": {
                "kind": "SCALAR",
                "name": "Boolean",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "lastHighSchool",
              "description": null,
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "medicalReq",
              "description": null,
              "type": {
                "kind": "SCALAR",
                "name": "Boolean",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "medicalInsurance",
              "description": null,
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "created",
              "description": null,
              "type": {
                "kind": "SCALAR",
                "name": "Datetime",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "modified",
              "description": null,
              "type": {
                "kind": "SCALAR",
                "name": "Datetime",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "closed",
              "description": null,
              "type": {
                "kind": "SCALAR",
                "name": "Datetime",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "validUntil",
              "description": null,
              "type": {
                "kind": "SCALAR",
                "name": "Datetime",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "createdBy",
              "description": null,
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                }
              },
              "defaultValue": null
            },
            {
              "name": "modifiedBy",
              "description": null,
              "type": {
                "kind": "SCALAR",
                "name": "Int",
                "ofType": null
              },
              "defaultValue": null
            }
          ],
          "interfaces": null,
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "OBJECT",
          "name": "CreateRecruitPayload",
          "description": "The output of our `createRecruit` mutation.",
          "fields": [
            {
              "name": "clientMutationId",
              "description": "The exact same `clientMutationId` that was provided in the mutation input, unchanged and unused. May be used by a client to track mutations.",
              "args": [],
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "recruit",
              "description": "The `Recruit` that was created by this mutation.",
              "args": [],
              "type": {
                "kind": "OBJECT",
                "name": "Recruit",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "recruitEdge",
              "description": "An edge for our `Recruit`. May be used by Relay 1.",
              "args": [
                {
                  "name": "orderBy",
                  "description": "The method to use when ordering `Recruit`.",
                  "type": {
                    "kind": "ENUM",
                    "name": "RecruitsOrderBy",
                    "ofType": null
                  },
                  "defaultValue": "PRIMARY_KEY_ASC"
                }
              ],
              "type": {
                "kind": "OBJECT",
                "name": "RecruitsEdge",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "employeeByCreatedBy",
              "description": "Reads a single `Employee` that is related to this `Recruit`.",
              "args": [],
              "type": {
                "kind": "OBJECT",
                "name": "Employee",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "employeeByModifiedBy",
              "description": "Reads a single `Employee` that is related to this `Recruit`.",
              "args": [],
              "type": {
                "kind": "OBJECT",
                "name": "Employee",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "mepByMepsId",
              "description": "Reads a single `Mep` that is related to this `Recruit`.",
              "args": [],
              "type": {
                "kind": "OBJECT",
                "name": "Mep",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "recruiterByRecruiterId",
              "description": "Reads a single `Recruiter` that is related to this `Recruit`.",
              "args": [],
              "type": {
                "kind": "OBJECT",
                "name": "Recruiter",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "personByPersonId",
              "description": "Reads a single `Person` that is related to this `Recruit`.",
              "args": [],
              "type": {
                "kind": "OBJECT",
                "name": "Person",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "query",
              "description": "Our root query field type. Allows us to run any query from our mutation payload.",
              "args": [],
              "type": {
                "kind": "OBJECT",
                "name": "Query",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            }
          ],
          "inputFields": null,
          "interfaces": [],
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "INPUT_OBJECT",
          "name": "UpdateRecruitInput",
          "description": "All input for the `updateRecruit` mutation.",
          "fields": null,
          "inputFields": [
            {
              "name": "clientMutationId",
              "description": "An arbitrary string value with no semantic meaning. Will be included in the payload verbatim. May be used to track mutations by the client.",
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "id",
              "description": "The globally unique `ID` which will identify a single `Recruit` to be updated.",
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "ID",
                  "ofType": null
                }
              },
              "defaultValue": null
            },
            {
              "name": "recruitPatch",
              "description": "An object where the defined keys will be set on the `Recruit` identified by our globally unique `ID`.",
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "INPUT_OBJECT",
                  "name": "RecruitPatch",
                  "ofType": null
                }
              },
              "defaultValue": null
            }
          ],
          "interfaces": null,
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "INPUT_OBJECT",
          "name": "RecruitPatch",
          "description": "Represents an update to a `Recruit`. Fields that are set will be updated.",
          "fields": null,
          "inputFields": [
            {
              "name": "rowId",
              "description": null,
              "type": {
                "kind": "SCALAR",
                "name": "Int",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "lastName",
              "description": null,
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "firstName",
              "description": null,
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "middleName",
              "description": null,
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "suffixName",
              "description": null,
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "address1",
              "description": null,
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "address2",
              "description": null,
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "city",
              "description": null,
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "state",
              "description": null,
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "county",
              "description": null,
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "country",
              "description": null,
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "citizenship",
              "description": null,
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "gender",
              "description": null,
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "ethnic",
              "description": null,
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "race",
              "description": null,
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "maritalStatus",
              "description": null,
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "dependents",
              "description": null,
              "type": {
                "kind": "SCALAR",
                "name": "Int",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "religion",
              "description": null,
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "education",
              "description": null,
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "foreignLanguage",
              "description": null,
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "driversLicense",
              "description": null,
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "driversLicenseExp",
              "description": null,
              "type": {
                "kind": "SCALAR",
                "name": "Date",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "personId",
              "description": null,
              "type": {
                "kind": "SCALAR",
                "name": "Int",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "recruiterId",
              "description": null,
              "type": {
                "kind": "SCALAR",
                "name": "Int",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "mepsId",
              "description": null,
              "type": {
                "kind": "SCALAR",
                "name": "Int",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "asvabReq",
              "description": null,
              "type": {
                "kind": "SCALAR",
                "name": "Boolean",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "lastHighSchool",
              "description": null,
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "medicalReq",
              "description": null,
              "type": {
                "kind": "SCALAR",
                "name": "Boolean",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "medicalInsurance",
              "description": null,
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "created",
              "description": null,
              "type": {
                "kind": "SCALAR",
                "name": "Datetime",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "modified",
              "description": null,
              "type": {
                "kind": "SCALAR",
                "name": "Datetime",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "closed",
              "description": null,
              "type": {
                "kind": "SCALAR",
                "name": "Datetime",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "validUntil",
              "description": null,
              "type": {
                "kind": "SCALAR",
                "name": "Datetime",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "createdBy",
              "description": null,
              "type": {
                "kind": "SCALAR",
                "name": "Int",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "modifiedBy",
              "description": null,
              "type": {
                "kind": "SCALAR",
                "name": "Int",
                "ofType": null
              },
              "defaultValue": null
            }
          ],
          "interfaces": null,
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "OBJECT",
          "name": "UpdateRecruitPayload",
          "description": "The output of our `updateRecruit` mutation.",
          "fields": [
            {
              "name": "clientMutationId",
              "description": "The exact same `clientMutationId` that was provided in the mutation input, unchanged and unused. May be used by a client to track mutations.",
              "args": [],
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "recruit",
              "description": null,
              "args": [],
              "type": {
                "kind": "OBJECT",
                "name": "Recruit",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "employeeByCreatedBy",
              "description": "Reads a single `Employee` that is related to this `Recruit`.",
              "args": [],
              "type": {
                "kind": "OBJECT",
                "name": "Employee",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "employeeByModifiedBy",
              "description": "Reads a single `Employee` that is related to this `Recruit`.",
              "args": [],
              "type": {
                "kind": "OBJECT",
                "name": "Employee",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "mepByMepsId",
              "description": "Reads a single `Mep` that is related to this `Recruit`.",
              "args": [],
              "type": {
                "kind": "OBJECT",
                "name": "Mep",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "recruiterByRecruiterId",
              "description": "Reads a single `Recruiter` that is related to this `Recruit`.",
              "args": [],
              "type": {
                "kind": "OBJECT",
                "name": "Recruiter",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "personByPersonId",
              "description": "Reads a single `Person` that is related to this `Recruit`.",
              "args": [],
              "type": {
                "kind": "OBJECT",
                "name": "Person",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "query",
              "description": "Our root query field type. Allows us to run any query from our mutation payload.",
              "args": [],
              "type": {
                "kind": "OBJECT",
                "name": "Query",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            }
          ],
          "inputFields": null,
          "interfaces": [],
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "INPUT_OBJECT",
          "name": "UpdateRecruitByRowIdInput",
          "description": "All input for the `updateRecruitByRowId` mutation.",
          "fields": null,
          "inputFields": [
            {
              "name": "clientMutationId",
              "description": "An arbitrary string value with no semantic meaning. Will be included in the payload verbatim. May be used to track mutations by the client.",
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "rowId",
              "description": null,
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                }
              },
              "defaultValue": null
            },
            {
              "name": "recruitPatch",
              "description": "An object where the defined keys will be set on the `Recruit` identified by our unique key.",
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "INPUT_OBJECT",
                  "name": "RecruitPatch",
                  "ofType": null
                }
              },
              "defaultValue": null
            }
          ],
          "interfaces": null,
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "INPUT_OBJECT",
          "name": "DeleteRecruitInput",
          "description": "All input for the `deleteRecruit` mutation.",
          "fields": null,
          "inputFields": [
            {
              "name": "clientMutationId",
              "description": "An arbitrary string value with no semantic meaning. Will be included in the payload verbatim. May be used to track mutations by the client.",
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "id",
              "description": "The globally unique `ID` which will identify a single `Recruit` to be deleted.",
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "ID",
                  "ofType": null
                }
              },
              "defaultValue": null
            }
          ],
          "interfaces": null,
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "OBJECT",
          "name": "DeleteRecruitPayload",
          "description": "The output of our `deleteRecruit` mutation.",
          "fields": [
            {
              "name": "clientMutationId",
              "description": "The exact same `clientMutationId` that was provided in the mutation input, unchanged and unused. May be used by a client to track mutations.",
              "args": [],
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "recruit",
              "description": null,
              "args": [],
              "type": {
                "kind": "OBJECT",
                "name": "Recruit",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "deletedRecruitId",
              "description": null,
              "args": [],
              "type": {
                "kind": "SCALAR",
                "name": "ID",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "employeeByCreatedBy",
              "description": "Reads a single `Employee` that is related to this `Recruit`.",
              "args": [],
              "type": {
                "kind": "OBJECT",
                "name": "Employee",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "employeeByModifiedBy",
              "description": "Reads a single `Employee` that is related to this `Recruit`.",
              "args": [],
              "type": {
                "kind": "OBJECT",
                "name": "Employee",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "mepByMepsId",
              "description": "Reads a single `Mep` that is related to this `Recruit`.",
              "args": [],
              "type": {
                "kind": "OBJECT",
                "name": "Mep",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "recruiterByRecruiterId",
              "description": "Reads a single `Recruiter` that is related to this `Recruit`.",
              "args": [],
              "type": {
                "kind": "OBJECT",
                "name": "Recruiter",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "personByPersonId",
              "description": "Reads a single `Person` that is related to this `Recruit`.",
              "args": [],
              "type": {
                "kind": "OBJECT",
                "name": "Person",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "query",
              "description": "Our root query field type. Allows us to run any query from our mutation payload.",
              "args": [],
              "type": {
                "kind": "OBJECT",
                "name": "Query",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            }
          ],
          "inputFields": null,
          "interfaces": [],
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "INPUT_OBJECT",
          "name": "DeleteRecruitByRowIdInput",
          "description": "All input for the `deleteRecruitByRowId` mutation.",
          "fields": null,
          "inputFields": [
            {
              "name": "clientMutationId",
              "description": "An arbitrary string value with no semantic meaning. Will be included in the payload verbatim. May be used to track mutations by the client.",
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "rowId",
              "description": null,
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                }
              },
              "defaultValue": null
            }
          ],
          "interfaces": null,
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "INPUT_OBJECT",
          "name": "CreateRecruiterInput",
          "description": "All input for the `createRecruiter` mutation.",
          "fields": null,
          "inputFields": [
            {
              "name": "clientMutationId",
              "description": "An arbitrary string value with no semantic meaning. Will be included in the payload verbatim. May be used to track mutations by the client.",
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "recruiter",
              "description": "The `Recruiter` to be created by this mutation.",
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "INPUT_OBJECT",
                  "name": "RecruiterInput",
                  "ofType": null
                }
              },
              "defaultValue": null
            }
          ],
          "interfaces": null,
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "INPUT_OBJECT",
          "name": "RecruiterInput",
          "description": null,
          "fields": null,
          "inputFields": [
            {
              "name": "rowId",
              "description": null,
              "type": {
                "kind": "SCALAR",
                "name": "Int",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "lastName",
              "description": null,
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              },
              "defaultValue": null
            },
            {
              "name": "firstName",
              "description": null,
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              },
              "defaultValue": null
            },
            {
              "name": "created",
              "description": null,
              "type": {
                "kind": "SCALAR",
                "name": "Datetime",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "modified",
              "description": null,
              "type": {
                "kind": "SCALAR",
                "name": "Datetime",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "validUntil",
              "description": null,
              "type": {
                "kind": "SCALAR",
                "name": "Datetime",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "createdBy",
              "description": null,
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                }
              },
              "defaultValue": null
            },
            {
              "name": "modifiedBy",
              "description": null,
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                }
              },
              "defaultValue": null
            }
          ],
          "interfaces": null,
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "OBJECT",
          "name": "CreateRecruiterPayload",
          "description": "The output of our `createRecruiter` mutation.",
          "fields": [
            {
              "name": "clientMutationId",
              "description": "The exact same `clientMutationId` that was provided in the mutation input, unchanged and unused. May be used by a client to track mutations.",
              "args": [],
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "recruiter",
              "description": "The `Recruiter` that was created by this mutation.",
              "args": [],
              "type": {
                "kind": "OBJECT",
                "name": "Recruiter",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "recruiterEdge",
              "description": "An edge for our `Recruiter`. May be used by Relay 1.",
              "args": [
                {
                  "name": "orderBy",
                  "description": "The method to use when ordering `Recruiter`.",
                  "type": {
                    "kind": "ENUM",
                    "name": "RecruitersOrderBy",
                    "ofType": null
                  },
                  "defaultValue": "PRIMARY_KEY_ASC"
                }
              ],
              "type": {
                "kind": "OBJECT",
                "name": "RecruitersEdge",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "employeeByCreatedBy",
              "description": "Reads a single `Employee` that is related to this `Recruiter`.",
              "args": [],
              "type": {
                "kind": "OBJECT",
                "name": "Employee",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "employeeByModifiedBy",
              "description": "Reads a single `Employee` that is related to this `Recruiter`.",
              "args": [],
              "type": {
                "kind": "OBJECT",
                "name": "Employee",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "query",
              "description": "Our root query field type. Allows us to run any query from our mutation payload.",
              "args": [],
              "type": {
                "kind": "OBJECT",
                "name": "Query",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            }
          ],
          "inputFields": null,
          "interfaces": [],
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "INPUT_OBJECT",
          "name": "UpdateRecruiterInput",
          "description": "All input for the `updateRecruiter` mutation.",
          "fields": null,
          "inputFields": [
            {
              "name": "clientMutationId",
              "description": "An arbitrary string value with no semantic meaning. Will be included in the payload verbatim. May be used to track mutations by the client.",
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "id",
              "description": "The globally unique `ID` which will identify a single `Recruiter` to be updated.",
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "ID",
                  "ofType": null
                }
              },
              "defaultValue": null
            },
            {
              "name": "recruiterPatch",
              "description": "An object where the defined keys will be set on the `Recruiter` identified by our globally unique `ID`.",
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "INPUT_OBJECT",
                  "name": "RecruiterPatch",
                  "ofType": null
                }
              },
              "defaultValue": null
            }
          ],
          "interfaces": null,
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "INPUT_OBJECT",
          "name": "RecruiterPatch",
          "description": "Represents an update to a `Recruiter`. Fields that are set will be updated.",
          "fields": null,
          "inputFields": [
            {
              "name": "rowId",
              "description": null,
              "type": {
                "kind": "SCALAR",
                "name": "Int",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "lastName",
              "description": null,
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "firstName",
              "description": null,
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "created",
              "description": null,
              "type": {
                "kind": "SCALAR",
                "name": "Datetime",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "modified",
              "description": null,
              "type": {
                "kind": "SCALAR",
                "name": "Datetime",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "validUntil",
              "description": null,
              "type": {
                "kind": "SCALAR",
                "name": "Datetime",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "createdBy",
              "description": null,
              "type": {
                "kind": "SCALAR",
                "name": "Int",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "modifiedBy",
              "description": null,
              "type": {
                "kind": "SCALAR",
                "name": "Int",
                "ofType": null
              },
              "defaultValue": null
            }
          ],
          "interfaces": null,
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "OBJECT",
          "name": "UpdateRecruiterPayload",
          "description": "The output of our `updateRecruiter` mutation.",
          "fields": [
            {
              "name": "clientMutationId",
              "description": "The exact same `clientMutationId` that was provided in the mutation input, unchanged and unused. May be used by a client to track mutations.",
              "args": [],
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "recruiter",
              "description": null,
              "args": [],
              "type": {
                "kind": "OBJECT",
                "name": "Recruiter",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "employeeByCreatedBy",
              "description": "Reads a single `Employee` that is related to this `Recruiter`.",
              "args": [],
              "type": {
                "kind": "OBJECT",
                "name": "Employee",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "employeeByModifiedBy",
              "description": "Reads a single `Employee` that is related to this `Recruiter`.",
              "args": [],
              "type": {
                "kind": "OBJECT",
                "name": "Employee",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "query",
              "description": "Our root query field type. Allows us to run any query from our mutation payload.",
              "args": [],
              "type": {
                "kind": "OBJECT",
                "name": "Query",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            }
          ],
          "inputFields": null,
          "interfaces": [],
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "INPUT_OBJECT",
          "name": "UpdateRecruiterByRowIdInput",
          "description": "All input for the `updateRecruiterByRowId` mutation.",
          "fields": null,
          "inputFields": [
            {
              "name": "clientMutationId",
              "description": "An arbitrary string value with no semantic meaning. Will be included in the payload verbatim. May be used to track mutations by the client.",
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "rowId",
              "description": null,
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                }
              },
              "defaultValue": null
            },
            {
              "name": "recruiterPatch",
              "description": "An object where the defined keys will be set on the `Recruiter` identified by our unique key.",
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "INPUT_OBJECT",
                  "name": "RecruiterPatch",
                  "ofType": null
                }
              },
              "defaultValue": null
            }
          ],
          "interfaces": null,
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "INPUT_OBJECT",
          "name": "DeleteRecruiterInput",
          "description": "All input for the `deleteRecruiter` mutation.",
          "fields": null,
          "inputFields": [
            {
              "name": "clientMutationId",
              "description": "An arbitrary string value with no semantic meaning. Will be included in the payload verbatim. May be used to track mutations by the client.",
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "id",
              "description": "The globally unique `ID` which will identify a single `Recruiter` to be deleted.",
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "ID",
                  "ofType": null
                }
              },
              "defaultValue": null
            }
          ],
          "interfaces": null,
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "OBJECT",
          "name": "DeleteRecruiterPayload",
          "description": "The output of our `deleteRecruiter` mutation.",
          "fields": [
            {
              "name": "clientMutationId",
              "description": "The exact same `clientMutationId` that was provided in the mutation input, unchanged and unused. May be used by a client to track mutations.",
              "args": [],
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "recruiter",
              "description": null,
              "args": [],
              "type": {
                "kind": "OBJECT",
                "name": "Recruiter",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "deletedRecruiterId",
              "description": null,
              "args": [],
              "type": {
                "kind": "SCALAR",
                "name": "ID",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "employeeByCreatedBy",
              "description": "Reads a single `Employee` that is related to this `Recruiter`.",
              "args": [],
              "type": {
                "kind": "OBJECT",
                "name": "Employee",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "employeeByModifiedBy",
              "description": "Reads a single `Employee` that is related to this `Recruiter`.",
              "args": [],
              "type": {
                "kind": "OBJECT",
                "name": "Employee",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "query",
              "description": "Our root query field type. Allows us to run any query from our mutation payload.",
              "args": [],
              "type": {
                "kind": "OBJECT",
                "name": "Query",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            }
          ],
          "inputFields": null,
          "interfaces": [],
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "INPUT_OBJECT",
          "name": "DeleteRecruiterByRowIdInput",
          "description": "All input for the `deleteRecruiterByRowId` mutation.",
          "fields": null,
          "inputFields": [
            {
              "name": "clientMutationId",
              "description": "An arbitrary string value with no semantic meaning. Will be included in the payload verbatim. May be used to track mutations by the client.",
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "rowId",
              "description": null,
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                }
              },
              "defaultValue": null
            }
          ],
          "interfaces": null,
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "INPUT_OBJECT",
          "name": "CreateTestInput",
          "description": "All input for the `createTest` mutation.",
          "fields": null,
          "inputFields": [
            {
              "name": "clientMutationId",
              "description": "An arbitrary string value with no semantic meaning. Will be included in the payload verbatim. May be used to track mutations by the client.",
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "test",
              "description": "The `Test` to be created by this mutation.",
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "INPUT_OBJECT",
                  "name": "TestInput",
                  "ofType": null
                }
              },
              "defaultValue": null
            }
          ],
          "interfaces": null,
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "INPUT_OBJECT",
          "name": "TestInput",
          "description": null,
          "fields": null,
          "inputFields": [
            {
              "name": "recruitId",
              "description": null,
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                }
              },
              "defaultValue": null
            },
            {
              "name": "testType",
              "description": null,
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              },
              "defaultValue": null
            },
            {
              "name": "score",
              "description": null,
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "Json",
                  "ofType": null
                }
              },
              "defaultValue": null
            },
            {
              "name": "created",
              "description": null,
              "type": {
                "kind": "SCALAR",
                "name": "Datetime",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "modified",
              "description": null,
              "type": {
                "kind": "SCALAR",
                "name": "Datetime",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "closed",
              "description": null,
              "type": {
                "kind": "SCALAR",
                "name": "Datetime",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "validUntil",
              "description": null,
              "type": {
                "kind": "SCALAR",
                "name": "Datetime",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "createdBy",
              "description": null,
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                }
              },
              "defaultValue": null
            },
            {
              "name": "modifiedBy",
              "description": null,
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                }
              },
              "defaultValue": null
            },
            {
              "name": "closedBy",
              "description": null,
              "type": {
                "kind": "SCALAR",
                "name": "Int",
                "ofType": null
              },
              "defaultValue": null
            }
          ],
          "interfaces": null,
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "OBJECT",
          "name": "CreateTestPayload",
          "description": "The output of our `createTest` mutation.",
          "fields": [
            {
              "name": "clientMutationId",
              "description": "The exact same `clientMutationId` that was provided in the mutation input, unchanged and unused. May be used by a client to track mutations.",
              "args": [],
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "test",
              "description": "The `Test` that was created by this mutation.",
              "args": [],
              "type": {
                "kind": "OBJECT",
                "name": "Test",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "testEdge",
              "description": "An edge for our `Test`. May be used by Relay 1.",
              "args": [
                {
                  "name": "orderBy",
                  "description": "The method to use when ordering `Test`.",
                  "type": {
                    "kind": "ENUM",
                    "name": "TestsOrderBy",
                    "ofType": null
                  },
                  "defaultValue": "PRIMARY_KEY_ASC"
                }
              ],
              "type": {
                "kind": "OBJECT",
                "name": "TestsEdge",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "recruitByRecruitId",
              "description": "Reads a single `Recruit` that is related to this `Test`.",
              "args": [],
              "type": {
                "kind": "OBJECT",
                "name": "Recruit",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "employeeByCreatedBy",
              "description": "Reads a single `Employee` that is related to this `Test`.",
              "args": [],
              "type": {
                "kind": "OBJECT",
                "name": "Employee",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "employeeByModifiedBy",
              "description": "Reads a single `Employee` that is related to this `Test`.",
              "args": [],
              "type": {
                "kind": "OBJECT",
                "name": "Employee",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "employeeByClosedBy",
              "description": "Reads a single `Employee` that is related to this `Test`.",
              "args": [],
              "type": {
                "kind": "OBJECT",
                "name": "Employee",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "query",
              "description": "Our root query field type. Allows us to run any query from our mutation payload.",
              "args": [],
              "type": {
                "kind": "OBJECT",
                "name": "Query",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            }
          ],
          "inputFields": null,
          "interfaces": [],
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "INPUT_OBJECT",
          "name": "UpdateTestInput",
          "description": "All input for the `updateTest` mutation.",
          "fields": null,
          "inputFields": [
            {
              "name": "clientMutationId",
              "description": "An arbitrary string value with no semantic meaning. Will be included in the payload verbatim. May be used to track mutations by the client.",
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "id",
              "description": "The globally unique `ID` which will identify a single `Test` to be updated.",
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "ID",
                  "ofType": null
                }
              },
              "defaultValue": null
            },
            {
              "name": "testPatch",
              "description": "An object where the defined keys will be set on the `Test` identified by our globally unique `ID`.",
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "INPUT_OBJECT",
                  "name": "TestPatch",
                  "ofType": null
                }
              },
              "defaultValue": null
            }
          ],
          "interfaces": null,
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "INPUT_OBJECT",
          "name": "TestPatch",
          "description": "Represents an update to a `Test`. Fields that are set will be updated.",
          "fields": null,
          "inputFields": [
            {
              "name": "recruitId",
              "description": null,
              "type": {
                "kind": "SCALAR",
                "name": "Int",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "testType",
              "description": null,
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "score",
              "description": null,
              "type": {
                "kind": "SCALAR",
                "name": "Json",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "created",
              "description": null,
              "type": {
                "kind": "SCALAR",
                "name": "Datetime",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "modified",
              "description": null,
              "type": {
                "kind": "SCALAR",
                "name": "Datetime",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "closed",
              "description": null,
              "type": {
                "kind": "SCALAR",
                "name": "Datetime",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "validUntil",
              "description": null,
              "type": {
                "kind": "SCALAR",
                "name": "Datetime",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "createdBy",
              "description": null,
              "type": {
                "kind": "SCALAR",
                "name": "Int",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "modifiedBy",
              "description": null,
              "type": {
                "kind": "SCALAR",
                "name": "Int",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "closedBy",
              "description": null,
              "type": {
                "kind": "SCALAR",
                "name": "Int",
                "ofType": null
              },
              "defaultValue": null
            }
          ],
          "interfaces": null,
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "OBJECT",
          "name": "UpdateTestPayload",
          "description": "The output of our `updateTest` mutation.",
          "fields": [
            {
              "name": "clientMutationId",
              "description": "The exact same `clientMutationId` that was provided in the mutation input, unchanged and unused. May be used by a client to track mutations.",
              "args": [],
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "test",
              "description": null,
              "args": [],
              "type": {
                "kind": "OBJECT",
                "name": "Test",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "recruitByRecruitId",
              "description": "Reads a single `Recruit` that is related to this `Test`.",
              "args": [],
              "type": {
                "kind": "OBJECT",
                "name": "Recruit",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "employeeByCreatedBy",
              "description": "Reads a single `Employee` that is related to this `Test`.",
              "args": [],
              "type": {
                "kind": "OBJECT",
                "name": "Employee",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "employeeByModifiedBy",
              "description": "Reads a single `Employee` that is related to this `Test`.",
              "args": [],
              "type": {
                "kind": "OBJECT",
                "name": "Employee",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "employeeByClosedBy",
              "description": "Reads a single `Employee` that is related to this `Test`.",
              "args": [],
              "type": {
                "kind": "OBJECT",
                "name": "Employee",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "query",
              "description": "Our root query field type. Allows us to run any query from our mutation payload.",
              "args": [],
              "type": {
                "kind": "OBJECT",
                "name": "Query",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            }
          ],
          "inputFields": null,
          "interfaces": [],
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "INPUT_OBJECT",
          "name": "UpdateTestByRecruitIdInput",
          "description": "All input for the `updateTestByRecruitId` mutation.",
          "fields": null,
          "inputFields": [
            {
              "name": "clientMutationId",
              "description": "An arbitrary string value with no semantic meaning. Will be included in the payload verbatim. May be used to track mutations by the client.",
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "recruitId",
              "description": null,
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                }
              },
              "defaultValue": null
            },
            {
              "name": "testPatch",
              "description": "An object where the defined keys will be set on the `Test` identified by our unique key.",
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "INPUT_OBJECT",
                  "name": "TestPatch",
                  "ofType": null
                }
              },
              "defaultValue": null
            }
          ],
          "interfaces": null,
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "INPUT_OBJECT",
          "name": "DeleteTestInput",
          "description": "All input for the `deleteTest` mutation.",
          "fields": null,
          "inputFields": [
            {
              "name": "clientMutationId",
              "description": "An arbitrary string value with no semantic meaning. Will be included in the payload verbatim. May be used to track mutations by the client.",
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "id",
              "description": "The globally unique `ID` which will identify a single `Test` to be deleted.",
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "ID",
                  "ofType": null
                }
              },
              "defaultValue": null
            }
          ],
          "interfaces": null,
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "OBJECT",
          "name": "DeleteTestPayload",
          "description": "The output of our `deleteTest` mutation.",
          "fields": [
            {
              "name": "clientMutationId",
              "description": "The exact same `clientMutationId` that was provided in the mutation input, unchanged and unused. May be used by a client to track mutations.",
              "args": [],
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "test",
              "description": null,
              "args": [],
              "type": {
                "kind": "OBJECT",
                "name": "Test",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "deletedTestId",
              "description": null,
              "args": [],
              "type": {
                "kind": "SCALAR",
                "name": "ID",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "recruitByRecruitId",
              "description": "Reads a single `Recruit` that is related to this `Test`.",
              "args": [],
              "type": {
                "kind": "OBJECT",
                "name": "Recruit",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "employeeByCreatedBy",
              "description": "Reads a single `Employee` that is related to this `Test`.",
              "args": [],
              "type": {
                "kind": "OBJECT",
                "name": "Employee",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "employeeByModifiedBy",
              "description": "Reads a single `Employee` that is related to this `Test`.",
              "args": [],
              "type": {
                "kind": "OBJECT",
                "name": "Employee",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "employeeByClosedBy",
              "description": "Reads a single `Employee` that is related to this `Test`.",
              "args": [],
              "type": {
                "kind": "OBJECT",
                "name": "Employee",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "query",
              "description": "Our root query field type. Allows us to run any query from our mutation payload.",
              "args": [],
              "type": {
                "kind": "OBJECT",
                "name": "Query",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            }
          ],
          "inputFields": null,
          "interfaces": [],
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "INPUT_OBJECT",
          "name": "DeleteTestByRecruitIdInput",
          "description": "All input for the `deleteTestByRecruitId` mutation.",
          "fields": null,
          "inputFields": [
            {
              "name": "clientMutationId",
              "description": "An arbitrary string value with no semantic meaning. Will be included in the payload verbatim. May be used to track mutations by the client.",
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "recruitId",
              "description": null,
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                }
              },
              "defaultValue": null
            }
          ],
          "interfaces": null,
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "OBJECT",
          "name": "__Schema",
          "description": "A GraphQL Schema defines the capabilities of a GraphQL server. It exposes all available types and directives on the server, as well as the entry points for query, mutation, and subscription operations.",
          "fields": [
            {
              "name": "types",
              "description": "A list of all types supported by this server.",
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "LIST",
                  "name": null,
                  "ofType": {
                    "kind": "NON_NULL",
                    "name": null,
                    "ofType": {
                      "kind": "OBJECT",
                      "name": "__Type",
                      "ofType": null
                    }
                  }
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "queryType",
              "description": "The type that query operations will be rooted at.",
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "OBJECT",
                  "name": "__Type",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "mutationType",
              "description": "If this server supports mutation, the type that mutation operations will be rooted at.",
              "args": [],
              "type": {
                "kind": "OBJECT",
                "name": "__Type",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "subscriptionType",
              "description": "If this server support subscription, the type that subscription operations will be rooted at.",
              "args": [],
              "type": {
                "kind": "OBJECT",
                "name": "__Type",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "directives",
              "description": "A list of all directives supported by this server.",
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "LIST",
                  "name": null,
                  "ofType": {
                    "kind": "NON_NULL",
                    "name": null,
                    "ofType": {
                      "kind": "OBJECT",
                      "name": "__Directive",
                      "ofType": null
                    }
                  }
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            }
          ],
          "inputFields": null,
          "interfaces": [],
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "OBJECT",
          "name": "__Type",
          "description": "The fundamental unit of any GraphQL Schema is the type. There are many kinds of types in GraphQL as represented by the `__TypeKind` enum.\n\nDepending on the kind of a type, certain fields describe information about that type. Scalar types provide no information beyond a name and description, while Enum types provide their values. Object and Interface types provide the fields they describe. Abstract types, Union and Interface, provide the Object types possible at runtime. List and NonNull types compose other types.",
          "fields": [
            {
              "name": "kind",
              "description": null,
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "ENUM",
                  "name": "__TypeKind",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "name",
              "description": null,
              "args": [],
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "description",
              "description": null,
              "args": [],
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "fields",
              "description": null,
              "args": [
                {
                  "name": "includeDeprecated",
                  "description": null,
                  "type": {
                    "kind": "SCALAR",
                    "name": "Boolean",
                    "ofType": null
                  },
                  "defaultValue": "false"
                }
              ],
              "type": {
                "kind": "LIST",
                "name": null,
                "ofType": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "__Field",
                    "ofType": null
                  }
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "interfaces",
              "description": null,
              "args": [],
              "type": {
                "kind": "LIST",
                "name": null,
                "ofType": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "__Type",
                    "ofType": null
                  }
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "possibleTypes",
              "description": null,
              "args": [],
              "type": {
                "kind": "LIST",
                "name": null,
                "ofType": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "__Type",
                    "ofType": null
                  }
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "enumValues",
              "description": null,
              "args": [
                {
                  "name": "includeDeprecated",
                  "description": null,
                  "type": {
                    "kind": "SCALAR",
                    "name": "Boolean",
                    "ofType": null
                  },
                  "defaultValue": "false"
                }
              ],
              "type": {
                "kind": "LIST",
                "name": null,
                "ofType": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "__EnumValue",
                    "ofType": null
                  }
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "inputFields",
              "description": null,
              "args": [],
              "type": {
                "kind": "LIST",
                "name": null,
                "ofType": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "__InputValue",
                    "ofType": null
                  }
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "ofType",
              "description": null,
              "args": [],
              "type": {
                "kind": "OBJECT",
                "name": "__Type",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            }
          ],
          "inputFields": null,
          "interfaces": [],
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "ENUM",
          "name": "__TypeKind",
          "description": "An enum describing what kind of type a given `__Type` is.",
          "fields": null,
          "inputFields": null,
          "interfaces": null,
          "enumValues": [
            {
              "name": "SCALAR",
              "description": "Indicates this type is a scalar.",
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "OBJECT",
              "description": "Indicates this type is an object. `fields` and `interfaces` are valid fields.",
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "INTERFACE",
              "description": "Indicates this type is an interface. `fields` and `possibleTypes` are valid fields.",
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "UNION",
              "description": "Indicates this type is a union. `possibleTypes` is a valid field.",
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "ENUM",
              "description": "Indicates this type is an enum. `enumValues` is a valid field.",
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "INPUT_OBJECT",
              "description": "Indicates this type is an input object. `inputFields` is a valid field.",
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "LIST",
              "description": "Indicates this type is a list. `ofType` is a valid field.",
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "NON_NULL",
              "description": "Indicates this type is a non-null. `ofType` is a valid field.",
              "isDeprecated": false,
              "deprecationReason": null
            }
          ],
          "possibleTypes": null
        },
        {
          "kind": "OBJECT",
          "name": "__Field",
          "description": "Object and Interface types are described by a list of Fields, each of which has a name, potentially a list of arguments, and a return type.",
          "fields": [
            {
              "name": "name",
              "description": null,
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "description",
              "description": null,
              "args": [],
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "args",
              "description": null,
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "LIST",
                  "name": null,
                  "ofType": {
                    "kind": "NON_NULL",
                    "name": null,
                    "ofType": {
                      "kind": "OBJECT",
                      "name": "__InputValue",
                      "ofType": null
                    }
                  }
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "type",
              "description": null,
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "OBJECT",
                  "name": "__Type",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "isDeprecated",
              "description": null,
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "Boolean",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "deprecationReason",
              "description": null,
              "args": [],
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            }
          ],
          "inputFields": null,
          "interfaces": [],
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "OBJECT",
          "name": "__InputValue",
          "description": "Arguments provided to Fields or Directives and the input fields of an InputObject are represented as Input Values which describe their type and optionally a default value.",
          "fields": [
            {
              "name": "name",
              "description": null,
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "description",
              "description": null,
              "args": [],
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "type",
              "description": null,
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "OBJECT",
                  "name": "__Type",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "defaultValue",
              "description": "A GraphQL-formatted string representing the default value for this input value.",
              "args": [],
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            }
          ],
          "inputFields": null,
          "interfaces": [],
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "OBJECT",
          "name": "__EnumValue",
          "description": "One possible value for a given Enum. Enum values are unique values, not a placeholder for a string or numeric value. However an Enum value is returned in a JSON response as a string.",
          "fields": [
            {
              "name": "name",
              "description": null,
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "description",
              "description": null,
              "args": [],
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "isDeprecated",
              "description": null,
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "Boolean",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "deprecationReason",
              "description": null,
              "args": [],
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            }
          ],
          "inputFields": null,
          "interfaces": [],
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "OBJECT",
          "name": "__Directive",
          "description": "A Directive provides a way to describe alternate runtime execution and type validation behavior in a GraphQL document.\n\nIn some cases, you need to provide options to alter GraphQL's execution behavior in ways field arguments will not suffice, such as conditionally including or skipping a field. Directives provide this by describing additional information to the executor.",
          "fields": [
            {
              "name": "name",
              "description": null,
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "description",
              "description": null,
              "args": [],
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "locations",
              "description": null,
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "LIST",
                  "name": null,
                  "ofType": {
                    "kind": "NON_NULL",
                    "name": null,
                    "ofType": {
                      "kind": "ENUM",
                      "name": "__DirectiveLocation",
                      "ofType": null
                    }
                  }
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "args",
              "description": null,
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "LIST",
                  "name": null,
                  "ofType": {
                    "kind": "NON_NULL",
                    "name": null,
                    "ofType": {
                      "kind": "OBJECT",
                      "name": "__InputValue",
                      "ofType": null
                    }
                  }
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "onOperation",
              "description": null,
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "Boolean",
                  "ofType": null
                }
              },
              "isDeprecated": true,
              "deprecationReason": "Use `locations`."
            },
            {
              "name": "onFragment",
              "description": null,
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "Boolean",
                  "ofType": null
                }
              },
              "isDeprecated": true,
              "deprecationReason": "Use `locations`."
            },
            {
              "name": "onField",
              "description": null,
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "Boolean",
                  "ofType": null
                }
              },
              "isDeprecated": true,
              "deprecationReason": "Use `locations`."
            }
          ],
          "inputFields": null,
          "interfaces": [],
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "ENUM",
          "name": "__DirectiveLocation",
          "description": "A Directive can be adjacent to many parts of the GraphQL language, a __DirectiveLocation describes one such possible adjacencies.",
          "fields": null,
          "inputFields": null,
          "interfaces": null,
          "enumValues": [
            {
              "name": "QUERY",
              "description": "Location adjacent to a query operation.",
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "MUTATION",
              "description": "Location adjacent to a mutation operation.",
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "SUBSCRIPTION",
              "description": "Location adjacent to a subscription operation.",
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "FIELD",
              "description": "Location adjacent to a field.",
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "FRAGMENT_DEFINITION",
              "description": "Location adjacent to a fragment definition.",
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "FRAGMENT_SPREAD",
              "description": "Location adjacent to a fragment spread.",
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "INLINE_FRAGMENT",
              "description": "Location adjacent to an inline fragment.",
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "SCHEMA",
              "description": "Location adjacent to a schema definition.",
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "SCALAR",
              "description": "Location adjacent to a scalar definition.",
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "OBJECT",
              "description": "Location adjacent to an object type definition.",
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "FIELD_DEFINITION",
              "description": "Location adjacent to a field definition.",
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "ARGUMENT_DEFINITION",
              "description": "Location adjacent to an argument definition.",
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "INTERFACE",
              "description": "Location adjacent to an interface definition.",
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "UNION",
              "description": "Location adjacent to a union definition.",
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "ENUM",
              "description": "Location adjacent to an enum definition.",
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "ENUM_VALUE",
              "description": "Location adjacent to an enum value definition.",
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "INPUT_OBJECT",
              "description": "Location adjacent to an input object type definition.",
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "INPUT_FIELD_DEFINITION",
              "description": "Location adjacent to an input object field definition.",
              "isDeprecated": false,
              "deprecationReason": null
            }
          ],
          "possibleTypes": null
        }
      ],
      "directives": [
        {
          "name": "include",
          "description": "Directs the executor to include this field or fragment only when the `if` argument is true.",
          "locations": [
            "FIELD",
            "FRAGMENT_SPREAD",
            "INLINE_FRAGMENT"
          ],
          "args": [
            {
              "name": "if",
              "description": "Included when true.",
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "Boolean",
                  "ofType": null
                }
              },
              "defaultValue": null
            }
          ]
        },
        {
          "name": "skip",
          "description": "Directs the executor to skip this field or fragment when the `if` argument is true.",
          "locations": [
            "FIELD",
            "FRAGMENT_SPREAD",
            "INLINE_FRAGMENT"
          ],
          "args": [
            {
              "name": "if",
              "description": "Skipped when true.",
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "Boolean",
                  "ofType": null
                }
              },
              "defaultValue": null
            }
          ]
        },
        {
          "name": "deprecated",
          "description": "Marks an element of a GraphQL schema as no longer supported.",
          "locations": [
            "FIELD_DEFINITION",
            "ENUM_VALUE"
          ],
          "args": [
            {
              "name": "reason",
              "description": "Explains why this element was deprecated, usually also including a suggestion for how to access supported similar data. Formatted in [Markdown](https://daringfireball.net/projects/markdown/).",
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "defaultValue": "\"No longer supported\""
            }
          ]
        }
      ]
    }
  }
}
