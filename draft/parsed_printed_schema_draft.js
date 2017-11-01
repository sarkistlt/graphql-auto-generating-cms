{
    "kind": "Document",
    "definitions": [
    {
        "kind": "ObjectTypeDefinition",
        "name": {
            "kind": "Name",
            "value": "category",
            "loc": {
                "start": 23,
                "end": 31
            }
        },
        "interfaces": [],
        "directives": [],
        "fields": [
            {
                "kind": "FieldDefinition",
                "name": {
                    "kind": "Name",
                    "value": "_id",
                    "loc": {
                        "start": 36,
                        "end": 39
                    }
                },
                "arguments": [],
                "type": {
                    "kind": "NamedType",
                    "name": {
                        "kind": "Name",
                        "value": "String",
                        "loc": {
                            "start": 41,
                            "end": 47
                        }
                    },
                    "loc": {
                        "start": 41,
                        "end": 47
                    }
                },
                "directives": [],
                "loc": {
                    "start": 36,
                    "end": 47
                }
            },
            {
                "kind": "FieldDefinition",
                "name": {
                    "kind": "Name",
                    "value": "name",
                    "loc": {
                        "start": 50,
                        "end": 54
                    }
                },
                "arguments": [],
                "type": {
                    "kind": "NamedType",
                    "name": {
                        "kind": "Name",
                        "value": "String",
                        "loc": {
                            "start": 56,
                            "end": 62
                        }
                    },
                    "loc": {
                        "start": 56,
                        "end": 62
                    }
                },
                "directives": [],
                "loc": {
                    "start": 50,
                    "end": 62
                }
            },
            {
                "kind": "FieldDefinition",
                "name": {
                    "kind": "Name",
                    "value": "createdAt",
                    "loc": {
                        "start": 65,
                        "end": 74
                    }
                },
                "arguments": [],
                "type": {
                    "kind": "NamedType",
                    "name": {
                        "kind": "Name",
                        "value": "String",
                        "loc": {
                            "start": 76,
                            "end": 82
                        }
                    },
                    "loc": {
                        "start": 76,
                        "end": 82
                    }
                },
                "directives": [],
                "loc": {
                    "start": 65,
                    "end": 82
                }
            },
            {
                "kind": "FieldDefinition",
                "name": {
                    "kind": "Name",
                    "value": "updatedAt",
                    "loc": {
                        "start": 85,
                        "end": 94
                    }
                },
                "arguments": [],
                "type": {
                    "kind": "NamedType",
                    "name": {
                        "kind": "Name",
                        "value": "String",
                        "loc": {
                            "start": 96,
                            "end": 102
                        }
                    },
                    "loc": {
                        "start": 96,
                        "end": 102
                    }
                },
                "directives": [],
                "loc": {
                    "start": 85,
                    "end": 102
                }
            }
        ],
        "loc": {
            "start": 18,
            "end": 104
        }
    },
    {
        "kind": "ObjectTypeDefinition",
        "name": {
            "kind": "Name",
            "value": "coupon",
            "loc": {
                "start": 127,
                "end": 133
            }
        },
        "interfaces": [],
        "directives": [],
        "fields": [
            {
                "kind": "FieldDefinition",
                "name": {
                    "kind": "Name",
                    "value": "_id",
                    "loc": {
                        "start": 138,
                        "end": 141
                    }
                },
                "arguments": [],
                "type": {
                    "kind": "NamedType",
                    "name": {
                        "kind": "Name",
                        "value": "String",
                        "loc": {
                            "start": 143,
                            "end": 149
                        }
                    },
                    "loc": {
                        "start": 143,
                        "end": 149
                    }
                },
                "directives": [],
                "loc": {
                    "start": 138,
                    "end": 149
                }
            },
            {
                "kind": "FieldDefinition",
                "name": {
                    "kind": "Name",
                    "value": "couponCode",
                    "loc": {
                        "start": 152,
                        "end": 162
                    }
                },
                "arguments": [],
                "type": {
                    "kind": "ListType",
                    "type": {
                        "kind": "NamedType",
                        "name": {
                            "kind": "Name",
                            "value": "String",
                            "loc": {
                                "start": 165,
                                "end": 171
                            }
                        },
                        "loc": {
                            "start": 165,
                            "end": 171
                        }
                    },
                    "loc": {
                        "start": 164,
                        "end": 172
                    }
                },
                "directives": [],
                "loc": {
                    "start": 152,
                    "end": 172
                }
            },
            {
                "kind": "FieldDefinition",
                "name": {
                    "kind": "Name",
                    "value": "description",
                    "loc": {
                        "start": 175,
                        "end": 186
                    }
                },
                "arguments": [],
                "type": {
                    "kind": "NamedType",
                    "name": {
                        "kind": "Name",
                        "value": "String",
                        "loc": {
                            "start": 188,
                            "end": 194
                        }
                    },
                    "loc": {
                        "start": 188,
                        "end": 194
                    }
                },
                "directives": [],
                "loc": {
                    "start": 175,
                    "end": 194
                }
            },
            {
                "kind": "FieldDefinition",
                "name": {
                    "kind": "Name",
                    "value": "discountAmount",
                    "loc": {
                        "start": 197,
                        "end": 211
                    }
                },
                "arguments": [],
                "type": {
                    "kind": "NamedType",
                    "name": {
                        "kind": "Name",
                        "value": "Int",
                        "loc": {
                            "start": 213,
                            "end": 216
                        }
                    },
                    "loc": {
                        "start": 213,
                        "end": 216
                    }
                },
                "directives": [],
                "loc": {
                    "start": 197,
                    "end": 216
                }
            },
            {
                "kind": "FieldDefinition",
                "name": {
                    "kind": "Name",
                    "value": "minimumAmount",
                    "loc": {
                        "start": 219,
                        "end": 232
                    }
                },
                "arguments": [],
                "type": {
                    "kind": "NamedType",
                    "name": {
                        "kind": "Name",
                        "value": "Int",
                        "loc": {
                            "start": 234,
                            "end": 237
                        }
                    },
                    "loc": {
                        "start": 234,
                        "end": 237
                    }
                },
                "directives": [],
                "loc": {
                    "start": 219,
                    "end": 237
                }
            },
            {
                "kind": "FieldDefinition",
                "name": {
                    "kind": "Name",
                    "value": "expirationDate",
                    "loc": {
                        "start": 240,
                        "end": 254
                    }
                },
                "arguments": [],
                "type": {
                    "kind": "NamedType",
                    "name": {
                        "kind": "Name",
                        "value": "String",
                        "loc": {
                            "start": 256,
                            "end": 262
                        }
                    },
                    "loc": {
                        "start": 256,
                        "end": 262
                    }
                },
                "directives": [],
                "loc": {
                    "start": 240,
                    "end": 262
                }
            },
            {
                "kind": "FieldDefinition",
                "name": {
                    "kind": "Name",
                    "value": "createdAt",
                    "loc": {
                        "start": 265,
                        "end": 274
                    }
                },
                "arguments": [],
                "type": {
                    "kind": "NamedType",
                    "name": {
                        "kind": "Name",
                        "value": "String",
                        "loc": {
                            "start": 276,
                            "end": 282
                        }
                    },
                    "loc": {
                        "start": 276,
                        "end": 282
                    }
                },
                "directives": [],
                "loc": {
                    "start": 265,
                    "end": 282
                }
            },
            {
                "kind": "FieldDefinition",
                "name": {
                    "kind": "Name",
                    "value": "updatedAt",
                    "loc": {
                        "start": 285,
                        "end": 294
                    }
                },
                "arguments": [],
                "type": {
                    "kind": "NamedType",
                    "name": {
                        "kind": "Name",
                        "value": "String",
                        "loc": {
                            "start": 296,
                            "end": 302
                        }
                    },
                    "loc": {
                        "start": 296,
                        "end": 302
                    }
                },
                "directives": [],
                "loc": {
                    "start": 285,
                    "end": 302
                }
            }
        ],
        "loc": {
            "start": 122,
            "end": 304
        }
    },
    {
        "kind": "ObjectTypeDefinition",
        "name": {
            "kind": "Name",
            "value": "customer",
            "loc": {
                "start": 329,
                "end": 337
            }
        },
        "interfaces": [],
        "directives": [],
        "fields": [
            {
                "kind": "FieldDefinition",
                "name": {
                    "kind": "Name",
                    "value": "_id",
                    "loc": {
                        "start": 342,
                        "end": 345
                    }
                },
                "arguments": [],
                "type": {
                    "kind": "NamedType",
                    "name": {
                        "kind": "Name",
                        "value": "String",
                        "loc": {
                            "start": 347,
                            "end": 353
                        }
                    },
                    "loc": {
                        "start": 347,
                        "end": 353
                    }
                },
                "directives": [],
                "loc": {
                    "start": 342,
                    "end": 353
                }
            },
            {
                "kind": "FieldDefinition",
                "name": {
                    "kind": "Name",
                    "value": "firstName",
                    "loc": {
                        "start": 356,
                        "end": 365
                    }
                },
                "arguments": [],
                "type": {
                    "kind": "NamedType",
                    "name": {
                        "kind": "Name",
                        "value": "String",
                        "loc": {
                            "start": 367,
                            "end": 373
                        }
                    },
                    "loc": {
                        "start": 367,
                        "end": 373
                    }
                },
                "directives": [],
                "loc": {
                    "start": 356,
                    "end": 373
                }
            },
            {
                "kind": "FieldDefinition",
                "name": {
                    "kind": "Name",
                    "value": "lastName",
                    "loc": {
                        "start": 376,
                        "end": 384
                    }
                },
                "arguments": [],
                "type": {
                    "kind": "NamedType",
                    "name": {
                        "kind": "Name",
                        "value": "String",
                        "loc": {
                            "start": 386,
                            "end": 392
                        }
                    },
                    "loc": {
                        "start": 386,
                        "end": 392
                    }
                },
                "directives": [],
                "loc": {
                    "start": 376,
                    "end": 392
                }
            },
            {
                "kind": "FieldDefinition",
                "name": {
                    "kind": "Name",
                    "value": "email",
                    "loc": {
                        "start": 395,
                        "end": 400
                    }
                },
                "arguments": [],
                "type": {
                    "kind": "NamedType",
                    "name": {
                        "kind": "Name",
                        "value": "String",
                        "loc": {
                            "start": 402,
                            "end": 408
                        }
                    },
                    "loc": {
                        "start": 402,
                        "end": 408
                    }
                },
                "directives": [],
                "loc": {
                    "start": 395,
                    "end": 408
                }
            },
            {
                "kind": "FieldDefinition",
                "name": {
                    "kind": "Name",
                    "value": "password",
                    "loc": {
                        "start": 411,
                        "end": 419
                    }
                },
                "arguments": [],
                "type": {
                    "kind": "NamedType",
                    "name": {
                        "kind": "Name",
                        "value": "String",
                        "loc": {
                            "start": 421,
                            "end": 427
                        }
                    },
                    "loc": {
                        "start": 421,
                        "end": 427
                    }
                },
                "directives": [],
                "loc": {
                    "start": 411,
                    "end": 427
                }
            },
            {
                "kind": "FieldDefinition",
                "name": {
                    "kind": "Name",
                    "value": "info",
                    "loc": {
                        "start": 430,
                        "end": 434
                    }
                },
                "arguments": [],
                "type": {
                    "kind": "NamedType",
                    "name": {
                        "kind": "Name",
                        "value": "customer_info",
                        "loc": {
                            "start": 436,
                            "end": 449
                        }
                    },
                    "loc": {
                        "start": 436,
                        "end": 449
                    }
                },
                "directives": [],
                "loc": {
                    "start": 430,
                    "end": 449
                }
            },
            {
                "kind": "FieldDefinition",
                "name": {
                    "kind": "Name",
                    "value": "createdAt",
                    "loc": {
                        "start": 452,
                        "end": 461
                    }
                },
                "arguments": [],
                "type": {
                    "kind": "NamedType",
                    "name": {
                        "kind": "Name",
                        "value": "String",
                        "loc": {
                            "start": 463,
                            "end": 469
                        }
                    },
                    "loc": {
                        "start": 463,
                        "end": 469
                    }
                },
                "directives": [],
                "loc": {
                    "start": 452,
                    "end": 469
                }
            },
            {
                "kind": "FieldDefinition",
                "name": {
                    "kind": "Name",
                    "value": "updatedAt",
                    "loc": {
                        "start": 472,
                        "end": 481
                    }
                },
                "arguments": [],
                "type": {
                    "kind": "NamedType",
                    "name": {
                        "kind": "Name",
                        "value": "String",
                        "loc": {
                            "start": 483,
                            "end": 489
                        }
                    },
                    "loc": {
                        "start": 483,
                        "end": 489
                    }
                },
                "directives": [],
                "loc": {
                    "start": 472,
                    "end": 489
                }
            }
        ],
        "loc": {
            "start": 324,
            "end": 491
        }
    },
    {
        "kind": "ObjectTypeDefinition",
        "name": {
            "kind": "Name",
            "value": "customer_info",
            "loc": {
                "start": 498,
                "end": 511
            }
        },
        "interfaces": [],
        "directives": [],
        "fields": [
            {
                "kind": "FieldDefinition",
                "name": {
                    "kind": "Name",
                    "value": "postalCode",
                    "loc": {
                        "start": 516,
                        "end": 526
                    }
                },
                "arguments": [],
                "type": {
                    "kind": "NamedType",
                    "name": {
                        "kind": "Name",
                        "value": "Int",
                        "loc": {
                            "start": 528,
                            "end": 531
                        }
                    },
                    "loc": {
                        "start": 528,
                        "end": 531
                    }
                },
                "directives": [],
                "loc": {
                    "start": 516,
                    "end": 531
                }
            },
            {
                "kind": "FieldDefinition",
                "name": {
                    "kind": "Name",
                    "value": "country",
                    "loc": {
                        "start": 534,
                        "end": 541
                    }
                },
                "arguments": [],
                "type": {
                    "kind": "NamedType",
                    "name": {
                        "kind": "Name",
                        "value": "String",
                        "loc": {
                            "start": 543,
                            "end": 549
                        }
                    },
                    "loc": {
                        "start": 543,
                        "end": 549
                    }
                },
                "directives": [],
                "loc": {
                    "start": 534,
                    "end": 549
                }
            },
            {
                "kind": "FieldDefinition",
                "name": {
                    "kind": "Name",
                    "value": "city",
                    "loc": {
                        "start": 552,
                        "end": 556
                    }
                },
                "arguments": [],
                "type": {
                    "kind": "NamedType",
                    "name": {
                        "kind": "Name",
                        "value": "String",
                        "loc": {
                            "start": 558,
                            "end": 564
                        }
                    },
                    "loc": {
                        "start": 558,
                        "end": 564
                    }
                },
                "directives": [],
                "loc": {
                    "start": 552,
                    "end": 564
                }
            },
            {
                "kind": "FieldDefinition",
                "name": {
                    "kind": "Name",
                    "value": "address",
                    "loc": {
                        "start": 567,
                        "end": 574
                    }
                },
                "arguments": [],
                "type": {
                    "kind": "NamedType",
                    "name": {
                        "kind": "Name",
                        "value": "String",
                        "loc": {
                            "start": 576,
                            "end": 582
                        }
                    },
                    "loc": {
                        "start": 576,
                        "end": 582
                    }
                },
                "directives": [],
                "loc": {
                    "start": 567,
                    "end": 582
                }
            },
            {
                "kind": "FieldDefinition",
                "name": {
                    "kind": "Name",
                    "value": "phone",
                    "loc": {
                        "start": 585,
                        "end": 590
                    }
                },
                "arguments": [],
                "type": {
                    "kind": "NamedType",
                    "name": {
                        "kind": "Name",
                        "value": "String",
                        "loc": {
                            "start": 592,
                            "end": 598
                        }
                    },
                    "loc": {
                        "start": 592,
                        "end": 598
                    }
                },
                "directives": [],
                "loc": {
                    "start": 585,
                    "end": 598
                }
            }
        ],
        "loc": {
            "start": 493,
            "end": 600
        }
    },
    {
        "kind": "ObjectTypeDefinition",
        "name": {
            "kind": "Name",
            "value": "ingredient",
            "loc": {
                "start": 641,
                "end": 651
            }
        },
        "interfaces": [],
        "directives": [],
        "fields": [
            {
                "kind": "FieldDefinition",
                "name": {
                    "kind": "Name",
                    "value": "value",
                    "loc": {
                        "start": 656,
                        "end": 661
                    }
                },
                "arguments": [],
                "type": {
                    "kind": "NamedType",
                    "name": {
                        "kind": "Name",
                        "value": "String",
                        "loc": {
                            "start": 663,
                            "end": 669
                        }
                    },
                    "loc": {
                        "start": 663,
                        "end": 669
                    }
                },
                "directives": [],
                "loc": {
                    "start": 656,
                    "end": 669
                }
            },
            {
                "kind": "FieldDefinition",
                "name": {
                    "kind": "Name",
                    "value": "label",
                    "loc": {
                        "start": 672,
                        "end": 677
                    }
                },
                "arguments": [],
                "type": {
                    "kind": "NamedType",
                    "name": {
                        "kind": "Name",
                        "value": "String",
                        "loc": {
                            "start": 679,
                            "end": 685
                        }
                    },
                    "loc": {
                        "start": 679,
                        "end": 685
                    }
                },
                "directives": [],
                "loc": {
                    "start": 672,
                    "end": 685
                }
            }
        ],
        "loc": {
            "start": 636,
            "end": 687
        }
    },
    {
        "kind": "ObjectTypeDefinition",
        "name": {
            "kind": "Name",
            "value": "Mutation",
            "loc": {
                "start": 694,
                "end": 702
            }
        },
        "interfaces": [],
        "directives": [],
        "fields": [
            {
                "kind": "FieldDefinition",
                "name": {
                    "kind": "Name",
                    "value": "category_create",
                    "loc": {
                        "start": 728,
                        "end": 743
                    }
                },
                "arguments": [
                    {
                        "kind": "InputValueDefinition",
                        "name": {
                            "kind": "Name",
                            "value": "name",
                            "loc": {
                                "start": 744,
                                "end": 748
                            }
                        },
                        "type": {
                            "kind": "NamedType",
                            "name": {
                                "kind": "Name",
                                "value": "String",
                                "loc": {
                                    "start": 750,
                                    "end": 756
                                }
                            },
                            "loc": {
                                "start": 750,
                                "end": 756
                            }
                        },
                        "defaultValue": null,
                        "directives": [],
                        "loc": {
                            "start": 744,
                            "end": 756
                        }
                    },
                    {
                        "kind": "InputValueDefinition",
                        "name": {
                            "kind": "Name",
                            "value": "createdAt",
                            "loc": {
                                "start": 758,
                                "end": 767
                            }
                        },
                        "type": {
                            "kind": "NamedType",
                            "name": {
                                "kind": "Name",
                                "value": "String",
                                "loc": {
                                    "start": 769,
                                    "end": 775
                                }
                            },
                            "loc": {
                                "start": 769,
                                "end": 775
                            }
                        },
                        "defaultValue": null,
                        "directives": [],
                        "loc": {
                            "start": 758,
                            "end": 775
                        }
                    },
                    {
                        "kind": "InputValueDefinition",
                        "name": {
                            "kind": "Name",
                            "value": "updatedAt",
                            "loc": {
                                "start": 777,
                                "end": 786
                            }
                        },
                        "type": {
                            "kind": "NamedType",
                            "name": {
                                "kind": "Name",
                                "value": "String",
                                "loc": {
                                    "start": 788,
                                    "end": 794
                                }
                            },
                            "loc": {
                                "start": 788,
                                "end": 794
                            }
                        },
                        "defaultValue": null,
                        "directives": [],
                        "loc": {
                            "start": 777,
                            "end": 794
                        }
                    }
                ],
                "type": {
                    "kind": "NamedType",
                    "name": {
                        "kind": "Name",
                        "value": "category",
                        "loc": {
                            "start": 797,
                            "end": 805
                        }
                    },
                    "loc": {
                        "start": 797,
                        "end": 805
                    }
                },
                "directives": [],
                "loc": {
                    "start": 728,
                    "end": 805
                }
            },
            {
                "kind": "FieldDefinition",
                "name": {
                    "kind": "Name",
                    "value": "category_update",
                    "loc": {
                        "start": 829,
                        "end": 844
                    }
                },
                "arguments": [
                    {
                        "kind": "InputValueDefinition",
                        "name": {
                            "kind": "Name",
                            "value": "_id",
                            "loc": {
                                "start": 845,
                                "end": 848
                            }
                        },
                        "type": {
                            "kind": "NamedType",
                            "name": {
                                "kind": "Name",
                                "value": "String",
                                "loc": {
                                    "start": 850,
                                    "end": 856
                                }
                            },
                            "loc": {
                                "start": 850,
                                "end": 856
                            }
                        },
                        "defaultValue": null,
                        "directives": [],
                        "loc": {
                            "start": 845,
                            "end": 856
                        }
                    },
                    {
                        "kind": "InputValueDefinition",
                        "name": {
                            "kind": "Name",
                            "value": "name",
                            "loc": {
                                "start": 858,
                                "end": 862
                            }
                        },
                        "type": {
                            "kind": "NamedType",
                            "name": {
                                "kind": "Name",
                                "value": "String",
                                "loc": {
                                    "start": 864,
                                    "end": 870
                                }
                            },
                            "loc": {
                                "start": 864,
                                "end": 870
                            }
                        },
                        "defaultValue": null,
                        "directives": [],
                        "loc": {
                            "start": 858,
                            "end": 870
                        }
                    },
                    {
                        "kind": "InputValueDefinition",
                        "name": {
                            "kind": "Name",
                            "value": "updatedAt",
                            "loc": {
                                "start": 872,
                                "end": 881
                            }
                        },
                        "type": {
                            "kind": "NamedType",
                            "name": {
                                "kind": "Name",
                                "value": "String",
                                "loc": {
                                    "start": 883,
                                    "end": 889
                                }
                            },
                            "loc": {
                                "start": 883,
                                "end": 889
                            }
                        },
                        "defaultValue": null,
                        "directives": [],
                        "loc": {
                            "start": 872,
                            "end": 889
                        }
                    }
                ],
                "type": {
                    "kind": "NamedType",
                    "name": {
                        "kind": "Name",
                        "value": "category",
                        "loc": {
                            "start": 892,
                            "end": 900
                        }
                    },
                    "loc": {
                        "start": 892,
                        "end": 900
                    }
                },
                "directives": [],
                "loc": {
                    "start": 829,
                    "end": 900
                }
            },
            {
                "kind": "FieldDefinition",
                "name": {
                    "kind": "Name",
                    "value": "category_remove",
                    "loc": {
                        "start": 924,
                        "end": 939
                    }
                },
                "arguments": [
                    {
                        "kind": "InputValueDefinition",
                        "name": {
                            "kind": "Name",
                            "value": "_id",
                            "loc": {
                                "start": 940,
                                "end": 943
                            }
                        },
                        "type": {
                            "kind": "NamedType",
                            "name": {
                                "kind": "Name",
                                "value": "String",
                                "loc": {
                                    "start": 945,
                                    "end": 951
                                }
                            },
                            "loc": {
                                "start": 945,
                                "end": 951
                            }
                        },
                        "defaultValue": null,
                        "directives": [],
                        "loc": {
                            "start": 940,
                            "end": 951
                        }
                    }
                ],
                "type": {
                    "kind": "NamedType",
                    "name": {
                        "kind": "Name",
                        "value": "category",
                        "loc": {
                            "start": 954,
                            "end": 962
                        }
                    },
                    "loc": {
                        "start": 954,
                        "end": 962
                    }
                },
                "directives": [],
                "loc": {
                    "start": 924,
                    "end": 962
                }
            },
            {
                "kind": "FieldDefinition",
                "name": {
                    "kind": "Name",
                    "value": "coupon_create",
                    "loc": {
                        "start": 985,
                        "end": 998
                    }
                },
                "arguments": [
                    {
                        "kind": "InputValueDefinition",
                        "name": {
                            "kind": "Name",
                            "value": "couponCode",
                            "loc": {
                                "start": 999,
                                "end": 1009
                            }
                        },
                        "type": {
                            "kind": "NamedType",
                            "name": {
                                "kind": "Name",
                                "value": "String",
                                "loc": {
                                    "start": 1011,
                                    "end": 1017
                                }
                            },
                            "loc": {
                                "start": 1011,
                                "end": 1017
                            }
                        },
                        "defaultValue": null,
                        "directives": [],
                        "loc": {
                            "start": 999,
                            "end": 1017
                        }
                    },
                    {
                        "kind": "InputValueDefinition",
                        "name": {
                            "kind": "Name",
                            "value": "description",
                            "loc": {
                                "start": 1019,
                                "end": 1030
                            }
                        },
                        "type": {
                            "kind": "NamedType",
                            "name": {
                                "kind": "Name",
                                "value": "String",
                                "loc": {
                                    "start": 1032,
                                    "end": 1038
                                }
                            },
                            "loc": {
                                "start": 1032,
                                "end": 1038
                            }
                        },
                        "defaultValue": null,
                        "directives": [],
                        "loc": {
                            "start": 1019,
                            "end": 1038
                        }
                    },
                    {
                        "kind": "InputValueDefinition",
                        "name": {
                            "kind": "Name",
                            "value": "discountAmount",
                            "loc": {
                                "start": 1040,
                                "end": 1054
                            }
                        },
                        "type": {
                            "kind": "NamedType",
                            "name": {
                                "kind": "Name",
                                "value": "Int",
                                "loc": {
                                    "start": 1056,
                                    "end": 1059
                                }
                            },
                            "loc": {
                                "start": 1056,
                                "end": 1059
                            }
                        },
                        "defaultValue": null,
                        "directives": [],
                        "loc": {
                            "start": 1040,
                            "end": 1059
                        }
                    },
                    {
                        "kind": "InputValueDefinition",
                        "name": {
                            "kind": "Name",
                            "value": "minimumAmount",
                            "loc": {
                                "start": 1061,
                                "end": 1074
                            }
                        },
                        "type": {
                            "kind": "NamedType",
                            "name": {
                                "kind": "Name",
                                "value": "Int",
                                "loc": {
                                    "start": 1076,
                                    "end": 1079
                                }
                            },
                            "loc": {
                                "start": 1076,
                                "end": 1079
                            }
                        },
                        "defaultValue": null,
                        "directives": [],
                        "loc": {
                            "start": 1061,
                            "end": 1079
                        }
                    },
                    {
                        "kind": "InputValueDefinition",
                        "name": {
                            "kind": "Name",
                            "value": "expirationDate",
                            "loc": {
                                "start": 1081,
                                "end": 1095
                            }
                        },
                        "type": {
                            "kind": "NamedType",
                            "name": {
                                "kind": "Name",
                                "value": "String",
                                "loc": {
                                    "start": 1097,
                                    "end": 1103
                                }
                            },
                            "loc": {
                                "start": 1097,
                                "end": 1103
                            }
                        },
                        "defaultValue": null,
                        "directives": [],
                        "loc": {
                            "start": 1081,
                            "end": 1103
                        }
                    },
                    {
                        "kind": "InputValueDefinition",
                        "name": {
                            "kind": "Name",
                            "value": "createdAt",
                            "loc": {
                                "start": 1105,
                                "end": 1114
                            }
                        },
                        "type": {
                            "kind": "NamedType",
                            "name": {
                                "kind": "Name",
                                "value": "String",
                                "loc": {
                                    "start": 1116,
                                    "end": 1122
                                }
                            },
                            "loc": {
                                "start": 1116,
                                "end": 1122
                            }
                        },
                        "defaultValue": null,
                        "directives": [],
                        "loc": {
                            "start": 1105,
                            "end": 1122
                        }
                    },
                    {
                        "kind": "InputValueDefinition",
                        "name": {
                            "kind": "Name",
                            "value": "updatedAt",
                            "loc": {
                                "start": 1124,
                                "end": 1133
                            }
                        },
                        "type": {
                            "kind": "NamedType",
                            "name": {
                                "kind": "Name",
                                "value": "String",
                                "loc": {
                                    "start": 1135,
                                    "end": 1141
                                }
                            },
                            "loc": {
                                "start": 1135,
                                "end": 1141
                            }
                        },
                        "defaultValue": null,
                        "directives": [],
                        "loc": {
                            "start": 1124,
                            "end": 1141
                        }
                    }
                ],
                "type": {
                    "kind": "NamedType",
                    "name": {
                        "kind": "Name",
                        "value": "coupon",
                        "loc": {
                            "start": 1144,
                            "end": 1150
                        }
                    },
                    "loc": {
                        "start": 1144,
                        "end": 1150
                    }
                },
                "directives": [],
                "loc": {
                    "start": 985,
                    "end": 1150
                }
            },
            {
                "kind": "FieldDefinition",
                "name": {
                    "kind": "Name",
                    "value": "coupon_update",
                    "loc": {
                        "start": 1172,
                        "end": 1185
                    }
                },
                "arguments": [
                    {
                        "kind": "InputValueDefinition",
                        "name": {
                            "kind": "Name",
                            "value": "_id",
                            "loc": {
                                "start": 1186,
                                "end": 1189
                            }
                        },
                        "type": {
                            "kind": "NamedType",
                            "name": {
                                "kind": "Name",
                                "value": "String",
                                "loc": {
                                    "start": 1191,
                                    "end": 1197
                                }
                            },
                            "loc": {
                                "start": 1191,
                                "end": 1197
                            }
                        },
                        "defaultValue": null,
                        "directives": [],
                        "loc": {
                            "start": 1186,
                            "end": 1197
                        }
                    },
                    {
                        "kind": "InputValueDefinition",
                        "name": {
                            "kind": "Name",
                            "value": "couponCode",
                            "loc": {
                                "start": 1199,
                                "end": 1209
                            }
                        },
                        "type": {
                            "kind": "NamedType",
                            "name": {
                                "kind": "Name",
                                "value": "String",
                                "loc": {
                                    "start": 1211,
                                    "end": 1217
                                }
                            },
                            "loc": {
                                "start": 1211,
                                "end": 1217
                            }
                        },
                        "defaultValue": null,
                        "directives": [],
                        "loc": {
                            "start": 1199,
                            "end": 1217
                        }
                    },
                    {
                        "kind": "InputValueDefinition",
                        "name": {
                            "kind": "Name",
                            "value": "description",
                            "loc": {
                                "start": 1219,
                                "end": 1230
                            }
                        },
                        "type": {
                            "kind": "NamedType",
                            "name": {
                                "kind": "Name",
                                "value": "String",
                                "loc": {
                                    "start": 1232,
                                    "end": 1238
                                }
                            },
                            "loc": {
                                "start": 1232,
                                "end": 1238
                            }
                        },
                        "defaultValue": null,
                        "directives": [],
                        "loc": {
                            "start": 1219,
                            "end": 1238
                        }
                    },
                    {
                        "kind": "InputValueDefinition",
                        "name": {
                            "kind": "Name",
                            "value": "discountAmount",
                            "loc": {
                                "start": 1240,
                                "end": 1254
                            }
                        },
                        "type": {
                            "kind": "NamedType",
                            "name": {
                                "kind": "Name",
                                "value": "Int",
                                "loc": {
                                    "start": 1256,
                                    "end": 1259
                                }
                            },
                            "loc": {
                                "start": 1256,
                                "end": 1259
                            }
                        },
                        "defaultValue": null,
                        "directives": [],
                        "loc": {
                            "start": 1240,
                            "end": 1259
                        }
                    },
                    {
                        "kind": "InputValueDefinition",
                        "name": {
                            "kind": "Name",
                            "value": "minimumAmount",
                            "loc": {
                                "start": 1261,
                                "end": 1274
                            }
                        },
                        "type": {
                            "kind": "NamedType",
                            "name": {
                                "kind": "Name",
                                "value": "Int",
                                "loc": {
                                    "start": 1276,
                                    "end": 1279
                                }
                            },
                            "loc": {
                                "start": 1276,
                                "end": 1279
                            }
                        },
                        "defaultValue": null,
                        "directives": [],
                        "loc": {
                            "start": 1261,
                            "end": 1279
                        }
                    },
                    {
                        "kind": "InputValueDefinition",
                        "name": {
                            "kind": "Name",
                            "value": "expirationDate",
                            "loc": {
                                "start": 1281,
                                "end": 1295
                            }
                        },
                        "type": {
                            "kind": "NamedType",
                            "name": {
                                "kind": "Name",
                                "value": "String",
                                "loc": {
                                    "start": 1297,
                                    "end": 1303
                                }
                            },
                            "loc": {
                                "start": 1297,
                                "end": 1303
                            }
                        },
                        "defaultValue": null,
                        "directives": [],
                        "loc": {
                            "start": 1281,
                            "end": 1303
                        }
                    },
                    {
                        "kind": "InputValueDefinition",
                        "name": {
                            "kind": "Name",
                            "value": "updatedAt",
                            "loc": {
                                "start": 1305,
                                "end": 1314
                            }
                        },
                        "type": {
                            "kind": "NamedType",
                            "name": {
                                "kind": "Name",
                                "value": "String",
                                "loc": {
                                    "start": 1316,
                                    "end": 1322
                                }
                            },
                            "loc": {
                                "start": 1316,
                                "end": 1322
                            }
                        },
                        "defaultValue": null,
                        "directives": [],
                        "loc": {
                            "start": 1305,
                            "end": 1322
                        }
                    }
                ],
                "type": {
                    "kind": "NamedType",
                    "name": {
                        "kind": "Name",
                        "value": "coupon",
                        "loc": {
                            "start": 1325,
                            "end": 1331
                        }
                    },
                    "loc": {
                        "start": 1325,
                        "end": 1331
                    }
                },
                "directives": [],
                "loc": {
                    "start": 1172,
                    "end": 1331
                }
            },
            {
                "kind": "FieldDefinition",
                "name": {
                    "kind": "Name",
                    "value": "customer_create",
                    "loc": {
                        "start": 1356,
                        "end": 1371
                    }
                },
                "arguments": [
                    {
                        "kind": "InputValueDefinition",
                        "name": {
                            "kind": "Name",
                            "value": "_id",
                            "loc": {
                                "start": 1372,
                                "end": 1375
                            }
                        },
                        "type": {
                            "kind": "NamedType",
                            "name": {
                                "kind": "Name",
                                "value": "Int",
                                "loc": {
                                    "start": 1377,
                                    "end": 1380
                                }
                            },
                            "loc": {
                                "start": 1377,
                                "end": 1380
                            }
                        },
                        "defaultValue": null,
                        "directives": [],
                        "loc": {
                            "start": 1372,
                            "end": 1380
                        }
                    },
                    {
                        "kind": "InputValueDefinition",
                        "name": {
                            "kind": "Name",
                            "value": "firstName",
                            "loc": {
                                "start": 1382,
                                "end": 1391
                            }
                        },
                        "type": {
                            "kind": "NamedType",
                            "name": {
                                "kind": "Name",
                                "value": "String",
                                "loc": {
                                    "start": 1393,
                                    "end": 1399
                                }
                            },
                            "loc": {
                                "start": 1393,
                                "end": 1399
                            }
                        },
                        "defaultValue": null,
                        "directives": [],
                        "loc": {
                            "start": 1382,
                            "end": 1399
                        }
                    },
                    {
                        "kind": "InputValueDefinition",
                        "name": {
                            "kind": "Name",
                            "value": "lastName",
                            "loc": {
                                "start": 1401,
                                "end": 1409
                            }
                        },
                        "type": {
                            "kind": "NamedType",
                            "name": {
                                "kind": "Name",
                                "value": "String",
                                "loc": {
                                    "start": 1411,
                                    "end": 1417
                                }
                            },
                            "loc": {
                                "start": 1411,
                                "end": 1417
                            }
                        },
                        "defaultValue": null,
                        "directives": [],
                        "loc": {
                            "start": 1401,
                            "end": 1417
                        }
                    },
                    {
                        "kind": "InputValueDefinition",
                        "name": {
                            "kind": "Name",
                            "value": "email",
                            "loc": {
                                "start": 1419,
                                "end": 1424
                            }
                        },
                        "type": {
                            "kind": "NamedType",
                            "name": {
                                "kind": "Name",
                                "value": "String",
                                "loc": {
                                    "start": 1426,
                                    "end": 1432
                                }
                            },
                            "loc": {
                                "start": 1426,
                                "end": 1432
                            }
                        },
                        "defaultValue": null,
                        "directives": [],
                        "loc": {
                            "start": 1419,
                            "end": 1432
                        }
                    },
                    {
                        "kind": "InputValueDefinition",
                        "name": {
                            "kind": "Name",
                            "value": "password",
                            "loc": {
                                "start": 1434,
                                "end": 1442
                            }
                        },
                        "type": {
                            "kind": "NamedType",
                            "name": {
                                "kind": "Name",
                                "value": "String",
                                "loc": {
                                    "start": 1444,
                                    "end": 1450
                                }
                            },
                            "loc": {
                                "start": 1444,
                                "end": 1450
                            }
                        },
                        "defaultValue": null,
                        "directives": [],
                        "loc": {
                            "start": 1434,
                            "end": 1450
                        }
                    },
                    {
                        "kind": "InputValueDefinition",
                        "name": {
                            "kind": "Name",
                            "value": "info",
                            "loc": {
                                "start": 1452,
                                "end": 1456
                            }
                        },
                        "type": {
                            "kind": "NamedType",
                            "name": {
                                "kind": "Name",
                                "value": "String",
                                "loc": {
                                    "start": 1458,
                                    "end": 1464
                                }
                            },
                            "loc": {
                                "start": 1458,
                                "end": 1464
                            }
                        },
                        "defaultValue": null,
                        "directives": [],
                        "loc": {
                            "start": 1452,
                            "end": 1464
                        }
                    },
                    {
                        "kind": "InputValueDefinition",
                        "name": {
                            "kind": "Name",
                            "value": "createdAt",
                            "loc": {
                                "start": 1466,
                                "end": 1475
                            }
                        },
                        "type": {
                            "kind": "NamedType",
                            "name": {
                                "kind": "Name",
                                "value": "String",
                                "loc": {
                                    "start": 1477,
                                    "end": 1483
                                }
                            },
                            "loc": {
                                "start": 1477,
                                "end": 1483
                            }
                        },
                        "defaultValue": null,
                        "directives": [],
                        "loc": {
                            "start": 1466,
                            "end": 1483
                        }
                    },
                    {
                        "kind": "InputValueDefinition",
                        "name": {
                            "kind": "Name",
                            "value": "updatedAt",
                            "loc": {
                                "start": 1485,
                                "end": 1494
                            }
                        },
                        "type": {
                            "kind": "NamedType",
                            "name": {
                                "kind": "Name",
                                "value": "String",
                                "loc": {
                                    "start": 1496,
                                    "end": 1502
                                }
                            },
                            "loc": {
                                "start": 1496,
                                "end": 1502
                            }
                        },
                        "defaultValue": null,
                        "directives": [],
                        "loc": {
                            "start": 1485,
                            "end": 1502
                        }
                    }
                ],
                "type": {
                    "kind": "NamedType",
                    "name": {
                        "kind": "Name",
                        "value": "customer",
                        "loc": {
                            "start": 1505,
                            "end": 1513
                        }
                    },
                    "loc": {
                        "start": 1505,
                        "end": 1513
                    }
                },
                "directives": [],
                "loc": {
                    "start": 1356,
                    "end": 1513
                }
            },
            {
                "kind": "FieldDefinition",
                "name": {
                    "kind": "Name",
                    "value": "customer_update",
                    "loc": {
                        "start": 1537,
                        "end": 1552
                    }
                },
                "arguments": [
                    {
                        "kind": "InputValueDefinition",
                        "name": {
                            "kind": "Name",
                            "value": "_id",
                            "loc": {
                                "start": 1553,
                                "end": 1556
                            }
                        },
                        "type": {
                            "kind": "NamedType",
                            "name": {
                                "kind": "Name",
                                "value": "String",
                                "loc": {
                                    "start": 1558,
                                    "end": 1564
                                }
                            },
                            "loc": {
                                "start": 1558,
                                "end": 1564
                            }
                        },
                        "defaultValue": null,
                        "directives": [],
                        "loc": {
                            "start": 1553,
                            "end": 1564
                        }
                    },
                    {
                        "kind": "InputValueDefinition",
                        "name": {
                            "kind": "Name",
                            "value": "firstName",
                            "loc": {
                                "start": 1566,
                                "end": 1575
                            }
                        },
                        "type": {
                            "kind": "NamedType",
                            "name": {
                                "kind": "Name",
                                "value": "String",
                                "loc": {
                                    "start": 1577,
                                    "end": 1583
                                }
                            },
                            "loc": {
                                "start": 1577,
                                "end": 1583
                            }
                        },
                        "defaultValue": null,
                        "directives": [],
                        "loc": {
                            "start": 1566,
                            "end": 1583
                        }
                    },
                    {
                        "kind": "InputValueDefinition",
                        "name": {
                            "kind": "Name",
                            "value": "lastName",
                            "loc": {
                                "start": 1585,
                                "end": 1593
                            }
                        },
                        "type": {
                            "kind": "NamedType",
                            "name": {
                                "kind": "Name",
                                "value": "String",
                                "loc": {
                                    "start": 1595,
                                    "end": 1601
                                }
                            },
                            "loc": {
                                "start": 1595,
                                "end": 1601
                            }
                        },
                        "defaultValue": null,
                        "directives": [],
                        "loc": {
                            "start": 1585,
                            "end": 1601
                        }
                    },
                    {
                        "kind": "InputValueDefinition",
                        "name": {
                            "kind": "Name",
                            "value": "email",
                            "loc": {
                                "start": 1603,
                                "end": 1608
                            }
                        },
                        "type": {
                            "kind": "NamedType",
                            "name": {
                                "kind": "Name",
                                "value": "String",
                                "loc": {
                                    "start": 1610,
                                    "end": 1616
                                }
                            },
                            "loc": {
                                "start": 1610,
                                "end": 1616
                            }
                        },
                        "defaultValue": null,
                        "directives": [],
                        "loc": {
                            "start": 1603,
                            "end": 1616
                        }
                    },
                    {
                        "kind": "InputValueDefinition",
                        "name": {
                            "kind": "Name",
                            "value": "password",
                            "loc": {
                                "start": 1618,
                                "end": 1626
                            }
                        },
                        "type": {
                            "kind": "NamedType",
                            "name": {
                                "kind": "Name",
                                "value": "String",
                                "loc": {
                                    "start": 1628,
                                    "end": 1634
                                }
                            },
                            "loc": {
                                "start": 1628,
                                "end": 1634
                            }
                        },
                        "defaultValue": null,
                        "directives": [],
                        "loc": {
                            "start": 1618,
                            "end": 1634
                        }
                    },
                    {
                        "kind": "InputValueDefinition",
                        "name": {
                            "kind": "Name",
                            "value": "info",
                            "loc": {
                                "start": 1636,
                                "end": 1640
                            }
                        },
                        "type": {
                            "kind": "NamedType",
                            "name": {
                                "kind": "Name",
                                "value": "String",
                                "loc": {
                                    "start": 1642,
                                    "end": 1648
                                }
                            },
                            "loc": {
                                "start": 1642,
                                "end": 1648
                            }
                        },
                        "defaultValue": null,
                        "directives": [],
                        "loc": {
                            "start": 1636,
                            "end": 1648
                        }
                    },
                    {
                        "kind": "InputValueDefinition",
                        "name": {
                            "kind": "Name",
                            "value": "createdAt",
                            "loc": {
                                "start": 1650,
                                "end": 1659
                            }
                        },
                        "type": {
                            "kind": "NamedType",
                            "name": {
                                "kind": "Name",
                                "value": "String",
                                "loc": {
                                    "start": 1661,
                                    "end": 1667
                                }
                            },
                            "loc": {
                                "start": 1661,
                                "end": 1667
                            }
                        },
                        "defaultValue": null,
                        "directives": [],
                        "loc": {
                            "start": 1650,
                            "end": 1667
                        }
                    },
                    {
                        "kind": "InputValueDefinition",
                        "name": {
                            "kind": "Name",
                            "value": "updatedAt",
                            "loc": {
                                "start": 1669,
                                "end": 1678
                            }
                        },
                        "type": {
                            "kind": "NamedType",
                            "name": {
                                "kind": "Name",
                                "value": "String",
                                "loc": {
                                    "start": 1680,
                                    "end": 1686
                                }
                            },
                            "loc": {
                                "start": 1680,
                                "end": 1686
                            }
                        },
                        "defaultValue": null,
                        "directives": [],
                        "loc": {
                            "start": 1669,
                            "end": 1686
                        }
                    }
                ],
                "type": {
                    "kind": "NamedType",
                    "name": {
                        "kind": "Name",
                        "value": "customer",
                        "loc": {
                            "start": 1689,
                            "end": 1697
                        }
                    },
                    "loc": {
                        "start": 1689,
                        "end": 1697
                    }
                },
                "directives": [],
                "loc": {
                    "start": 1537,
                    "end": 1697
                }
            },
            {
                "kind": "FieldDefinition",
                "name": {
                    "kind": "Name",
                    "value": "product_create",
                    "loc": {
                        "start": 1721,
                        "end": 1735
                    }
                },
                "arguments": [
                    {
                        "kind": "InputValueDefinition",
                        "name": {
                            "kind": "Name",
                            "value": "name",
                            "loc": {
                                "start": 1736,
                                "end": 1740
                            }
                        },
                        "type": {
                            "kind": "NamedType",
                            "name": {
                                "kind": "Name",
                                "value": "String",
                                "loc": {
                                    "start": 1742,
                                    "end": 1748
                                }
                            },
                            "loc": {
                                "start": 1742,
                                "end": 1748
                            }
                        },
                        "defaultValue": null,
                        "directives": [],
                        "loc": {
                            "start": 1736,
                            "end": 1748
                        }
                    },
                    {
                        "kind": "InputValueDefinition",
                        "name": {
                            "kind": "Name",
                            "value": "price",
                            "loc": {
                                "start": 1750,
                                "end": 1755
                            }
                        },
                        "type": {
                            "kind": "NamedType",
                            "name": {
                                "kind": "Name",
                                "value": "String",
                                "loc": {
                                    "start": 1757,
                                    "end": 1763
                                }
                            },
                            "loc": {
                                "start": 1757,
                                "end": 1763
                            }
                        },
                        "defaultValue": null,
                        "directives": [],
                        "loc": {
                            "start": 1750,
                            "end": 1763
                        }
                    },
                    {
                        "kind": "InputValueDefinition",
                        "name": {
                            "kind": "Name",
                            "value": "shortDescription",
                            "loc": {
                                "start": 1765,
                                "end": 1781
                            }
                        },
                        "type": {
                            "kind": "NamedType",
                            "name": {
                                "kind": "Name",
                                "value": "String",
                                "loc": {
                                    "start": 1783,
                                    "end": 1789
                                }
                            },
                            "loc": {
                                "start": 1783,
                                "end": 1789
                            }
                        },
                        "defaultValue": null,
                        "directives": [],
                        "loc": {
                            "start": 1765,
                            "end": 1789
                        }
                    },
                    {
                        "kind": "InputValueDefinition",
                        "name": {
                            "kind": "Name",
                            "value": "pageTitle",
                            "loc": {
                                "start": 1791,
                                "end": 1800
                            }
                        },
                        "type": {
                            "kind": "NamedType",
                            "name": {
                                "kind": "Name",
                                "value": "String",
                                "loc": {
                                    "start": 1802,
                                    "end": 1808
                                }
                            },
                            "loc": {
                                "start": 1802,
                                "end": 1808
                            }
                        },
                        "defaultValue": null,
                        "directives": [],
                        "loc": {
                            "start": 1791,
                            "end": 1808
                        }
                    },
                    {
                        "kind": "InputValueDefinition",
                        "name": {
                            "kind": "Name",
                            "value": "metaDescription",
                            "loc": {
                                "start": 1810,
                                "end": 1825
                            }
                        },
                        "type": {
                            "kind": "NamedType",
                            "name": {
                                "kind": "Name",
                                "value": "String",
                                "loc": {
                                    "start": 1827,
                                    "end": 1833
                                }
                            },
                            "loc": {
                                "start": 1827,
                                "end": 1833
                            }
                        },
                        "defaultValue": null,
                        "directives": [],
                        "loc": {
                            "start": 1810,
                            "end": 1833
                        }
                    },
                    {
                        "kind": "InputValueDefinition",
                        "name": {
                            "kind": "Name",
                            "value": "metaKeywords",
                            "loc": {
                                "start": 1835,
                                "end": 1847
                            }
                        },
                        "type": {
                            "kind": "NamedType",
                            "name": {
                                "kind": "Name",
                                "value": "String",
                                "loc": {
                                    "start": 1849,
                                    "end": 1855
                                }
                            },
                            "loc": {
                                "start": 1849,
                                "end": 1855
                            }
                        },
                        "defaultValue": null,
                        "directives": [],
                        "loc": {
                            "start": 1835,
                            "end": 1855
                        }
                    },
                    {
                        "kind": "InputValueDefinition",
                        "name": {
                            "kind": "Name",
                            "value": "categories",
                            "loc": {
                                "start": 1857,
                                "end": 1867
                            }
                        },
                        "type": {
                            "kind": "NamedType",
                            "name": {
                                "kind": "Name",
                                "value": "String",
                                "loc": {
                                    "start": 1869,
                                    "end": 1875
                                }
                            },
                            "loc": {
                                "start": 1869,
                                "end": 1875
                            }
                        },
                        "defaultValue": null,
                        "directives": [],
                        "loc": {
                            "start": 1857,
                            "end": 1875
                        }
                    },
                    {
                        "kind": "InputValueDefinition",
                        "name": {
                            "kind": "Name",
                            "value": "ingredients",
                            "loc": {
                                "start": 1877,
                                "end": 1888
                            }
                        },
                        "type": {
                            "kind": "NamedType",
                            "name": {
                                "kind": "Name",
                                "value": "String",
                                "loc": {
                                    "start": 1890,
                                    "end": 1896
                                }
                            },
                            "loc": {
                                "start": 1890,
                                "end": 1896
                            }
                        },
                        "defaultValue": null,
                        "directives": [],
                        "loc": {
                            "start": 1877,
                            "end": 1896
                        }
                    },
                    {
                        "kind": "InputValueDefinition",
                        "name": {
                            "kind": "Name",
                            "value": "createdAt",
                            "loc": {
                                "start": 1898,
                                "end": 1907
                            }
                        },
                        "type": {
                            "kind": "NamedType",
                            "name": {
                                "kind": "Name",
                                "value": "String",
                                "loc": {
                                    "start": 1909,
                                    "end": 1915
                                }
                            },
                            "loc": {
                                "start": 1909,
                                "end": 1915
                            }
                        },
                        "defaultValue": null,
                        "directives": [],
                        "loc": {
                            "start": 1898,
                            "end": 1915
                        }
                    },
                    {
                        "kind": "InputValueDefinition",
                        "name": {
                            "kind": "Name",
                            "value": "updatedAt",
                            "loc": {
                                "start": 1917,
                                "end": 1926
                            }
                        },
                        "type": {
                            "kind": "NamedType",
                            "name": {
                                "kind": "Name",
                                "value": "String",
                                "loc": {
                                    "start": 1928,
                                    "end": 1934
                                }
                            },
                            "loc": {
                                "start": 1928,
                                "end": 1934
                            }
                        },
                        "defaultValue": null,
                        "directives": [],
                        "loc": {
                            "start": 1917,
                            "end": 1934
                        }
                    },
                    {
                        "kind": "InputValueDefinition",
                        "name": {
                            "kind": "Name",
                            "value": "image",
                            "loc": {
                                "start": 1936,
                                "end": 1941
                            }
                        },
                        "type": {
                            "kind": "NamedType",
                            "name": {
                                "kind": "Name",
                                "value": "String",
                                "loc": {
                                    "start": 1943,
                                    "end": 1949
                                }
                            },
                            "loc": {
                                "start": 1943,
                                "end": 1949
                            }
                        },
                        "defaultValue": null,
                        "directives": [],
                        "loc": {
                            "start": 1936,
                            "end": 1949
                        }
                    },
                    {
                        "kind": "InputValueDefinition",
                        "name": {
                            "kind": "Name",
                            "value": "isPublished",
                            "loc": {
                                "start": 1951,
                                "end": 1962
                            }
                        },
                        "type": {
                            "kind": "NamedType",
                            "name": {
                                "kind": "Name",
                                "value": "Boolean",
                                "loc": {
                                    "start": 1964,
                                    "end": 1971
                                }
                            },
                            "loc": {
                                "start": 1964,
                                "end": 1971
                            }
                        },
                        "defaultValue": null,
                        "directives": [],
                        "loc": {
                            "start": 1951,
                            "end": 1971
                        }
                    }
                ],
                "type": {
                    "kind": "NamedType",
                    "name": {
                        "kind": "Name",
                        "value": "product",
                        "loc": {
                            "start": 1974,
                            "end": 1981
                        }
                    },
                    "loc": {
                        "start": 1974,
                        "end": 1981
                    }
                },
                "directives": [],
                "loc": {
                    "start": 1721,
                    "end": 1981
                }
            },
            {
                "kind": "FieldDefinition",
                "name": {
                    "kind": "Name",
                    "value": "product_update",
                    "loc": {
                        "start": 2004,
                        "end": 2018
                    }
                },
                "arguments": [
                    {
                        "kind": "InputValueDefinition",
                        "name": {
                            "kind": "Name",
                            "value": "_id",
                            "loc": {
                                "start": 2019,
                                "end": 2022
                            }
                        },
                        "type": {
                            "kind": "NamedType",
                            "name": {
                                "kind": "Name",
                                "value": "String",
                                "loc": {
                                    "start": 2024,
                                    "end": 2030
                                }
                            },
                            "loc": {
                                "start": 2024,
                                "end": 2030
                            }
                        },
                        "defaultValue": null,
                        "directives": [],
                        "loc": {
                            "start": 2019,
                            "end": 2030
                        }
                    },
                    {
                        "kind": "InputValueDefinition",
                        "name": {
                            "kind": "Name",
                            "value": "name",
                            "loc": {
                                "start": 2032,
                                "end": 2036
                            }
                        },
                        "type": {
                            "kind": "NamedType",
                            "name": {
                                "kind": "Name",
                                "value": "String",
                                "loc": {
                                    "start": 2038,
                                    "end": 2044
                                }
                            },
                            "loc": {
                                "start": 2038,
                                "end": 2044
                            }
                        },
                        "defaultValue": null,
                        "directives": [],
                        "loc": {
                            "start": 2032,
                            "end": 2044
                        }
                    },
                    {
                        "kind": "InputValueDefinition",
                        "name": {
                            "kind": "Name",
                            "value": "price",
                            "loc": {
                                "start": 2046,
                                "end": 2051
                            }
                        },
                        "type": {
                            "kind": "NamedType",
                            "name": {
                                "kind": "Name",
                                "value": "String",
                                "loc": {
                                    "start": 2053,
                                    "end": 2059
                                }
                            },
                            "loc": {
                                "start": 2053,
                                "end": 2059
                            }
                        },
                        "defaultValue": null,
                        "directives": [],
                        "loc": {
                            "start": 2046,
                            "end": 2059
                        }
                    },
                    {
                        "kind": "InputValueDefinition",
                        "name": {
                            "kind": "Name",
                            "value": "shortDescription",
                            "loc": {
                                "start": 2061,
                                "end": 2077
                            }
                        },
                        "type": {
                            "kind": "NamedType",
                            "name": {
                                "kind": "Name",
                                "value": "String",
                                "loc": {
                                    "start": 2079,
                                    "end": 2085
                                }
                            },
                            "loc": {
                                "start": 2079,
                                "end": 2085
                            }
                        },
                        "defaultValue": null,
                        "directives": [],
                        "loc": {
                            "start": 2061,
                            "end": 2085
                        }
                    },
                    {
                        "kind": "InputValueDefinition",
                        "name": {
                            "kind": "Name",
                            "value": "pageTitle",
                            "loc": {
                                "start": 2087,
                                "end": 2096
                            }
                        },
                        "type": {
                            "kind": "NamedType",
                            "name": {
                                "kind": "Name",
                                "value": "String",
                                "loc": {
                                    "start": 2098,
                                    "end": 2104
                                }
                            },
                            "loc": {
                                "start": 2098,
                                "end": 2104
                            }
                        },
                        "defaultValue": null,
                        "directives": [],
                        "loc": {
                            "start": 2087,
                            "end": 2104
                        }
                    },
                    {
                        "kind": "InputValueDefinition",
                        "name": {
                            "kind": "Name",
                            "value": "metaDescription",
                            "loc": {
                                "start": 2106,
                                "end": 2121
                            }
                        },
                        "type": {
                            "kind": "NamedType",
                            "name": {
                                "kind": "Name",
                                "value": "String",
                                "loc": {
                                    "start": 2123,
                                    "end": 2129
                                }
                            },
                            "loc": {
                                "start": 2123,
                                "end": 2129
                            }
                        },
                        "defaultValue": null,
                        "directives": [],
                        "loc": {
                            "start": 2106,
                            "end": 2129
                        }
                    },
                    {
                        "kind": "InputValueDefinition",
                        "name": {
                            "kind": "Name",
                            "value": "metaKeywords",
                            "loc": {
                                "start": 2131,
                                "end": 2143
                            }
                        },
                        "type": {
                            "kind": "NamedType",
                            "name": {
                                "kind": "Name",
                                "value": "String",
                                "loc": {
                                    "start": 2145,
                                    "end": 2151
                                }
                            },
                            "loc": {
                                "start": 2145,
                                "end": 2151
                            }
                        },
                        "defaultValue": null,
                        "directives": [],
                        "loc": {
                            "start": 2131,
                            "end": 2151
                        }
                    },
                    {
                        "kind": "InputValueDefinition",
                        "name": {
                            "kind": "Name",
                            "value": "categories",
                            "loc": {
                                "start": 2153,
                                "end": 2163
                            }
                        },
                        "type": {
                            "kind": "NamedType",
                            "name": {
                                "kind": "Name",
                                "value": "String",
                                "loc": {
                                    "start": 2165,
                                    "end": 2171
                                }
                            },
                            "loc": {
                                "start": 2165,
                                "end": 2171
                            }
                        },
                        "defaultValue": null,
                        "directives": [],
                        "loc": {
                            "start": 2153,
                            "end": 2171
                        }
                    },
                    {
                        "kind": "InputValueDefinition",
                        "name": {
                            "kind": "Name",
                            "value": "ingredients",
                            "loc": {
                                "start": 2173,
                                "end": 2184
                            }
                        },
                        "type": {
                            "kind": "NamedType",
                            "name": {
                                "kind": "Name",
                                "value": "String",
                                "loc": {
                                    "start": 2186,
                                    "end": 2192
                                }
                            },
                            "loc": {
                                "start": 2186,
                                "end": 2192
                            }
                        },
                        "defaultValue": null,
                        "directives": [],
                        "loc": {
                            "start": 2173,
                            "end": 2192
                        }
                    },
                    {
                        "kind": "InputValueDefinition",
                        "name": {
                            "kind": "Name",
                            "value": "updatedAt",
                            "loc": {
                                "start": 2194,
                                "end": 2203
                            }
                        },
                        "type": {
                            "kind": "NamedType",
                            "name": {
                                "kind": "Name",
                                "value": "String",
                                "loc": {
                                    "start": 2205,
                                    "end": 2211
                                }
                            },
                            "loc": {
                                "start": 2205,
                                "end": 2211
                            }
                        },
                        "defaultValue": null,
                        "directives": [],
                        "loc": {
                            "start": 2194,
                            "end": 2211
                        }
                    },
                    {
                        "kind": "InputValueDefinition",
                        "name": {
                            "kind": "Name",
                            "value": "image",
                            "loc": {
                                "start": 2213,
                                "end": 2218
                            }
                        },
                        "type": {
                            "kind": "NamedType",
                            "name": {
                                "kind": "Name",
                                "value": "String",
                                "loc": {
                                    "start": 2220,
                                    "end": 2226
                                }
                            },
                            "loc": {
                                "start": 2220,
                                "end": 2226
                            }
                        },
                        "defaultValue": null,
                        "directives": [],
                        "loc": {
                            "start": 2213,
                            "end": 2226
                        }
                    },
                    {
                        "kind": "InputValueDefinition",
                        "name": {
                            "kind": "Name",
                            "value": "isPublished",
                            "loc": {
                                "start": 2228,
                                "end": 2239
                            }
                        },
                        "type": {
                            "kind": "NamedType",
                            "name": {
                                "kind": "Name",
                                "value": "Boolean",
                                "loc": {
                                    "start": 2241,
                                    "end": 2248
                                }
                            },
                            "loc": {
                                "start": 2241,
                                "end": 2248
                            }
                        },
                        "defaultValue": null,
                        "directives": [],
                        "loc": {
                            "start": 2228,
                            "end": 2248
                        }
                    }
                ],
                "type": {
                    "kind": "NamedType",
                    "name": {
                        "kind": "Name",
                        "value": "product",
                        "loc": {
                            "start": 2251,
                            "end": 2258
                        }
                    },
                    "loc": {
                        "start": 2251,
                        "end": 2258
                    }
                },
                "directives": [],
                "loc": {
                    "start": 2004,
                    "end": 2258
                }
            }
        ],
        "loc": {
            "start": 689,
            "end": 2260
        }
    },
    {
        "kind": "ObjectTypeDefinition",
        "name": {
            "kind": "Name",
            "value": "product",
            "loc": {
                "start": 2284,
                "end": 2291
            }
        },
        "interfaces": [],
        "directives": [],
        "fields": [
            {
                "kind": "FieldDefinition",
                "name": {
                    "kind": "Name",
                    "value": "_id",
                    "loc": {
                        "start": 2296,
                        "end": 2299
                    }
                },
                "arguments": [],
                "type": {
                    "kind": "NamedType",
                    "name": {
                        "kind": "Name",
                        "value": "String",
                        "loc": {
                            "start": 2301,
                            "end": 2307
                        }
                    },
                    "loc": {
                        "start": 2301,
                        "end": 2307
                    }
                },
                "directives": [],
                "loc": {
                    "start": 2296,
                    "end": 2307
                }
            },
            {
                "kind": "FieldDefinition",
                "name": {
                    "kind": "Name",
                    "value": "name",
                    "loc": {
                        "start": 2310,
                        "end": 2314
                    }
                },
                "arguments": [],
                "type": {
                    "kind": "NamedType",
                    "name": {
                        "kind": "Name",
                        "value": "String",
                        "loc": {
                            "start": 2316,
                            "end": 2322
                        }
                    },
                    "loc": {
                        "start": 2316,
                        "end": 2322
                    }
                },
                "directives": [],
                "loc": {
                    "start": 2310,
                    "end": 2322
                }
            },
            {
                "kind": "FieldDefinition",
                "name": {
                    "kind": "Name",
                    "value": "categories",
                    "loc": {
                        "start": 2325,
                        "end": 2335
                    }
                },
                "arguments": [],
                "type": {
                    "kind": "ListType",
                    "type": {
                        "kind": "NamedType",
                        "name": {
                            "kind": "Name",
                            "value": "category",
                            "loc": {
                                "start": 2338,
                                "end": 2346
                            }
                        },
                        "loc": {
                            "start": 2338,
                            "end": 2346
                        }
                    },
                    "loc": {
                        "start": 2337,
                        "end": 2347
                    }
                },
                "directives": [],
                "loc": {
                    "start": 2325,
                    "end": 2347
                }
            },
            {
                "kind": "FieldDefinition",
                "name": {
                    "kind": "Name",
                    "value": "ingredients",
                    "loc": {
                        "start": 2350,
                        "end": 2361
                    }
                },
                "arguments": [],
                "type": {
                    "kind": "ListType",
                    "type": {
                        "kind": "NamedType",
                        "name": {
                            "kind": "Name",
                            "value": "ingredient",
                            "loc": {
                                "start": 2364,
                                "end": 2374
                            }
                        },
                        "loc": {
                            "start": 2364,
                            "end": 2374
                        }
                    },
                    "loc": {
                        "start": 2363,
                        "end": 2375
                    }
                },
                "directives": [],
                "loc": {
                    "start": 2350,
                    "end": 2375
                }
            },
            {
                "kind": "FieldDefinition",
                "name": {
                    "kind": "Name",
                    "value": "price",
                    "loc": {
                        "start": 2378,
                        "end": 2383
                    }
                },
                "arguments": [],
                "type": {
                    "kind": "NamedType",
                    "name": {
                        "kind": "Name",
                        "value": "String",
                        "loc": {
                            "start": 2385,
                            "end": 2391
                        }
                    },
                    "loc": {
                        "start": 2385,
                        "end": 2391
                    }
                },
                "directives": [],
                "loc": {
                    "start": 2378,
                    "end": 2391
                }
            },
            {
                "kind": "FieldDefinition",
                "name": {
                    "kind": "Name",
                    "value": "shortDescription",
                    "loc": {
                        "start": 2394,
                        "end": 2410
                    }
                },
                "arguments": [],
                "type": {
                    "kind": "NamedType",
                    "name": {
                        "kind": "Name",
                        "value": "String",
                        "loc": {
                            "start": 2412,
                            "end": 2418
                        }
                    },
                    "loc": {
                        "start": 2412,
                        "end": 2418
                    }
                },
                "directives": [],
                "loc": {
                    "start": 2394,
                    "end": 2418
                }
            },
            {
                "kind": "FieldDefinition",
                "name": {
                    "kind": "Name",
                    "value": "pageTitle",
                    "loc": {
                        "start": 2421,
                        "end": 2430
                    }
                },
                "arguments": [],
                "type": {
                    "kind": "NamedType",
                    "name": {
                        "kind": "Name",
                        "value": "String",
                        "loc": {
                            "start": 2432,
                            "end": 2438
                        }
                    },
                    "loc": {
                        "start": 2432,
                        "end": 2438
                    }
                },
                "directives": [],
                "loc": {
                    "start": 2421,
                    "end": 2438
                }
            },
            {
                "kind": "FieldDefinition",
                "name": {
                    "kind": "Name",
                    "value": "metaDescription",
                    "loc": {
                        "start": 2441,
                        "end": 2456
                    }
                },
                "arguments": [],
                "type": {
                    "kind": "NamedType",
                    "name": {
                        "kind": "Name",
                        "value": "String",
                        "loc": {
                            "start": 2458,
                            "end": 2464
                        }
                    },
                    "loc": {
                        "start": 2458,
                        "end": 2464
                    }
                },
                "directives": [],
                "loc": {
                    "start": 2441,
                    "end": 2464
                }
            },
            {
                "kind": "FieldDefinition",
                "name": {
                    "kind": "Name",
                    "value": "metaKeywords",
                    "loc": {
                        "start": 2467,
                        "end": 2479
                    }
                },
                "arguments": [],
                "type": {
                    "kind": "NamedType",
                    "name": {
                        "kind": "Name",
                        "value": "String",
                        "loc": {
                            "start": 2481,
                            "end": 2487
                        }
                    },
                    "loc": {
                        "start": 2481,
                        "end": 2487
                    }
                },
                "directives": [],
                "loc": {
                    "start": 2467,
                    "end": 2487
                }
            },
            {
                "kind": "FieldDefinition",
                "name": {
                    "kind": "Name",
                    "value": "createdAt",
                    "loc": {
                        "start": 2490,
                        "end": 2499
                    }
                },
                "arguments": [],
                "type": {
                    "kind": "NamedType",
                    "name": {
                        "kind": "Name",
                        "value": "String",
                        "loc": {
                            "start": 2501,
                            "end": 2507
                        }
                    },
                    "loc": {
                        "start": 2501,
                        "end": 2507
                    }
                },
                "directives": [],
                "loc": {
                    "start": 2490,
                    "end": 2507
                }
            },
            {
                "kind": "FieldDefinition",
                "name": {
                    "kind": "Name",
                    "value": "updatedAt",
                    "loc": {
                        "start": 2510,
                        "end": 2519
                    }
                },
                "arguments": [],
                "type": {
                    "kind": "NamedType",
                    "name": {
                        "kind": "Name",
                        "value": "String",
                        "loc": {
                            "start": 2521,
                            "end": 2527
                        }
                    },
                    "loc": {
                        "start": 2521,
                        "end": 2527
                    }
                },
                "directives": [],
                "loc": {
                    "start": 2510,
                    "end": 2527
                }
            },
            {
                "kind": "FieldDefinition",
                "name": {
                    "kind": "Name",
                    "value": "image",
                    "loc": {
                        "start": 2530,
                        "end": 2535
                    }
                },
                "arguments": [],
                "type": {
                    "kind": "NamedType",
                    "name": {
                        "kind": "Name",
                        "value": "String",
                        "loc": {
                            "start": 2537,
                            "end": 2543
                        }
                    },
                    "loc": {
                        "start": 2537,
                        "end": 2543
                    }
                },
                "directives": [],
                "loc": {
                    "start": 2530,
                    "end": 2543
                }
            },
            {
                "kind": "FieldDefinition",
                "name": {
                    "kind": "Name",
                    "value": "isPublished",
                    "loc": {
                        "start": 2546,
                        "end": 2557
                    }
                },
                "arguments": [],
                "type": {
                    "kind": "NamedType",
                    "name": {
                        "kind": "Name",
                        "value": "Boolean",
                        "loc": {
                            "start": 2559,
                            "end": 2566
                        }
                    },
                    "loc": {
                        "start": 2559,
                        "end": 2566
                    }
                },
                "directives": [],
                "loc": {
                    "start": 2546,
                    "end": 2566
                }
            }
        ],
        "loc": {
            "start": 2279,
            "end": 2568
        }
    },
    {
        "kind": "ObjectTypeDefinition",
        "name": {
            "kind": "Name",
            "value": "Query",
            "loc": {
                "start": 2575,
                "end": 2580
            }
        },
        "interfaces": [],
        "directives": [],
        "fields": [
            {
                "kind": "FieldDefinition",
                "name": {
                    "kind": "Name",
                    "value": "category_find",
                    "loc": {
                        "start": 2585,
                        "end": 2598
                    }
                },
                "arguments": [
                    {
                        "kind": "InputValueDefinition",
                        "name": {
                            "kind": "Name",
                            "value": "offset",
                            "loc": {
                                "start": 2599,
                                "end": 2605
                            }
                        },
                        "type": {
                            "kind": "NamedType",
                            "name": {
                                "kind": "Name",
                                "value": "Int",
                                "loc": {
                                    "start": 2607,
                                    "end": 2610
                                }
                            },
                            "loc": {
                                "start": 2607,
                                "end": 2610
                            }
                        },
                        "defaultValue": null,
                        "directives": [],
                        "loc": {
                            "start": 2599,
                            "end": 2610
                        }
                    },
                    {
                        "kind": "InputValueDefinition",
                        "name": {
                            "kind": "Name",
                            "value": "limit",
                            "loc": {
                                "start": 2612,
                                "end": 2617
                            }
                        },
                        "type": {
                            "kind": "NamedType",
                            "name": {
                                "kind": "Name",
                                "value": "Int",
                                "loc": {
                                    "start": 2619,
                                    "end": 2622
                                }
                            },
                            "loc": {
                                "start": 2619,
                                "end": 2622
                            }
                        },
                        "defaultValue": null,
                        "directives": [],
                        "loc": {
                            "start": 2612,
                            "end": 2622
                        }
                    },
                    {
                        "kind": "InputValueDefinition",
                        "name": {
                            "kind": "Name",
                            "value": "_id",
                            "loc": {
                                "start": 2624,
                                "end": 2627
                            }
                        },
                        "type": {
                            "kind": "NamedType",
                            "name": {
                                "kind": "Name",
                                "value": "String",
                                "loc": {
                                    "start": 2629,
                                    "end": 2635
                                }
                            },
                            "loc": {
                                "start": 2629,
                                "end": 2635
                            }
                        },
                        "defaultValue": null,
                        "directives": [],
                        "loc": {
                            "start": 2624,
                            "end": 2635
                        }
                    }
                ],
                "type": {
                    "kind": "ListType",
                    "type": {
                        "kind": "NamedType",
                        "name": {
                            "kind": "Name",
                            "value": "category",
                            "loc": {
                                "start": 2639,
                                "end": 2647
                            }
                        },
                        "loc": {
                            "start": 2639,
                            "end": 2647
                        }
                    },
                    "loc": {
                        "start": 2638,
                        "end": 2648
                    }
                },
                "directives": [],
                "loc": {
                    "start": 2585,
                    "end": 2648
                }
            },
            {
                "kind": "FieldDefinition",
                "name": {
                    "kind": "Name",
                    "value": "coupon_find",
                    "loc": {
                        "start": 2651,
                        "end": 2662
                    }
                },
                "arguments": [
                    {
                        "kind": "InputValueDefinition",
                        "name": {
                            "kind": "Name",
                            "value": "offset",
                            "loc": {
                                "start": 2663,
                                "end": 2669
                            }
                        },
                        "type": {
                            "kind": "NamedType",
                            "name": {
                                "kind": "Name",
                                "value": "Int",
                                "loc": {
                                    "start": 2671,
                                    "end": 2674
                                }
                            },
                            "loc": {
                                "start": 2671,
                                "end": 2674
                            }
                        },
                        "defaultValue": null,
                        "directives": [],
                        "loc": {
                            "start": 2663,
                            "end": 2674
                        }
                    },
                    {
                        "kind": "InputValueDefinition",
                        "name": {
                            "kind": "Name",
                            "value": "limit",
                            "loc": {
                                "start": 2676,
                                "end": 2681
                            }
                        },
                        "type": {
                            "kind": "NamedType",
                            "name": {
                                "kind": "Name",
                                "value": "Int",
                                "loc": {
                                    "start": 2683,
                                    "end": 2686
                                }
                            },
                            "loc": {
                                "start": 2683,
                                "end": 2686
                            }
                        },
                        "defaultValue": null,
                        "directives": [],
                        "loc": {
                            "start": 2676,
                            "end": 2686
                        }
                    },
                    {
                        "kind": "InputValueDefinition",
                        "name": {
                            "kind": "Name",
                            "value": "_id",
                            "loc": {
                                "start": 2688,
                                "end": 2691
                            }
                        },
                        "type": {
                            "kind": "NamedType",
                            "name": {
                                "kind": "Name",
                                "value": "String",
                                "loc": {
                                    "start": 2693,
                                    "end": 2699
                                }
                            },
                            "loc": {
                                "start": 2693,
                                "end": 2699
                            }
                        },
                        "defaultValue": null,
                        "directives": [],
                        "loc": {
                            "start": 2688,
                            "end": 2699
                        }
                    }
                ],
                "type": {
                    "kind": "ListType",
                    "type": {
                        "kind": "NamedType",
                        "name": {
                            "kind": "Name",
                            "value": "coupon",
                            "loc": {
                                "start": 2703,
                                "end": 2709
                            }
                        },
                        "loc": {
                            "start": 2703,
                            "end": 2709
                        }
                    },
                    "loc": {
                        "start": 2702,
                        "end": 2710
                    }
                },
                "directives": [],
                "loc": {
                    "start": 2651,
                    "end": 2710
                }
            },
            {
                "kind": "FieldDefinition",
                "name": {
                    "kind": "Name",
                    "value": "customer_find",
                    "loc": {
                        "start": 2713,
                        "end": 2726
                    }
                },
                "arguments": [
                    {
                        "kind": "InputValueDefinition",
                        "name": {
                            "kind": "Name",
                            "value": "offset",
                            "loc": {
                                "start": 2727,
                                "end": 2733
                            }
                        },
                        "type": {
                            "kind": "NamedType",
                            "name": {
                                "kind": "Name",
                                "value": "Int",
                                "loc": {
                                    "start": 2735,
                                    "end": 2738
                                }
                            },
                            "loc": {
                                "start": 2735,
                                "end": 2738
                            }
                        },
                        "defaultValue": null,
                        "directives": [],
                        "loc": {
                            "start": 2727,
                            "end": 2738
                        }
                    },
                    {
                        "kind": "InputValueDefinition",
                        "name": {
                            "kind": "Name",
                            "value": "limit",
                            "loc": {
                                "start": 2740,
                                "end": 2745
                            }
                        },
                        "type": {
                            "kind": "NamedType",
                            "name": {
                                "kind": "Name",
                                "value": "Int",
                                "loc": {
                                    "start": 2747,
                                    "end": 2750
                                }
                            },
                            "loc": {
                                "start": 2747,
                                "end": 2750
                            }
                        },
                        "defaultValue": null,
                        "directives": [],
                        "loc": {
                            "start": 2740,
                            "end": 2750
                        }
                    },
                    {
                        "kind": "InputValueDefinition",
                        "name": {
                            "kind": "Name",
                            "value": "_id",
                            "loc": {
                                "start": 2752,
                                "end": 2755
                            }
                        },
                        "type": {
                            "kind": "NamedType",
                            "name": {
                                "kind": "Name",
                                "value": "String",
                                "loc": {
                                    "start": 2757,
                                    "end": 2763
                                }
                            },
                            "loc": {
                                "start": 2757,
                                "end": 2763
                            }
                        },
                        "defaultValue": null,
                        "directives": [],
                        "loc": {
                            "start": 2752,
                            "end": 2763
                        }
                    }
                ],
                "type": {
                    "kind": "ListType",
                    "type": {
                        "kind": "NamedType",
                        "name": {
                            "kind": "Name",
                            "value": "customer",
                            "loc": {
                                "start": 2767,
                                "end": 2775
                            }
                        },
                        "loc": {
                            "start": 2767,
                            "end": 2775
                        }
                    },
                    "loc": {
                        "start": 2766,
                        "end": 2776
                    }
                },
                "directives": [],
                "loc": {
                    "start": 2713,
                    "end": 2776
                }
            },
            {
                "kind": "FieldDefinition",
                "name": {
                    "kind": "Name",
                    "value": "product_find",
                    "loc": {
                        "start": 2779,
                        "end": 2791
                    }
                },
                "arguments": [
                    {
                        "kind": "InputValueDefinition",
                        "name": {
                            "kind": "Name",
                            "value": "offset",
                            "loc": {
                                "start": 2792,
                                "end": 2798
                            }
                        },
                        "type": {
                            "kind": "NamedType",
                            "name": {
                                "kind": "Name",
                                "value": "Int",
                                "loc": {
                                    "start": 2800,
                                    "end": 2803
                                }
                            },
                            "loc": {
                                "start": 2800,
                                "end": 2803
                            }
                        },
                        "defaultValue": null,
                        "directives": [],
                        "loc": {
                            "start": 2792,
                            "end": 2803
                        }
                    },
                    {
                        "kind": "InputValueDefinition",
                        "name": {
                            "kind": "Name",
                            "value": "limit",
                            "loc": {
                                "start": 2805,
                                "end": 2810
                            }
                        },
                        "type": {
                            "kind": "NamedType",
                            "name": {
                                "kind": "Name",
                                "value": "Int",
                                "loc": {
                                    "start": 2812,
                                    "end": 2815
                                }
                            },
                            "loc": {
                                "start": 2812,
                                "end": 2815
                            }
                        },
                        "defaultValue": null,
                        "directives": [],
                        "loc": {
                            "start": 2805,
                            "end": 2815
                        }
                    },
                    {
                        "kind": "InputValueDefinition",
                        "name": {
                            "kind": "Name",
                            "value": "_id",
                            "loc": {
                                "start": 2817,
                                "end": 2820
                            }
                        },
                        "type": {
                            "kind": "NamedType",
                            "name": {
                                "kind": "Name",
                                "value": "String",
                                "loc": {
                                    "start": 2822,
                                    "end": 2828
                                }
                            },
                            "loc": {
                                "start": 2822,
                                "end": 2828
                            }
                        },
                        "defaultValue": null,
                        "directives": [],
                        "loc": {
                            "start": 2817,
                            "end": 2828
                        }
                    }
                ],
                "type": {
                    "kind": "ListType",
                    "type": {
                        "kind": "NamedType",
                        "name": {
                            "kind": "Name",
                            "value": "product",
                            "loc": {
                                "start": 2832,
                                "end": 2839
                            }
                        },
                        "loc": {
                            "start": 2832,
                            "end": 2839
                        }
                    },
                    "loc": {
                        "start": 2831,
                        "end": 2840
                    }
                },
                "directives": [],
                "loc": {
                    "start": 2779,
                    "end": 2840
                }
            }
        ],
        "loc": {
            "start": 2570,
            "end": 2842
        }
    }
],
    "loc": {
    "start": 0,
        "end": 2843
}
}