export const idfClasses = {
  "data": [
      {
          "class_id": 822,
          "class_name": "Version",
          "memo": " Specifies the EnergyPlus version of the IDF file.",
          "group_name": "Simulation Parameters",
          "group_id": 1
      },
      {
          "class_id": 823,
          "class_name": "SimulationControl",
          "memo": " Note that the following 3 fields are related to the Sizing:Zone, Sizing:System, and Sizing:Plant objects. Having these fields set to Yes but no corresponding Sizing object will not cause the sizing to be done. However, having any of these fields set to N",
          "group_name": "Simulation Parameters",
          "group_id": 1
      },
      {
          "class_id": 824,
          "class_name": "PerformancePrecisionTradeoffs",
          "memo": " This object enables users to choose certain options that speed up EnergyPlus simulation, but may lead to small decreases in accuracy of results.",
          "group_name": "Simulation Parameters",
          "group_id": 1
      },
      {
          "class_id": 825,
          "class_name": "Building",
          "memo": " Describes parameters that are used during the simulation of the building. There are necessary correlations between the entries for this object and some entries in the Site:WeatherStation and Site:HeightVariation objects, specifically the Terrain field.",
          "group_name": "Simulation Parameters",
          "group_id": 1
      },
      {
          "class_id": 826,
          "class_name": "ShadowCalculation",
          "memo": " This object is used to control details of the solar, shading, and daylighting models",
          "group_name": "Simulation Parameters",
          "group_id": 1
      },
      {
          "class_id": 827,
          "class_name": "SurfaceConvectionAlgorithm:Inside",
          "memo": " Default indoor surface heat transfer convection algorithm to be used for all zones",
          "group_name": "Simulation Parameters",
          "group_id": 1
      },
      {
          "class_id": 828,
          "class_name": "SurfaceConvectionAlgorithm:Outside",
          "memo": " Default outside surface heat transfer convection algorithm to be used for all zones",
          "group_name": "Simulation Parameters",
          "group_id": 1
      },
      {
          "class_id": 829,
          "class_name": "HeatBalanceAlgorithm",
          "memo": " Determines which Heat Balance Algorithm will be used ie. CTF (Conduction Transfer Functions), EMPD (Effective Moisture Penetration Depth with Conduction Transfer Functions). Advanced/Research Usage: CondFD (Conduction Finite Difference) Advanced/Research",
          "group_name": "Simulation Parameters",
          "group_id": 1
      },
      {
          "class_id": 830,
          "class_name": "HeatBalanceSettings:ConductionFiniteDifference",
          "memo": " Determines settings for the Conduction Finite Difference algorithm for surface heat transfer modeling.",
          "group_name": "Simulation Parameters",
          "group_id": 1
      },
      {
          "class_id": 831,
          "class_name": "ZoneAirHeatBalanceAlgorithm",
          "memo": " Determines which algorithm will be used to solve the zone air heat balance.",
          "group_name": "Simulation Parameters",
          "group_id": 1
      },
      {
          "class_id": 832,
          "class_name": "ZoneAirContaminantBalance",
          "memo": " Determines which contaminant concentration will be simulates.",
          "group_name": "Simulation Parameters",
          "group_id": 1
      },
      {
          "class_id": 833,
          "class_name": "ZoneAirMassFlowConservation",
          "memo": " Enforces the zone air mass flow balance by either adjusting zone mixing object flow only, adjusting zone total return flow only, zone mixing and the zone total return flows, or adjusting the zone total return and zone mixing object flows. Zone infiltrati",
          "group_name": "Simulation Parameters",
          "group_id": 1
      },
      {
          "class_id": 834,
          "class_name": "ZoneCapacitanceMultiplier:ResearchSpecial",
          "memo": " Multiplier altering the relative capacitance of the air compared to an empty zone",
          "group_name": "Simulation Parameters",
          "group_id": 1
      },
      {
          "class_id": 835,
          "class_name": "Timestep",
          "memo": " Specifies the \"basic\" timestep for the simulation. The value entered here is also known as the Zone Timestep. This is used in the Zone Heat Balance Model calculation as the driving timestep for heat transfer and load calculations.",
          "group_name": "Simulation Parameters",
          "group_id": 1
      },
      {
          "class_id": 836,
          "class_name": "ConvergenceLimits",
          "memo": " Specifies limits on HVAC system simulation timesteps and iterations. This item is an advanced feature that should be used only with caution.",
          "group_name": "Simulation Parameters",
          "group_id": 1
      },
      {
          "class_id": 837,
          "class_name": "HVACSystemRootFindingAlgorithm",
          "memo": " Specifies a HVAC system solver algorithm to find a root",
          "group_name": "Simulation Parameters",
          "group_id": 1
      },
      {
          "class_id": 838,
          "class_name": "Compliance:Building",
          "memo": " Building level inputs related to compliance to building standards, building codes, and beyond energy code programs.",
          "group_name": "Compliance Objects",
          "group_id": 2
      },
      {
          "class_id": 839,
          "class_name": "Site:Location",
          "memo": " Specifies the building's location. Only one location is allowed. Weather data file location, if it exists, will override this object.",
          "group_name": "Location and Climate",
          "group_id": 3
      },
      {
          "class_id": 840,
          "class_name": "Site:VariableLocation",
          "memo": " Captures the scheduling of a moving/reorienting building, or more likely a vessel",
          "group_name": "Location and Climate",
          "group_id": 3
      },
      {
          "class_id": 841,
          "class_name": "SizingPeriod:DesignDay",
          "memo": " The design day object creates the parameters for the program to create the 24 hour weather profile that can be used for sizing as well as running to test the other simulation parameters. Parameters in this include a date (month and day), a day type (whic",
          "group_name": "Location and Climate",
          "group_id": 3
      },
      {
          "class_id": 842,
          "class_name": "SizingPeriod:WeatherFileDays",
          "memo": " Use a weather file period for design sizing calculations.",
          "group_name": "Location and Climate",
          "group_id": 3
      },
      {
          "class_id": 843,
          "class_name": "SizingPeriod:WeatherFileConditionType",
          "memo": " Use a weather file period for design sizing calculations. EPW weather files are created with typical and extreme periods created heuristically from the weather file data. For more details on these periods, see AuxiliaryPrograms document.",
          "group_name": "Location and Climate",
          "group_id": 3
      },
      {
          "class_id": 844,
          "class_name": "RunPeriod",
          "memo": " Specify a range of dates and other parameters for a simulation. Multiple run periods may be input, but they may not overlap.",
          "group_name": "Location and Climate",
          "group_id": 3
      },
      {
          "class_id": 845,
          "class_name": "RunPeriodControl:SpecialDays",
          "memo": " This object sets up holidays/special days to be used during weather file run periods. (These are not used with SizingPeriod:* objects.) Depending on the value in the run period, days on the weather file may also be used. However, the weather file specifi",
          "group_name": "Location and Climate",
          "group_id": 3
      },
      {
          "class_id": 846,
          "class_name": "RunPeriodControl:DaylightSavingTime",
          "memo": " This object sets up the daylight saving time period for any RunPeriod. Ignores any daylight saving time period on the weather file and uses this definition. These are not used with SizingPeriod:DesignDay objects. Use with SizingPeriod:WeatherFileDays obj",
          "group_name": "Location and Climate",
          "group_id": 3
      },
      {
          "class_id": 847,
          "class_name": "WeatherProperty:SkyTemperature",
          "memo": " This object is used to override internal sky temperature calculations.",
          "group_name": "Location and Climate",
          "group_id": 3
      },
      {
          "class_id": 848,
          "class_name": "Site:WeatherStation",
          "memo": " This object should only be used for non-standard weather data. Standard weather data such as TMY2, IWEC, and ASHRAE design day data are all measured at the default conditions and do not require this object.",
          "group_name": "Location and Climate",
          "group_id": 3
      },
      {
          "class_id": 849,
          "class_name": "Site:HeightVariation",
          "memo": " This object is used if the user requires advanced control over height-dependent variations in wind speed and temperature. When this object is not present, the default model for temperature dependence on height is used, and the wind speed is modeled accor",
          "group_name": "Location and Climate",
          "group_id": 3
      },
      {
          "class_id": 850,
          "class_name": "Site:GroundTemperature:BuildingSurface",
          "memo": " These temperatures are specifically for those surfaces that have the outside environment of \"Ground\". Documentation about what values these should be is located in the Auxiliary programs document (Ground Heat Transfer) as well as the InputOutput Referenc",
          "group_name": "Location and Climate",
          "group_id": 3
      },
      {
          "class_id": 851,
          "class_name": "Site:GroundTemperature:FCfactorMethod",
          "memo": " These temperatures are specifically for underground walls and ground floors defined with the C-factor and F-factor methods, and should be close to the monthly average outdoor air temperature delayed by 3 months for the location.",
          "group_name": "Location and Climate",
          "group_id": 3
      },
      {
          "class_id": 852,
          "class_name": "Site:GroundTemperature:Shallow",
          "memo": " These temperatures are specifically for the Surface Ground Heat Exchanger and should probably be close to the average outdoor air temperature for the location. They are not used in other models.",
          "group_name": "Location and Climate",
          "group_id": 3
      },
      {
          "class_id": 853,
          "class_name": "Site:GroundTemperature:Deep",
          "memo": " These temperatures are specifically for the ground heat exchangers that would use \"deep\" (3-4 m depth) ground temperatures for their heat source. They are not used in other models.",
          "group_name": "Location and Climate",
          "group_id": 3
      },
      {
          "class_id": 854,
          "class_name": "Site:GroundTemperature:Undisturbed:FiniteDifference",
          "memo": " Undisturbed ground temperature object using a detailed finite difference 1-D model",
          "group_name": "Location and Climate",
          "group_id": 3
      },
      {
          "class_id": 855,
          "class_name": "Site:GroundTemperature:Undisturbed:KusudaAchenbach",
          "memo": " Undisturbed ground temperature object using the Kusuda-Achenbach 1965 correlation.",
          "group_name": "Location and Climate",
          "group_id": 3
      },
      {
          "class_id": 856,
          "class_name": "Site:GroundTemperature:Undisturbed:Xing",
          "memo": " Undisturbed ground temperature object using the Xing 2014 2 harmonic parameter model.",
          "group_name": "Location and Climate",
          "group_id": 3
      },
      {
          "class_id": 857,
          "class_name": "Site:GroundDomain:Slab",
          "memo": " Ground-coupled slab model for on-grade and in-grade cases with or without insulation.",
          "group_name": "Location and Climate",
          "group_id": 3
      },
      {
          "class_id": 858,
          "class_name": "Site:GroundDomain:Basement",
          "memo": " Ground-coupled basement model for simulating basements or other underground zones.",
          "group_name": "Location and Climate",
          "group_id": 3
      },
      {
          "class_id": 859,
          "class_name": "Site:GroundReflectance",
          "memo": " Specifies the ground reflectance values used to calculate ground reflected solar. The ground reflectance can be further modified when snow is on the ground by Site:GroundReflectance:SnowModifier.",
          "group_name": "Location and Climate",
          "group_id": 3
      },
      {
          "class_id": 860,
          "class_name": "Site:GroundReflectance:SnowModifier",
          "memo": " Specifies ground reflectance multipliers when snow resident on the ground. These multipliers are applied to the \"normal\" ground reflectances specified in Site:GroundReflectance.",
          "group_name": "Location and Climate",
          "group_id": 3
      },
      {
          "class_id": 861,
          "class_name": "Site:WaterMainsTemperature",
          "memo": " Used to calculate water mains temperatures delivered by underground water main pipes. Water mains temperatures are a function of outdoor climate conditions and vary with time of year.",
          "group_name": "Location and Climate",
          "group_id": 3
      },
      {
          "class_id": 862,
          "class_name": "Site:Precipitation",
          "memo": " Used to describe the amount of water precipitation at the building site. Precipitation includes both rain and the equivalent water content of snow.",
          "group_name": "Location and Climate",
          "group_id": 3
      },
      {
          "class_id": 863,
          "class_name": "RoofIrrigation",
          "memo": " Used to describe the amount of irrigation on the ecoroof surface over the course of the simulation runperiod.",
          "group_name": "Location and Climate",
          "group_id": 3
      },
      {
          "class_id": 864,
          "class_name": "Site:SolarAndVisibleSpectrum",
          "memo": " If this object is omitted, the default solar and visible spectrum data will be used.",
          "group_name": "Location and Climate",
          "group_id": 3
      },
      {
          "class_id": 865,
          "class_name": "Site:SpectrumData",
          "memo": " Spectrum Data Type is followed by up to 107 sets of normal-incidence measured values of [wavelength, spectrum] for wavelengths covering the solar (0.25 to 2.5 microns) or visible spectrum (0.38 to 0.78 microns)",
          "group_name": "Location and Climate",
          "group_id": 3
      },
      {
          "class_id": 866,
          "class_name": "ScheduleTypeLimits",
          "memo": " ScheduleTypeLimits specifies the data types and limits for the values contained in schedules",
          "group_name": "Schedules",
          "group_id": 4
      },
      {
          "class_id": 867,
          "class_name": "Schedule:Day:Hourly",
          "memo": " A Schedule:Day:Hourly contains 24 values for each hour of the day.",
          "group_name": "Schedules",
          "group_id": 4
      },
      {
          "class_id": 868,
          "class_name": "Schedule:Day:Interval",
          "memo": " A Schedule:Day:Interval contains a full day of values with specified end times for each value Currently, is set up to allow for 10 minute intervals for an entire day.",
          "group_name": "Schedules",
          "group_id": 4
      },
      {
          "class_id": 869,
          "class_name": "Schedule:Day:List",
          "memo": " Schedule:Day:List will allow the user to list 24 hours worth of values, which can be sub-hourly in nature.",
          "group_name": "Schedules",
          "group_id": 4
      },
      {
          "class_id": 870,
          "class_name": "Schedule:Week:Daily",
          "memo": " A Schedule:Week:Daily contains 12 Schedule:Day:Hourly objects, one for each day type.",
          "group_name": "Schedules",
          "group_id": 4
      },
      {
          "class_id": 871,
          "class_name": "Schedule:Week:Compact",
          "memo": " Compact definition for Schedule:Day:List",
          "group_name": "Schedules",
          "group_id": 4
      },
      {
          "class_id": 872,
          "class_name": "Schedule:Year",
          "memo": " A Schedule:Year contains from 1 to 52 week schedules",
          "group_name": "Schedules",
          "group_id": 4
      },
      {
          "class_id": 873,
          "class_name": "Schedule:Compact",
          "memo": " Irregular object. Does not follow the usual definition for fields. Fields A3... are: Through: Date For: Applicable days (ref: Schedule:Week:Compact) Interpolate: Average/Linear/No (ref: Schedule:Day:Interval) -- optional, if not used will be \"No\" Until: ",
          "group_name": "Schedules",
          "group_id": 4
      },
      {
          "class_id": 874,
          "class_name": "Schedule:Constant",
          "memo": " Constant hourly value for entire year.",
          "group_name": "Schedules",
          "group_id": 4
      },
      {
          "class_id": 875,
          "class_name": "Schedule:File:Shading",
          "memo": " A Schedule:File:Shading points to a CSV file that has 8760-8784 hours of sunlit fraction data for all or some of the exterior surfaces.",
          "group_name": "Schedules",
          "group_id": 4
      },
      {
          "class_id": 876,
          "class_name": "Schedule:File",
          "memo": " A Schedule:File points to a text computer file that has 8760-8784 hours of data.",
          "group_name": "Schedules",
          "group_id": 4
      },
      {
          "class_id": 877,
          "class_name": "Material",
          "memo": " Regular materials described with full set of thermal properties",
          "group_name": "Surface Construction Elements",
          "group_id": 5
      },
      {
          "class_id": 878,
          "class_name": "Material:NoMass",
          "memo": " Regular materials properties described whose principal description is R (Thermal Resistance)",
          "group_name": "Surface Construction Elements",
          "group_id": 5
      },
      {
          "class_id": 879,
          "class_name": "Material:InfraredTransparent",
          "memo": " Special infrared transparent material. Similar to a Material:Nomass with low thermal resistance. High absorptance in both wavelengths. Area will be doubled internally to make internal radiant exchange accurate. Should be only material in single layer sur",
          "group_name": "Surface Construction Elements",
          "group_id": 5
      },
      {
          "class_id": 880,
          "class_name": "Material:AirGap",
          "memo": " Air Space in Opaque Construction",
          "group_name": "Surface Construction Elements",
          "group_id": 5
      },
      {
          "class_id": 881,
          "class_name": "Material:RoofVegetation",
          "memo": " EcoRoof model, plant layer plus soil layer Implemented by Portland State University (Sailor et al., January, 2007) only one material must be referenced per simulation though the same EcoRoof material could be used in multiple constructions. New moisture ",
          "group_name": "Surface Construction Elements",
          "group_id": 5
      },
      {
          "class_id": 882,
          "class_name": "WindowMaterial:SimpleGlazingSystem",
          "memo": " Alternate method of describing windows This window material object is used to define an entire glazing system using simple performance parameters.",
          "group_name": "Surface Construction Elements",
          "group_id": 5
      },
      {
          "class_id": 883,
          "class_name": "WindowMaterial:Glazing",
          "memo": " Glass material properties for Windows or Glass Doors Transmittance/Reflectance input method.",
          "group_name": "Surface Construction Elements",
          "group_id": 5
      },
      {
          "class_id": 884,
          "class_name": "WindowMaterial:GlazingGroup:Thermochromic",
          "memo": " thermochromic glass at different temperatures",
          "group_name": "Surface Construction Elements",
          "group_id": 5
      },
      {
          "class_id": 885,
          "class_name": "WindowMaterial:Glazing:RefractionExtinctionMethod",
          "memo": " Glass material properties for Windows or Glass Doors Index of Refraction/Extinction Coefficient input method Not to be used for coated glass",
          "group_name": "Surface Construction Elements",
          "group_id": 5
      },
      {
          "class_id": 886,
          "class_name": "WindowMaterial:Gas",
          "memo": " Gas material properties that are used in Windows or Glass Doors",
          "group_name": "Surface Construction Elements",
          "group_id": 5
      },
      {
          "class_id": 887,
          "class_name": "WindowGap:SupportPillar",
          "memo": " used to define pillar geometry for support pillars",
          "group_name": "Surface Construction Elements",
          "group_id": 5
      },
      {
          "class_id": 888,
          "class_name": "WindowGap:DeflectionState",
          "memo": " Used to enter data describing deflection state of the gap. It is referenced from WindowMaterial:Gap object only and it is used only when deflection model is set to MeasuredDeflection, otherwise it is ignored.",
          "group_name": "Surface Construction Elements",
          "group_id": 5
      },
      {
          "class_id": 889,
          "class_name": "WindowMaterial:GasMixture",
          "memo": " Gas mixtures that are used in Windows or Glass Doors",
          "group_name": "Surface Construction Elements",
          "group_id": 5
      },
      {
          "class_id": 890,
          "class_name": "WindowMaterial:Gap",
          "memo": " Used to define the gap between two layers in a complex fenestration system, where the Construction:ComplexFenestrationState object is used. It is referenced as a layer in the Construction:ComplexFenestrationState object. It cannot be referenced as a laye",
          "group_name": "Surface Construction Elements",
          "group_id": 5
      },
      {
          "class_id": 891,
          "class_name": "WindowMaterial:Shade",
          "memo": " Specifies the properties of window shade materials. Reflectance and emissivity properties are assumed to be the same on both sides of the shade. Shades are considered to be perfect diffusers (all transmitted and reflected radiation is hemispherically-dif",
          "group_name": "Surface Construction Elements",
          "group_id": 5
      },
      {
          "class_id": 892,
          "class_name": "WindowMaterial:ComplexShade",
          "memo": " Complex window shading layer thermal properties",
          "group_name": "Surface Construction Elements",
          "group_id": 5
      },
      {
          "class_id": 893,
          "class_name": "WindowMaterial:Blind",
          "memo": " Window blind thermal properties",
          "group_name": "Surface Construction Elements",
          "group_id": 5
      },
      {
          "class_id": 894,
          "class_name": "WindowMaterial:Screen",
          "memo": " Window screen physical properties. Can only be located on the exterior side of a window construction.",
          "group_name": "Surface Construction Elements",
          "group_id": 5
      },
      {
          "class_id": 895,
          "class_name": "WindowMaterial:Shade:EquivalentLayer",
          "memo": " Specifies the properties of equivalent layer window shade material Shades are considered to be perfect diffusers (all transmitted and reflected radiation is hemispherically-diffuse) independent of angle of incidence. Shade represents roller blinds.",
          "group_name": "Surface Construction Elements",
          "group_id": 5
      },
      {
          "class_id": 896,
          "class_name": "WindowMaterial:Drape:EquivalentLayer",
          "memo": " Specifies the properties of equivalent layer drape fabric materials. Shades are considered to be perfect diffusers (all transmitted and reflected radiation is hemispherically-diffuse) independent of angle of incidence. unpleated drape fabric is treated a",
          "group_name": "Surface Construction Elements",
          "group_id": 5
      },
      {
          "class_id": 897,
          "class_name": "WindowMaterial:Blind:EquivalentLayer",
          "memo": " Window equivalent layer blind slat optical and thermal properties. The model assumes that slats are thin and flat, applies correction empirical correlation to account for curvature effect. Slats are assumed to transmit and reflect diffusely.",
          "group_name": "Surface Construction Elements",
          "group_id": 5
      },
      {
          "class_id": 898,
          "class_name": "WindowMaterial:Screen:EquivalentLayer",
          "memo": " Equivalent layer window screen physical properties. Can only be located on the exterior side of a window construction.",
          "group_name": "Surface Construction Elements",
          "group_id": 5
      },
      {
          "class_id": 899,
          "class_name": "WindowMaterial:Glazing:EquivalentLayer",
          "memo": " Glass material properties for Windows or Glass Doors Transmittance/Reflectance input method.",
          "group_name": "Surface Construction Elements",
          "group_id": 5
      },
      {
          "class_id": 900,
          "class_name": "WindowMaterial:Gap:EquivalentLayer",
          "memo": " Gas material properties that are used in Windows Equivalent Layer References only WindowMaterial:Gas properties",
          "group_name": "Surface Construction Elements",
          "group_id": 5
      },
      {
          "class_id": 901,
          "class_name": "MaterialProperty:MoisturePenetrationDepth:Settings",
          "memo": " Additional properties for moisture using EMPD procedure HeatBalanceAlgorithm choice=MoisturePenetrationDepthConductionTransferFunction only Has no effect with other HeatBalanceAlgorithm solution algorithms",
          "group_name": "Surface Construction Elements",
          "group_id": 5
      },
      {
          "class_id": 902,
          "class_name": "MaterialProperty:PhaseChange",
          "memo": " Additional properties for temperature dependent thermal conductivity and enthalpy for Phase Change Materials (PCM) HeatBalanceAlgorithm = CondFD(ConductionFiniteDifference) solution algorithm only. Constructions with this should use the detailed CondFD p",
          "group_name": "Surface Construction Elements",
          "group_id": 5
      },
      {
          "class_id": 903,
          "class_name": "MaterialProperty:PhaseChangeHysteresis",
          "memo": " Additional properties for temperature dependent thermal conductivity and enthalpy for Phase Change Materials (PCM) with separate melting and freezing curves. HeatBalanceAlgorithm = CondFD (ConductionFiniteDifference) solution algorithm only. Construction",
          "group_name": "Surface Construction Elements",
          "group_id": 5
      },
      {
          "class_id": 904,
          "class_name": "MaterialProperty:VariableThermalConductivity",
          "memo": " Additional properties for temperature dependent thermal conductivity using piecewise linear temperature-conductivity function. HeatBalanceAlgorithm = CondFD(ConductionFiniteDifference) solution algorithm only. Has no effect with other HeatBalanceAlgorith",
          "group_name": "Surface Construction Elements",
          "group_id": 5
      },
      {
          "class_id": 905,
          "class_name": "MaterialProperty:HeatAndMoistureTransfer:Settings",
          "memo": " HeatBalanceAlgorithm = CombinedHeatAndMoistureFiniteElement solution algorithm only. Additional material properties for surfaces. Has no effect with other HeatBalanceAlgorithm solution algorithms",
          "group_name": "Surface Construction Elements",
          "group_id": 5
      },
      {
          "class_id": 906,
          "class_name": "MaterialProperty:HeatAndMoistureTransfer:SorptionIsotherm",
          "memo": " HeatBalanceAlgorithm = CombinedHeatAndMoistureFiniteElement solution algorithm only. Relationship between moisture content and relative humidity fraction. Has no effect with other HeatBalanceAlgorithm solution algorithms",
          "group_name": "Surface Construction Elements",
          "group_id": 5
      },
      {
          "class_id": 907,
          "class_name": "MaterialProperty:HeatAndMoistureTransfer:Suction",
          "memo": " HeatBalanceAlgorithm = CombinedHeatAndMoistureFiniteElement solution algorithm only. Relationship between liquid suction transport coefficient and moisture content Has no effect with other HeatBalanceAlgorithm solution algorithms",
          "group_name": "Surface Construction Elements",
          "group_id": 5
      },
      {
          "class_id": 908,
          "class_name": "MaterialProperty:HeatAndMoistureTransfer:Redistribution",
          "memo": " HeatBalanceAlgorithm = CombinedHeatAndMoistureFiniteElement solution algorithm only. Relationship between liquid transport coefficient and moisture content Has no effect with other HeatBalanceAlgorithm solution algorithms",
          "group_name": "Surface Construction Elements",
          "group_id": 5
      },
      {
          "class_id": 909,
          "class_name": "MaterialProperty:HeatAndMoistureTransfer:Diffusion",
          "memo": " HeatBalanceAlgorithm = CombinedHeatAndMoistureFiniteElement solution algorithm only. Relationship between water vapor diffusion and relative humidity fraction Has no effect with other HeatBalanceAlgorithm solution algorithms",
          "group_name": "Surface Construction Elements",
          "group_id": 5
      },
      {
          "class_id": 910,
          "class_name": "MaterialProperty:HeatAndMoistureTransfer:ThermalConductivity",
          "memo": " HeatBalanceAlgorithm = CombinedHeatAndMoistureFiniteElement solution algorithm only. Relationship between thermal conductivity and moisture content Has no effect with other HeatBalanceAlgorithm solution algorithms",
          "group_name": "Surface Construction Elements",
          "group_id": 5
      },
      {
          "class_id": 911,
          "class_name": "MaterialProperty:GlazingSpectralData",
          "memo": " Name is followed by up to 800 sets of normal-incidence measured values of [wavelength, transmittance, front reflectance, back reflectance] for wavelengths covering the solar spectrum (from about 0.25 to 2.5 microns)",
          "group_name": "Surface Construction Elements",
          "group_id": 5
      },
      {
          "class_id": 912,
          "class_name": "Construction",
          "memo": " Start with outside layer and work your way to the inside layer Up to 10 layers total, 8 for windows Enter the material name for each layer",
          "group_name": "Surface Construction Elements",
          "group_id": 5
      },
      {
          "class_id": 913,
          "class_name": "Construction:CfactorUndergroundWall",
          "memo": " Alternate method of describing underground wall constructions",
          "group_name": "Surface Construction Elements",
          "group_id": 5
      },
      {
          "class_id": 914,
          "class_name": "Construction:FfactorGroundFloor",
          "memo": " Alternate method of describing slab-on-grade or underground floor constructions",
          "group_name": "Surface Construction Elements",
          "group_id": 5
      },
      {
          "class_id": 915,
          "class_name": "ConstructionProperty:InternalHeatSource",
          "memo": " Internal heat source to be attached to a construction layer",
          "group_name": "Surface Construction Elements",
          "group_id": 5
      },
      {
          "class_id": 916,
          "class_name": "Construction:AirBoundary",
          "memo": " Indicates an open boundary between two zones. It may be used for base surfaces and fenestration surfaces. The two adjacent zones are grouped together for solar, daylighting and radiant exchange. When this construction type is used, the Outside Boundary C",
          "group_name": "Surface Construction Elements",
          "group_id": 5
      },
      {
          "class_id": 917,
          "class_name": "WindowThermalModel:Params",
          "memo": " object is used to select which thermal model should be used in tarcog simulations",
          "group_name": "Surface Construction Elements",
          "group_id": 5
      },
      {
          "class_id": 918,
          "class_name": "WindowsCalculationEngine",
          "memo": " Describes which window model will be used in calculations. Built in windows model will use algorithms that are part of EnergyPlus, while ExternalWindowsModel will use Windows-CalcEngine library to perform optical and thermal performances of windows and d",
          "group_name": "Surface Construction Elements",
          "group_id": 5
      },
      {
          "class_id": 919,
          "class_name": "Construction:ComplexFenestrationState",
          "memo": " Describes one state for a complex glazing system These input objects are typically generated by using WINDOW software and export to IDF syntax",
          "group_name": "Surface Construction Elements",
          "group_id": 5
      },
      {
          "class_id": 920,
          "class_name": "Construction:WindowEquivalentLayer",
          "memo": " Start with outside layer and work your way to the inside Layer Up to 11 layers total. Up to six solid layers and up to five gaps. Enter the material name for each layer",
          "group_name": "Surface Construction Elements",
          "group_id": 5
      },
      {
          "class_id": 921,
          "class_name": "Construction:WindowDataFile",
          "memo": " Initiates search of the Window data file for a window called Name.",
          "group_name": "Surface Construction Elements",
          "group_id": 5
      },
      {
          "class_id": 922,
          "class_name": "GlobalGeometryRules",
          "memo": " Specifies the geometric rules used to describe the input of surface vertices and daylighting reference points.",
          "group_name": "Thermal Zones and Surfaces",
          "group_id": 6
      },
      {
          "class_id": 923,
          "class_name": "GeometryTransform",
          "memo": " Provides a simple method of altering the footprint geometry of a model. The intent is to provide a single parameter that can be used to reshape the building description contained in the rest of the input file.",
          "group_name": "Thermal Zones and Surfaces",
          "group_id": 6
      },
      {
          "class_id": 924,
          "class_name": "Space",
          "memo": " Defines a space (room) in the building. All Spaces are part of a Zone. Every Zone contains one or more spaces. Space is an optional input. If a Zone has no Space(s) specified in input then a default Space named <Zone Name> will be created. If some surfac",
          "group_name": "Thermal Zones and Surfaces",
          "group_id": 6
      },
      {
          "class_id": 925,
          "class_name": "SpaceList",
          "memo": " Defines a list of Spaces which can be referenced as a group. The SpaceList name may be used elsewhere in the input to apply a parameter to all Spaces in the list. SpaceLists can be used effectively with the following objects: InternalMass, People, Lights",
          "group_name": "Thermal Zones and Surfaces",
          "group_id": 6
      },
      {
          "class_id": 926,
          "class_name": "Zone",
          "memo": " Defines a thermal zone of the building. Every zone contains one or more Spaces. Space is an optional input. If a Zone has no Space(s) specified in input then a default Space named <Zone Name> will be created. If some surfaces in a Zone are assigned to a ",
          "group_name": "Thermal Zones and Surfaces",
          "group_id": 6
      },
      {
          "class_id": 927,
          "class_name": "ZoneList",
          "memo": " Defines a list of thermal zones which can be referenced as a group. The ZoneList name may be used elsewhere in the input to apply a parameter to all zones in the list. ZoneLists can be used effectively with the following objects: People, Lights, Electric",
          "group_name": "Thermal Zones and Surfaces",
          "group_id": 6
      },
      {
          "class_id": 928,
          "class_name": "ZoneGroup",
          "memo": " Adds a multiplier to a ZoneList. This can be used to reduce the amount of input necessary for simulating repetitive structures, such as the identical floors of a multi-story building.",
          "group_name": "Thermal Zones and Surfaces",
          "group_id": 6
      },
      {
          "class_id": 929,
          "class_name": "BuildingSurface:Detailed",
          "memo": " Allows for detailed entry of building heat transfer surfaces. Does not include subsurfaces such as windows or doors.",
          "group_name": "Thermal Zones and Surfaces",
          "group_id": 6
      },
      {
          "class_id": 930,
          "class_name": "Wall:Detailed",
          "memo": " Allows for detailed entry of wall heat transfer surfaces.",
          "group_name": "Thermal Zones and Surfaces",
          "group_id": 6
      },
      {
          "class_id": 931,
          "class_name": "RoofCeiling:Detailed",
          "memo": " Allows for detailed entry of roof/ceiling heat transfer surfaces.",
          "group_name": "Thermal Zones and Surfaces",
          "group_id": 6
      },
      {
          "class_id": 932,
          "class_name": "Floor:Detailed",
          "memo": " Allows for detailed entry of floor heat transfer surfaces.",
          "group_name": "Thermal Zones and Surfaces",
          "group_id": 6
      },
      {
          "class_id": 933,
          "class_name": "Wall:Exterior",
          "memo": " Allows for simplified entry of exterior walls. View Factor to Ground is automatically calculated.",
          "group_name": "Thermal Zones and Surfaces",
          "group_id": 6
      },
      {
          "class_id": 934,
          "class_name": "Wall:Adiabatic",
          "memo": " Allows for simplified entry of interior walls.",
          "group_name": "Thermal Zones and Surfaces",
          "group_id": 6
      },
      {
          "class_id": 935,
          "class_name": "Wall:Underground",
          "memo": " Allows for simplified entry of underground walls.",
          "group_name": "Thermal Zones and Surfaces",
          "group_id": 6
      },
      {
          "class_id": 936,
          "class_name": "Wall:Interzone",
          "memo": " Allows for simplified entry of interzone walls (walls between zones).",
          "group_name": "Thermal Zones and Surfaces",
          "group_id": 6
      },
      {
          "class_id": 937,
          "class_name": "Roof",
          "memo": " Allows for simplified entry of roofs (exterior). View Factor to Ground is automatically calculated.",
          "group_name": "Thermal Zones and Surfaces",
          "group_id": 6
      },
      {
          "class_id": 938,
          "class_name": "Ceiling:Adiabatic",
          "memo": " Allows for simplified entry of interior ceilings.",
          "group_name": "Thermal Zones and Surfaces",
          "group_id": 6
      },
      {
          "class_id": 939,
          "class_name": "Ceiling:Interzone",
          "memo": " Allows for simplified entry of ceilings using adjacent zone (interzone) heat transfer - adjacent surface should be a floor",
          "group_name": "Thermal Zones and Surfaces",
          "group_id": 6
      },
      {
          "class_id": 940,
          "class_name": "Floor:GroundContact",
          "memo": " Allows for simplified entry of exterior floors with ground contact. View Factors to Ground is automatically calculated.",
          "group_name": "Thermal Zones and Surfaces",
          "group_id": 6
      },
      {
          "class_id": 941,
          "class_name": "Floor:Adiabatic",
          "memo": " Allows for simplified entry of exterior floors ignoring ground contact or interior floors. View Factor to Ground is automatically calculated.",
          "group_name": "Thermal Zones and Surfaces",
          "group_id": 6
      },
      {
          "class_id": 942,
          "class_name": "Floor:Interzone",
          "memo": " Allows for simplified entry of floors using adjacent zone (interzone) heat transfer - adjacent surface should be a ceiling.",
          "group_name": "Thermal Zones and Surfaces",
          "group_id": 6
      },
      {
          "class_id": 943,
          "class_name": "FenestrationSurface:Detailed",
          "memo": " Allows for detailed entry of subsurfaces (windows, doors, glass doors, tubular daylighting devices).",
          "group_name": "Thermal Zones and Surfaces",
          "group_id": 6
      },
      {
          "class_id": 944,
          "class_name": "Window",
          "memo": " Allows for simplified entry of Windows.",
          "group_name": "Thermal Zones and Surfaces",
          "group_id": 6
      },
      {
          "class_id": 945,
          "class_name": "Door",
          "memo": " Allows for simplified entry of opaque Doors.",
          "group_name": "Thermal Zones and Surfaces",
          "group_id": 6
      },
      {
          "class_id": 946,
          "class_name": "GlazedDoor",
          "memo": " Allows for simplified entry of glass Doors.",
          "group_name": "Thermal Zones and Surfaces",
          "group_id": 6
      },
      {
          "class_id": 947,
          "class_name": "Window:Interzone",
          "memo": " Allows for simplified entry of interzone windows (adjacent to other zones).",
          "group_name": "Thermal Zones and Surfaces",
          "group_id": 6
      },
      {
          "class_id": 948,
          "class_name": "Door:Interzone",
          "memo": " Allows for simplified entry of interzone (opaque interior) doors (adjacent to other zones).",
          "group_name": "Thermal Zones and Surfaces",
          "group_id": 6
      },
      {
          "class_id": 949,
          "class_name": "GlazedDoor:Interzone",
          "memo": " Allows for simplified entry of interzone (glass interior) doors (adjacent to other zones).",
          "group_name": "Thermal Zones and Surfaces",
          "group_id": 6
      },
      {
          "class_id": 950,
          "class_name": "WindowShadingControl",
          "memo": " Specifies the type, location, and controls for window shades, window blinds, and switchable glazing. Referencing the surface objects for exterior windows and glass doors (ref: FenestrationSurface:Detailed, Window, and GlazedDoor).",
          "group_name": "Thermal Zones and Surfaces",
          "group_id": 6
      },
      {
          "class_id": 951,
          "class_name": "WindowProperty:FrameAndDivider",
          "memo": " Specifies the dimensions of a window frame, dividers, and inside reveal surfaces. Referenced by the surface objects for exterior windows and glass doors (ref: FenestrationSurface:Detailed, Window, and GlazedDoor).",
          "group_name": "Thermal Zones and Surfaces",
          "group_id": 6
      },
      {
          "class_id": 952,
          "class_name": "WindowProperty:AirflowControl",
          "memo": " Used to control forced airflow through a gap between glass layers",
          "group_name": "Thermal Zones and Surfaces",
          "group_id": 6
      },
      {
          "class_id": 953,
          "class_name": "WindowProperty:StormWindow",
          "memo": " This is a movable exterior glass layer that is usually applied in the winter and removed in the summer.",
          "group_name": "Thermal Zones and Surfaces",
          "group_id": 6
      },
      {
          "class_id": 954,
          "class_name": "InternalMass",
          "memo": " Used to describe internal zone surface area that does not need to be part of geometric representation. This should be the total surface area exposed to the zone air. If you use a ZoneList in the Zone or ZoneList name field then this definition applies to",
          "group_name": "Thermal Zones and Surfaces",
          "group_id": 6
      },
      {
          "class_id": 955,
          "class_name": "Shading:Site",
          "memo": " used for shading elements such as trees these items are fixed in space and would not move with relative geometry",
          "group_name": "Thermal Zones and Surfaces",
          "group_id": 6
      },
      {
          "class_id": 956,
          "class_name": "Shading:Building",
          "memo": " used for shading elements such as trees, other buildings, parts of this building not being modeled these items are relative to the current building and would move with relative geometry",
          "group_name": "Thermal Zones and Surfaces",
          "group_id": 6
      },
      {
          "class_id": 957,
          "class_name": "Shading:Site:Detailed",
          "memo": " used for shading elements such as trees these items are fixed in space and would not move with relative geometry",
          "group_name": "Thermal Zones and Surfaces",
          "group_id": 6
      },
      {
          "class_id": 958,
          "class_name": "Shading:Building:Detailed",
          "memo": " used for shading elements such as trees, other buildings, parts of this building not being modeled these items are relative to the current building and would move with relative geometry",
          "group_name": "Thermal Zones and Surfaces",
          "group_id": 6
      },
      {
          "class_id": 959,
          "class_name": "Shading:Overhang",
          "memo": " Overhangs are usually flat shading surfaces that reference a window or door.",
          "group_name": "Thermal Zones and Surfaces",
          "group_id": 6
      },
      {
          "class_id": 960,
          "class_name": "Shading:Overhang:Projection",
          "memo": " Overhangs are typically flat shading surfaces that reference a window or door.",
          "group_name": "Thermal Zones and Surfaces",
          "group_id": 6
      },
      {
          "class_id": 961,
          "class_name": "Shading:Fin",
          "memo": " Fins are usually shading surfaces that are perpendicular to a window or door.",
          "group_name": "Thermal Zones and Surfaces",
          "group_id": 6
      },
      {
          "class_id": 962,
          "class_name": "Shading:Fin:Projection",
          "memo": " Fins are usually shading surfaces that are perpendicular to a window or door.",
          "group_name": "Thermal Zones and Surfaces",
          "group_id": 6
      },
      {
          "class_id": 963,
          "class_name": "Shading:Zone:Detailed",
          "memo": " used For fins, overhangs, elements that shade the building, are attached to the building but are not part of the heat transfer calculations",
          "group_name": "Thermal Zones and Surfaces",
          "group_id": 6
      },
      {
          "class_id": 964,
          "class_name": "ShadingProperty:Reflectance",
          "memo": " If this object is not defined for a shading surface the default values listed in following fields will be used in the solar reflection calculation.",
          "group_name": "Thermal Zones and Surfaces",
          "group_id": 6
      },
      {
          "class_id": 965,
          "class_name": "SurfaceProperty:HeatTransferAlgorithm",
          "memo": " Determines which Heat Balance Algorithm will be used for a specific surface Allows selectively overriding the global setting in HeatBalanceAlgorithm CTF (Conduction Transfer Functions), EMPD (Effective Moisture Penetration Depth with Conduction Transfer ",
          "group_name": "Advanced Construction, Surface, Zone Concepts",
          "group_id": 7
      },
      {
          "class_id": 966,
          "class_name": "SurfaceProperty:HeatTransferAlgorithm:MultipleSurface",
          "memo": " Determines which Heat Balance Algorithm will be used for a group of surface types Allows selectively overriding the global setting in HeatBalanceAlgorithm CTF (Conduction Transfer Functions), EMPD (Effective Moisture Penetration Depth with Conduction Tra",
          "group_name": "Advanced Construction, Surface, Zone Concepts",
          "group_id": 7
      },
      {
          "class_id": 967,
          "class_name": "SurfaceProperty:HeatTransferAlgorithm:SurfaceList",
          "memo": " Determines which Heat Balance Algorithm will be used for a list of surfaces Allows selectively overriding the global setting in HeatBalanceAlgorithm CTF (Conduction Transfer Functions), EMPD (Effective Moisture Penetration Depth with Conduction Transfer ",
          "group_name": "Advanced Construction, Surface, Zone Concepts",
          "group_id": 7
      },
      {
          "class_id": 968,
          "class_name": "SurfaceProperty:HeatTransferAlgorithm:Construction",
          "memo": " Determines which Heat Balance Algorithm will be used for surfaces that have a specific type of construction Allows selectively overriding the global setting in HeatBalanceAlgorithm CTF (Conduction Transfer Functions), EMPD (Effective Moisture Penetration",
          "group_name": "Advanced Construction, Surface, Zone Concepts",
          "group_id": 7
      },
      {
          "class_id": 969,
          "class_name": "SurfaceProperty:HeatBalanceSourceTerm",
          "memo": " Allows an additional heat source term to be added to the inside or outside surface boundary. A heat source can be added to either or both the inside and outside of the same surface.",
          "group_name": "Advanced Construction, Surface, Zone Concepts",
          "group_id": 7
      },
      {
          "class_id": 970,
          "class_name": "SurfaceControl:MovableInsulation",
          "memo": " Exterior or Interior Insulation on opaque surfaces",
          "group_name": "Advanced Construction, Surface, Zone Concepts",
          "group_id": 7
      },
      {
          "class_id": 971,
          "class_name": "SurfaceProperty:OtherSideCoefficients",
          "memo": " This object sets the other side conditions for a surface in a variety of ways.",
          "group_name": "Advanced Construction, Surface, Zone Concepts",
          "group_id": 7
      },
      {
          "class_id": 972,
          "class_name": "SurfaceProperty:OtherSideConditionsModel",
          "memo": " This object sets up modifying the other side conditions for a surface from other model results.",
          "group_name": "Advanced Construction, Surface, Zone Concepts",
          "group_id": 7
      },
      {
          "class_id": 973,
          "class_name": "SurfaceProperty:Underwater",
          "memo": " This object sets up a convective water boundary condition for a surface The free stream temperature and velocity are scheduled. If the free stream velocity is zero, the surface will naturally convect with the surrounding water.",
          "group_name": "Advanced Construction, Surface, Zone Concepts",
          "group_id": 7
      },
      {
          "class_id": 974,
          "class_name": "Foundation:Kiva",
          "memo": " Refined definition of the foundation surface construction used to inform two-dimensional heat transfer calculated using the Kiva ground heat transfer methodology.",
          "group_name": "Advanced Construction, Surface, Zone Concepts",
          "group_id": 7
      },
      {
          "class_id": 975,
          "class_name": "Foundation:Kiva:Settings",
          "memo": " Settings applied across all Kiva foundation calculations. Object is not required. If not defined, defaults will be applied.",
          "group_name": "Advanced Construction, Surface, Zone Concepts",
          "group_id": 7
      },
      {
          "class_id": 976,
          "class_name": "SurfaceProperty:ExposedFoundationPerimeter",
          "memo": " Defines the perimeter of a foundation floor that is exposed to the exterior environment through the floor. User may either define the total exposed perimeter, fraction of perimeter exposed or individually define which segments of the floor surface perime",
          "group_name": "Advanced Construction, Surface, Zone Concepts",
          "group_id": 7
      },
      {
          "class_id": 977,
          "class_name": "SurfaceConvectionAlgorithm:Inside:AdaptiveModelSelections",
          "memo": " Options to change the individual convection model equations for dynamic selection when using AdaptiveConvectiongAlgorithm This object is only needed to make changes to the default model selections for any or all of the surface categories. This object is ",
          "group_name": "Advanced Construction, Surface, Zone Concepts",
          "group_id": 7
      },
      {
          "class_id": 978,
          "class_name": "SurfaceConvectionAlgorithm:Outside:AdaptiveModelSelections",
          "memo": " Options to change the individual convection model equations for dynamic selection when using AdaptiveConvectiongAlgorithm This object is only needed to make changes to the default model selections for any or all of the surface categories. This object is ",
          "group_name": "Advanced Construction, Surface, Zone Concepts",
          "group_id": 7
      },
      {
          "class_id": 979,
          "class_name": "SurfaceConvectionAlgorithm:Inside:UserCurve",
          "memo": " Used to describe a custom model equation for surface convection heat transfer coefficient If more than one curve is referenced they are all used and added together.",
          "group_name": "Advanced Construction, Surface, Zone Concepts",
          "group_id": 7
      },
      {
          "class_id": 980,
          "class_name": "SurfaceConvectionAlgorithm:Outside:UserCurve",
          "memo": " Used to describe a custom model equation for surface convection heat transfer coefficient If more than one curve is referenced they are all used and added together.",
          "group_name": "Advanced Construction, Surface, Zone Concepts",
          "group_id": 7
      },
      {
          "class_id": 981,
          "class_name": "SurfaceProperty:ConvectionCoefficients",
          "memo": " Allow user settable interior and/or exterior convection coefficients. Note that some other factors may limit the lower bounds for these values, such as for windows, the interior convection coefficient must be >.28, for trombe wall algorithm selection (zo",
          "group_name": "Advanced Construction, Surface, Zone Concepts",
          "group_id": 7
      },
      {
          "class_id": 982,
          "class_name": "SurfaceProperty:ConvectionCoefficients:MultipleSurface",
          "memo": " Allow user settable interior and/or exterior convection coefficients. Note that some other factors may limit the lower bounds for these values, such as for windows, the interior convection coefficient must be >.28, for trombe wall algorithm selection (zo",
          "group_name": "Advanced Construction, Surface, Zone Concepts",
          "group_id": 7
      },
      {
          "class_id": 983,
          "class_name": "SurfaceProperties:VaporCoefficients",
          "memo": " The interior and external vapor transfer coefficients. Normally these value are calculated using the heat convection coefficient values. Use this object to used fixed constant values. Units are kg/Pa.s.m2 This will only work with the CombinedHeatAndMoist",
          "group_name": "Advanced Construction, Surface, Zone Concepts",
          "group_id": 7
      },
      {
          "class_id": 984,
          "class_name": "SurfaceProperty:ExteriorNaturalVentedCavity",
          "memo": " Used to describe the decoupled layer, or baffle, and the characteristics of the cavity and openings for naturally ventilated exterior surfaces. This object is also used in conjunction with the OtherSideConditionsModel.",
          "group_name": "Advanced Construction, Surface, Zone Concepts",
          "group_id": 7
      },
      {
          "class_id": 985,
          "class_name": "SurfaceProperty:SolarIncidentInside",
          "memo": " Used to provide incident solar radiation on the inside of the surface. Reference surface-construction pair and if that pair is used in a simulation, then program will use value provided in schedule instead of calculating it.",
          "group_name": "Advanced Construction, Surface, Zone Concepts",
          "group_id": 7
      },
      {
          "class_id": 986,
          "class_name": "SurfaceProperty:IncidentSolarMultiplier",
          "memo": "",
          "group_name": "Advanced Construction, Surface, Zone Concepts",
          "group_id": 7
      },
      {
          "class_id": 987,
          "class_name": "SurfaceProperty:LocalEnvironment",
          "memo": " This object defines the local environment properties of an exterior surface. One or more environment properties have to be defined and linked to the exterior surface.",
          "group_name": "Advanced Construction, Surface, Zone Concepts",
          "group_id": 7
      },
      {
          "class_id": 988,
          "class_name": "ZoneProperty:LocalEnvironment",
          "memo": " This object defines the local environment properties of a zone object. A corresponding outdoor air node should be defined and linked to the zone object.",
          "group_name": "Advanced Construction, Surface, Zone Concepts",
          "group_id": 7
      },
      {
          "class_id": 989,
          "class_name": "SurfaceProperty:SurroundingSurfaces",
          "memo": " This object defines a list of surrounding surfaces for an exterior surface.",
          "group_name": "Advanced Construction, Surface, Zone Concepts",
          "group_id": 7
      },
      {
          "class_id": 990,
          "class_name": "SurfaceProperty:GroundSurfaces",
          "memo": " This object defines a list of ground surfaces for use with an exterior surface.",
          "group_name": "Advanced Construction, Surface, Zone Concepts",
          "group_id": 7
      },
      {
          "class_id": 991,
          "class_name": "ComplexFenestrationProperty:SolarAbsorbedLayers",
          "memo": " Used to provide solar radiation absorbed in fenestration layers. References surface-construction pair and if that pair is used in a simulation, then program will use value provided in schedules instead of calculating it.",
          "group_name": "Advanced Construction, Surface, Zone Concepts",
          "group_id": 7
      },
      {
          "class_id": 992,
          "class_name": "ZoneProperty:UserViewFactors:BySurfaceName",
          "memo": " View factors for Surface to Surface in a zone. (Number of Surfaces)**2 are expected. Any omitted surface pairs will be assumed to have a view factor of zero.",
          "group_name": "Advanced Construction, Surface, Zone Concepts",
          "group_id": 7
      },
      {
          "class_id": 993,
          "class_name": "GroundHeatTransfer:Control",
          "memo": " Object determines if the Slab and Basement preprocessors are going to be executed.",
          "group_name": "Detailed Ground Heat Transfer",
          "group_id": 8
      },
      {
          "class_id": 994,
          "class_name": "GroundHeatTransfer:Slab:Materials",
          "memo": " Object gives an overall description of the slab ground heat transfer model.",
          "group_name": "Detailed Ground Heat Transfer",
          "group_id": 8
      },
      {
          "class_id": 995,
          "class_name": "GroundHeatTransfer:Slab:MatlProps",
          "memo": " This object contains the material properties for the materials used in the model. The fields are mostly self explanatory.",
          "group_name": "Detailed Ground Heat Transfer",
          "group_id": 8
      },
      {
          "class_id": 996,
          "class_name": "GroundHeatTransfer:Slab:BoundConds",
          "memo": " Supplies some of the boundary conditions used in the ground heat transfer calculations.",
          "group_name": "Detailed Ground Heat Transfer",
          "group_id": 8
      },
      {
          "class_id": 997,
          "class_name": "GroundHeatTransfer:Slab:BldgProps",
          "memo": " Object provides information about the building and its operating conditions Monthly Average Temperature SetPoint fields specify the average indoor building set point temperatures for each month of the year. These fields are useful for simulating a buildi",
          "group_name": "Detailed Ground Heat Transfer",
          "group_id": 8
      },
      {
          "class_id": 998,
          "class_name": "GroundHeatTransfer:Slab:Insulation",
          "memo": " This object supplies the information about insulation used around the slab. There are two possible configurations: under the slab or vertical insulation around the slab.",
          "group_name": "Detailed Ground Heat Transfer",
          "group_id": 8
      },
      {
          "class_id": 999,
          "class_name": "GroundHeatTransfer:Slab:EquivalentSlab",
          "memo": " Using an equivalent slab allows non-rectangular shapes to be modeled accurately. Object uses the area - perimeter (area/perimeter) ratio to determine the size of an equivalent rectangular slab. EnergyPlus users normally use this option.",
          "group_name": "Detailed Ground Heat Transfer",
          "group_id": 8
      },
      {
          "class_id": 1000,
          "class_name": "GroundHeatTransfer:Slab:AutoGrid",
          "memo": " AutoGrid only necessary when EquivalentSlab option not chosen. Not normally needed by EnergyPlus users. This object permits user selection of rectangular slab dimensions. NO SLAB DIMENSIONS LESS THAN 6 m.",
          "group_name": "Detailed Ground Heat Transfer",
          "group_id": 8
      },
      {
          "class_id": 1001,
          "class_name": "GroundHeatTransfer:Slab:ManualGrid",
          "memo": " Manual Grid only necessary when using manual gridding (not recommended) Used only in special cases when previous two objects are not used. User must input complete gridding information.",
          "group_name": "Detailed Ground Heat Transfer",
          "group_id": 8
      },
      {
          "class_id": 1002,
          "class_name": "GroundHeatTransfer:Slab:XFACE",
          "memo": " This is only needed when using manual gridding (not recommended) XFACE: X Direction cell face coordinates: m",
          "group_name": "Detailed Ground Heat Transfer",
          "group_id": 8
      },
      {
          "class_id": 1003,
          "class_name": "GroundHeatTransfer:Slab:YFACE",
          "memo": " This is only needed when using manual gridding (not recommended) YFACE: Y Direction cell face coordinates: m,",
          "group_name": "Detailed Ground Heat Transfer",
          "group_id": 8
      },
      {
          "class_id": 1004,
          "class_name": "GroundHeatTransfer:Slab:ZFACE",
          "memo": " This is only needed when using manual gridding (not recommended) ZFACE: Z Direction cell face coordinates: m",
          "group_name": "Detailed Ground Heat Transfer",
          "group_id": 8
      },
      {
          "class_id": 1005,
          "class_name": "GroundHeatTransfer:Basement:SimParameters",
          "memo": " Specifies certain parameters that control the Basement preprocessor ground heat transfer simulation.",
          "group_name": "Detailed Ground Heat Transfer",
          "group_id": 8
      },
      {
          "class_id": 1006,
          "class_name": "GroundHeatTransfer:Basement:MatlProps",
          "memo": " Specifies the material properties for the Basement preprocessor ground heat transfer simulation. Only the Foundation Wall, Floor Slab, Soil, and Gravel properties are currently used.",
          "group_name": "Detailed Ground Heat Transfer",
          "group_id": 8
      },
      {
          "class_id": 1007,
          "class_name": "GroundHeatTransfer:Basement:Insulation",
          "memo": " Describes the insulation used on an exterior basement wall for the Basement preprocessor ground heat transfer simulation.",
          "group_name": "Detailed Ground Heat Transfer",
          "group_id": 8
      },
      {
          "class_id": 1008,
          "class_name": "GroundHeatTransfer:Basement:SurfaceProps",
          "memo": " Specifies the soil surface properties for the Basement preprocessor ground heat transfer simulation.",
          "group_name": "Detailed Ground Heat Transfer",
          "group_id": 8
      },
      {
          "class_id": 1009,
          "class_name": "GroundHeatTransfer:Basement:BldgData",
          "memo": " Specifies the surface and gravel thicknesses used for the Basement preprocessor ground heat transfer simulation.",
          "group_name": "Detailed Ground Heat Transfer",
          "group_id": 8
      },
      {
          "class_id": 1010,
          "class_name": "GroundHeatTransfer:Basement:Interior",
          "memo": " Provides the information needed to simulate the inside boundary conditions for the Basement preprocessor ground heat transfer simulation.",
          "group_name": "Detailed Ground Heat Transfer",
          "group_id": 8
      },
      {
          "class_id": 1011,
          "class_name": "GroundHeatTransfer:Basement:ComBldg",
          "memo": " ComBldg contains the monthly average temperatures (C) and possibility of daily variation amplitude",
          "group_name": "Detailed Ground Heat Transfer",
          "group_id": 8
      },
      {
          "class_id": 1012,
          "class_name": "GroundHeatTransfer:Basement:EquivSlab",
          "memo": " Using an equivalent slab allows non-rectangular shapes to be modeled accurately. The simulation default should be EquivSizing=True",
          "group_name": "Detailed Ground Heat Transfer",
          "group_id": 8
      },
      {
          "class_id": 1013,
          "class_name": "GroundHeatTransfer:Basement:EquivAutoGrid",
          "memo": " EquivAutoGrid necessary when EquivSizing=TRUE, TRUE is is the normal case.",
          "group_name": "Detailed Ground Heat Transfer",
          "group_id": 8
      },
      {
          "class_id": 1014,
          "class_name": "GroundHeatTransfer:Basement:AutoGrid",
          "memo": " AutoGrid only necessary when EquivSizing is false If the modeled building is not a rectangle or square, Equivalent sizing MUST be used to get accurate results",
          "group_name": "Detailed Ground Heat Transfer",
          "group_id": 8
      },
      {
          "class_id": 1015,
          "class_name": "GroundHeatTransfer:Basement:ManualGrid",
          "memo": " Manual Grid only necessary using manual gridding (not recommended)",
          "group_name": "Detailed Ground Heat Transfer",
          "group_id": 8
      },
      {
          "class_id": 1016,
          "class_name": "GroundHeatTransfer:Basement:XFACE",
          "memo": " This is only needed when using manual gridding (not recommended) XFACE: X Direction cell face coordinates: m",
          "group_name": "Detailed Ground Heat Transfer",
          "group_id": 8
      },
      {
          "class_id": 1017,
          "class_name": "GroundHeatTransfer:Basement:YFACE",
          "memo": " This is only needed when using manual gridding (not recommended) YFACE: Y Direction cell face coordinates: m",
          "group_name": "Detailed Ground Heat Transfer",
          "group_id": 8
      },
      {
          "class_id": 1018,
          "class_name": "GroundHeatTransfer:Basement:ZFACE",
          "memo": " This is only needed when using manual gridding (not recommended) ZFACE: Z Direction cell face coordinates: m",
          "group_name": "Detailed Ground Heat Transfer",
          "group_id": 8
      },
      {
          "class_id": 1019,
          "class_name": "RoomAirModelType",
          "memo": " Selects the type of room air model to be used in a given zone. If no RoomAirModelType object is specified then the default Mixing model (all zone air at the same temperature) will be used.",
          "group_name": "Room Air Models",
          "group_id": 9
      },
      {
          "class_id": 1020,
          "class_name": "RoomAir:TemperaturePattern:UserDefined",
          "memo": " Used to explicitly define temperature patterns that are to be applied to the mean air temperature within a thermal zone. Used with RoomAirModelType = UserDefined.",
          "group_name": "Room Air Models",
          "group_id": 9
      },
      {
          "class_id": 1021,
          "class_name": "RoomAir:TemperaturePattern:ConstantGradient",
          "memo": " Used to model room air with a fixed temperature gradient in the vertical direction. Used in combination with RoomAir:TemperaturePattern:UserDefined.",
          "group_name": "Room Air Models",
          "group_id": 9
      },
      {
          "class_id": 1022,
          "class_name": "RoomAir:TemperaturePattern:TwoGradient",
          "memo": " Used to model room air with two temperature gradients in the vertical direction. Used in combination with RoomAir:TemperaturePattern:UserDefined.",
          "group_name": "Room Air Models",
          "group_id": 9
      },
      {
          "class_id": 1023,
          "class_name": "RoomAir:TemperaturePattern:NondimensionalHeight",
          "memo": " Defines a distribution pattern for air temperatures relative to the current mean air temperature as a function of height. The height, referred to as Zeta, is nondimensional by normalizing with the zone ceiling height. Used in combination with RoomAir:Tem",
          "group_name": "Room Air Models",
          "group_id": 9
      },
      {
          "class_id": 1024,
          "class_name": "RoomAir:TemperaturePattern:SurfaceMapping",
          "memo": " Defines a distribution pattern for the air temperatures adjacent to individual surfaces. This allows controlling the adjacent air temperature on a surface-by-surface basis rather than by height. This allows modeling different adjacent air temperatures on",
          "group_name": "Room Air Models",
          "group_id": 9
      },
      {
          "class_id": 1025,
          "class_name": "RoomAir:Node",
          "memo": " Define an air node for some types of nodal room air models",
          "group_name": "Room Air Models",
          "group_id": 9
      },
      {
          "class_id": 1026,
          "class_name": "RoomAirSettings:OneNodeDisplacementVentilation",
          "memo": " The Mundt model for displacement ventilation",
          "group_name": "Room Air Models",
          "group_id": 9
      },
      {
          "class_id": 1027,
          "class_name": "RoomAirSettings:ThreeNodeDisplacementVentilation",
          "memo": " The UCSD model for Displacement Ventilation",
          "group_name": "Room Air Models",
          "group_id": 9
      },
      {
          "class_id": 1028,
          "class_name": "RoomAirSettings:CrossVentilation",
          "memo": " This UCSD Cross Ventilation Room Air Model provides a simple model for heat transfer and vertical temperature profile prediction in cross ventilated rooms. The model distinguishes two regions in the room, the main jet region and the recirculations, and p",
          "group_name": "Room Air Models",
          "group_id": 9
      },
      {
          "class_id": 1029,
          "class_name": "RoomAirSettings:UnderFloorAirDistributionInterior",
          "memo": " This Room Air Model is applicable to interior spaces that are served by an underfloor air distribution system. The dominant sources of heat gain should be from people, equipment, and other localized sources located in the occupied part of the room. The m",
          "group_name": "Room Air Models",
          "group_id": 9
      },
      {
          "class_id": 1030,
          "class_name": "RoomAirSettings:UnderFloorAirDistributionExterior",
          "memo": " Applicable to exterior spaces that are served by an underfloor air distribution system. The dominant sources of heat gain should be from people, equipment, and other localized sources located in the occupied part of the room, as well as convective gain c",
          "group_name": "Room Air Models",
          "group_id": 9
      },
      {
          "class_id": 1031,
          "class_name": "RoomAir:Node:AirflowNetwork",
          "memo": " define an air node for some types of nodal air models",
          "group_name": "Room Air Models",
          "group_id": 9
      },
      {
          "class_id": 1032,
          "class_name": "RoomAir:Node:AirflowNetwork:AdjacentSurfaceList",
          "memo": "",
          "group_name": "Room Air Models",
          "group_id": 9
      },
      {
          "class_id": 1033,
          "class_name": "RoomAir:Node:AirflowNetwork:InternalGains",
          "memo": " define the internal gains that are associated with one particular RoomAir:Node",
          "group_name": "Room Air Models",
          "group_id": 9
      },
      {
          "class_id": 1034,
          "class_name": "RoomAir:Node:AirflowNetwork:HVACEquipment",
          "memo": " define the zone equipment associated with one particular RoomAir:Node",
          "group_name": "Room Air Models",
          "group_id": 9
      },
      {
          "class_id": 1035,
          "class_name": "RoomAirSettings:AirflowNetwork",
          "memo": " RoomAir modeling using Airflow pressure network solver",
          "group_name": "Room Air Models",
          "group_id": 9
      },
      {
          "class_id": 1036,
          "class_name": "People",
          "memo": " Sets internal gains and contaminant rates for occupants in the zone. If a ZoneList, SpaceList, or a Zone comprised of more than one Space is specified then this definition applies to all applicable spaces, and each instance will be named with the Space N",
          "group_name": "Internal Gains",
          "group_id": 10
      },
      {
          "class_id": 1037,
          "class_name": "ComfortViewFactorAngles",
          "memo": " Used to specify radiant view factors for thermal comfort calculations. Note that the following angle factor fractions must sum up to 1.0 The number of surfaces can be expanded beyond 100, if necessary, by adding more groups to the end of the list.",
          "group_name": "Internal Gains",
          "group_id": 10
      },
      {
          "class_id": 1038,
          "class_name": "Lights",
          "memo": " Sets internal gains for lights in the zone. If a ZoneList, SpaceList, or a Zone comprised of more than one Space is specified then this definition applies to all applicable spaces, and each instance will be named with the Space Name plus this Object Name",
          "group_name": "Internal Gains",
          "group_id": 10
      },
      {
          "class_id": 1039,
          "class_name": "ElectricEquipment",
          "memo": " Sets internal gains for electric equipment in the zone. If a ZoneList, SpaceList, or a Zone comprised of more than one Space is specified then this definition applies to all applicable spaces, and each instance will be named with the Space Name plus this",
          "group_name": "Internal Gains",
          "group_id": 10
      },
      {
          "class_id": 1040,
          "class_name": "GasEquipment",
          "memo": " Sets internal gains and contaminant rates for gas equipment in the zone. If a ZoneList, SpaceList, or a Zone comprised of more than one Space is specified then this definition applies to all applicable spaces, and each instance will be named with the Spa",
          "group_name": "Internal Gains",
          "group_id": 10
      },
      {
          "class_id": 1041,
          "class_name": "HotWaterEquipment",
          "memo": " Sets internal gains for hot water equipment in the zone. If a ZoneList, SpaceList, or a Zone comprised of more than one Space is specified then this definition applies to all applicable spaces, and each instance will be named with the Space Name plus thi",
          "group_name": "Internal Gains",
          "group_id": 10
      },
      {
          "class_id": 1042,
          "class_name": "SteamEquipment",
          "memo": " Sets internal gains for steam equipment in the zone. If a ZoneList, SpaceList, or a Zone comprised of more than one Space is specified then this definition applies to all applicable spaces, and each instance will be named with the Space Name plus this Ob",
          "group_name": "Internal Gains",
          "group_id": 10
      },
      {
          "class_id": 1043,
          "class_name": "OtherEquipment",
          "memo": " Sets internal gains or losses for \"other\" equipment in the zone. If a ZoneList, SpaceList, or a Zone comprised of more than one Space is specified then this definition applies to all applicable spaces, and each instance will be named with the Space Name ",
          "group_name": "Internal Gains",
          "group_id": 10
      },
      {
          "class_id": 1044,
          "class_name": "ElectricEquipment:ITE:AirCooled",
          "memo": " This object describes air-cooled electric information technology equipment (ITE) which has variable power consumption as a function of loading and temperature. If a Zone comprised of more than one Space is specified then this definition applies to all ap",
          "group_name": "Internal Gains",
          "group_id": 10
      },
      {
          "class_id": 1045,
          "class_name": "ZoneBaseboard:OutdoorTemperatureControlled",
          "memo": " Specifies outside temperature-controlled electric baseboard heating. If a ZoneList, SpaceList, or a Zone comprised of more than one Space is specified then this definition applies to all applicable spaces, and each instance will be named with the Space N",
          "group_name": "Internal Gains",
          "group_id": 10
      },
      {
          "class_id": 1046,
          "class_name": "SwimmingPool:Indoor",
          "memo": " Specifies an indoor swimming pools linked to a floor surface. The pool is assumed to cover the entire floor to which it is linked.",
          "group_name": "Internal Gains",
          "group_id": 10
      },
      {
          "class_id": 1047,
          "class_name": "ZoneContaminantSourceAndSink:CarbonDioxide",
          "memo": " Represents internal CO2 gains and sinks in the zone.",
          "group_name": "Internal Gains",
          "group_id": 10
      },
      {
          "class_id": 1048,
          "class_name": "ZoneContaminantSourceAndSink:Generic:Constant",
          "memo": " Sets internal generic contaminant gains and sinks in a zone with constant values.",
          "group_name": "Internal Gains",
          "group_id": 10
      },
      {
          "class_id": 1049,
          "class_name": "SurfaceContaminantSourceAndSink:Generic:PressureDriven",
          "memo": " Simulate generic contaminant source driven by the pressure difference across a surface.",
          "group_name": "Internal Gains",
          "group_id": 10
      },
      {
          "class_id": 1050,
          "class_name": "ZoneContaminantSourceAndSink:Generic:CutoffModel",
          "memo": " Simulate generic contaminant source driven by the cutoff concentration model.",
          "group_name": "Internal Gains",
          "group_id": 10
      },
      {
          "class_id": 1051,
          "class_name": "ZoneContaminantSourceAndSink:Generic:DecaySource",
          "memo": " Simulate generic contaminant source driven by the cutoff concentration model.",
          "group_name": "Internal Gains",
          "group_id": 10
      },
      {
          "class_id": 1052,
          "class_name": "SurfaceContaminantSourceAndSink:Generic:BoundaryLayerDiffusion",
          "memo": " Simulate generic contaminant source driven by the boundary layer diffusion controlled model.",
          "group_name": "Internal Gains",
          "group_id": 10
      },
      {
          "class_id": 1053,
          "class_name": "SurfaceContaminantSourceAndSink:Generic:DepositionVelocitySink",
          "memo": " Simulate generic contaminant source driven by the boundary layer diffusion controlled model.",
          "group_name": "Internal Gains",
          "group_id": 10
      },
      {
          "class_id": 1054,
          "class_name": "ZoneContaminantSourceAndSink:Generic:DepositionRateSink",
          "memo": " Simulate generic contaminant source driven by the boundary layer diffusion controlled model.",
          "group_name": "Internal Gains",
          "group_id": 10
      },
      {
          "class_id": 1055,
          "class_name": "Daylighting:Controls",
          "memo": " Dimming of overhead electric lighting is determined from each reference point. Glare from daylighting is also calculated.",
          "group_name": "Daylighting",
          "group_id": 11
      },
      {
          "class_id": 1056,
          "class_name": "Daylighting:ReferencePoint",
          "memo": " Used by Daylighting:Controls to identify the reference point coordinates for each sensor. Reference points are given in coordinates specified in the GlobalGeometryRules object Daylighting Reference Point CoordinateSystem field.",
          "group_name": "Daylighting",
          "group_id": 11
      },
      {
          "class_id": 1057,
          "class_name": "Daylighting:DELight:ComplexFenestration",
          "memo": " Used for DElight Complex Fenestration of all types",
          "group_name": "Daylighting",
          "group_id": 11
      },
      {
          "class_id": 1058,
          "class_name": "DaylightingDevice:Tubular",
          "memo": " Defines a tubular daylighting device (TDD) consisting of three components: a dome, a pipe, and a diffuser. The dome and diffuser are defined separately using the FenestrationSurface:Detailed object.",
          "group_name": "Daylighting",
          "group_id": 11
      },
      {
          "class_id": 1059,
          "class_name": "DaylightingDevice:Shelf",
          "memo": " Defines a daylighting which can have an inside shelf, an outside shelf, or both. The inside shelf is defined as a building surface and the outside shelf is defined as a shading surface.",
          "group_name": "Daylighting",
          "group_id": 11
      },
      {
          "class_id": 1060,
          "class_name": "DaylightingDevice:LightWell",
          "memo": " Applies only to exterior windows in daylighting-controlled zones or in zones that share an interior window with a daylighting-controlled  zone. Generally used with skylights.",
          "group_name": "Daylighting",
          "group_id": 11
      },
      {
          "class_id": 1061,
          "class_name": "Output:DaylightFactors",
          "memo": " Reports hourly daylight factors for each exterior window for four sky types (clear, turbid clear, intermediate, and overcast).",
          "group_name": "Daylighting",
          "group_id": 11
      },
      {
          "class_id": 1062,
          "class_name": "Output:IlluminanceMap",
          "memo": " reference points are given in coordinates specified in the GlobalGeometryRules object Daylighting Reference Point CoordinateSystem field",
          "group_name": "Daylighting",
          "group_id": 11
      },
      {
          "class_id": 1063,
          "class_name": "OutputControl:IlluminanceMap:Style",
          "memo": " default style for the Daylighting Illuminance Map is comma -- this works well for importing into spreadsheet programs such as Excel(tm) but not so well for word processing programs -- there tab may be a better choice. fixed puts spaces between the \"colum",
          "group_name": "Daylighting",
          "group_id": 11
      },
      {
          "class_id": 1064,
          "class_name": "ZoneInfiltration:DesignFlowRate",
          "memo": " Infiltration is specified as a design level which is modified by a Schedule fraction, temperature difference and wind speed: Infiltration=Idesign * FSchedule * (A + B*|(Tzone-Todb)| + C*WindSpd + D * WindSpd**2) If a ZoneList, SpaceList, or a Zone compri",
          "group_name": "Zone Airflow",
          "group_id": 12
      },
      {
          "class_id": 1065,
          "class_name": "ZoneInfiltration:EffectiveLeakageArea",
          "memo": " Infiltration is specified as effective leakage area at 4 Pa, schedule fraction, stack and wind coefficients, and is a function of temperature difference and wind speed: Infiltration=FSchedule * (AL /1000) SQRT(Cs*|(Tzone-Todb)| +  Cw*WindSpd**2 ) If a Zo",
          "group_name": "Zone Airflow",
          "group_id": 12
      },
      {
          "class_id": 1066,
          "class_name": "ZoneInfiltration:FlowCoefficient",
          "memo": " Infiltration is specified as flow coefficient, schedule fraction, stack and wind coefficients, and is a function of temperature difference and wind speed: Infiltration=FSchedule * SQRT( (c * Cs*|(Tzone-Todb)|**n)**2 + (c* Cw*(s * WindSpd)**2n)**2 ) If a ",
          "group_name": "Zone Airflow",
          "group_id": 12
      },
      {
          "class_id": 1067,
          "class_name": "ZoneVentilation:DesignFlowRate",
          "memo": " Ventilation is specified as a design level which is modified by a schedule fraction, temperature difference and wind speed: Ventilation=Vdesign * Fschedule * (A + B*|(Tzone-Todb)| + C*WindSpd + D * WindSpd**2) If a ZoneList, SpaceList, or a Zone comprise",
          "group_name": "Zone Airflow",
          "group_id": 12
      },
      {
          "class_id": 1068,
          "class_name": "ZoneVentilation:WindandStackOpenArea",
          "memo": " This object is specified as natural ventilation driven by wind and stack effect only: Ventilation Wind = Cw * Opening Area * Schedule * WindSpd Ventilation Stack = Cd * Opening Area * Schedule * SQRT(2*g*DH*(|(Tzone-Todb)|/Tzone)) Total Ventilation = SQR",
          "group_name": "Zone Airflow",
          "group_id": 12
      },
      {
          "class_id": 1069,
          "class_name": "ZoneAirBalance:OutdoorAir",
          "memo": " Provide a combined zone outdoor air flow by including interactions between mechanical ventilation, infiltration and duct leakage. This object will combine outdoor flows from all ZoneInfiltration and ZoneVentilation objects in the same zone. Balanced flow",
          "group_name": "Zone Airflow",
          "group_id": 12
      },
      {
          "class_id": 1070,
          "class_name": "ZoneMixing",
          "memo": " ZoneMixing is a simple air exchange from one zone or space to another. Note that this statement only affects the energy balance of the \"receiving\" zone or space and will not produce any effect on the \"source\" zone. Mixing statements can be complementary ",
          "group_name": "Zone Airflow",
          "group_id": 12
      },
      {
          "class_id": 1071,
          "class_name": "ZoneCrossMixing",
          "memo": " ZoneCrossMixing exchanges an equal amount of air between two zones or spaces. Note that this statement affects the energy balance of both zones or spaces.",
          "group_name": "Zone Airflow",
          "group_id": 12
      },
      {
          "class_id": 1072,
          "class_name": "ZoneRefrigerationDoorMixing",
          "memo": " Refrigeration Door Mixing is used for an opening between two zones that are at the same elevation but have different air temperatures. In this case, the mixing air flow between the two zones is determined by the density difference between the two zones. ",
          "group_name": "Zone Airflow",
          "group_id": 12
      },
      {
          "class_id": 1073,
          "class_name": "ZoneEarthtube",
          "memo": " Earth Tube is specified as a design level which is modified by a Schedule fraction, temperature difference and wind speed: Earthtube=Edesign * Fschedule * (A + B*|(Tzone-Todb)| + C*WindSpd + D * WindSpd**2)",
          "group_name": "Zone Airflow",
          "group_id": 12
      },
      {
          "class_id": 1074,
          "class_name": "ZoneCoolTower:Shower",
          "memo": " A cooltower (sometimes referred to as a wind tower or a shower cooling tower) models passive downdraught evaporative cooling (PDEC) that is designed to capture the wind at the top of a tower and cool the outdoor air using water evaporation before deliver",
          "group_name": "Zone Airflow",
          "group_id": 12
      },
      {
          "class_id": 1075,
          "class_name": "ZoneThermalChimney",
          "memo": " A thermal chimney is a vertical shaft utilizing solar radiation to enhance natural ventilation. It consists of an absorber wall, air gap and glass cover with high solar transmissivity.",
          "group_name": "Zone Airflow",
          "group_id": 12
      },
      {
          "class_id": 1076,
          "class_name": "AirflowNetwork:SimulationControl",
          "memo": " This object defines the global parameters used in an Airflow Network simulation.",
          "group_name": "AirflowNetwork",
          "group_id": 13
      },
      {
          "class_id": 1077,
          "class_name": "AirflowNetwork:MultiZone:Zone",
          "memo": " This object is used to simultaneously control a thermal zone's window and door openings, both exterior and interior.",
          "group_name": "AirflowNetwork",
          "group_id": 13
      },
      {
          "class_id": 1078,
          "class_name": "AirflowNetwork:MultiZone:Surface",
          "memo": " This object specifies the properties of a surface linkage through which air flows. Airflow Report: Node 1 as an inside face zone; Node 2 as an outside face zone or external node.",
          "group_name": "AirflowNetwork",
          "group_id": 13
      },
      {
          "class_id": 1079,
          "class_name": "AirflowNetwork:MultiZone:ReferenceCrackConditions",
          "memo": " This object specifies the conditions under which the air mass flow coefficient was measured.",
          "group_name": "AirflowNetwork",
          "group_id": 13
      },
      {
          "class_id": 1080,
          "class_name": "AirflowNetwork:MultiZone:Surface:Crack",
          "memo": " This object specifies the properties of airflow through a crack.",
          "group_name": "AirflowNetwork",
          "group_id": 13
      },
      {
          "class_id": 1081,
          "class_name": "AirflowNetwork:MultiZone:Surface:EffectiveLeakageArea",
          "memo": " This object is used to define surface air leakage.",
          "group_name": "AirflowNetwork",
          "group_id": 13
      },
      {
          "class_id": 1082,
          "class_name": "AirflowNetwork:MultiZone:SpecifiedFlowRate",
          "memo": " This object is used to define specified flow through a linkage.",
          "group_name": "AirflowNetwork",
          "group_id": 13
      },
      {
          "class_id": 1083,
          "class_name": "AirflowNetwork:MultiZone:Component:DetailedOpening",
          "memo": " This object specifies the properties of airflow through windows and doors (window, door and glass door heat transfer subsurfaces) when they are closed or open.",
          "group_name": "AirflowNetwork",
          "group_id": 13
      },
      {
          "class_id": 1084,
          "class_name": "AirflowNetwork:MultiZone:Component:SimpleOpening",
          "memo": " This object specifies the properties of air flow through windows and doors (window, door and glass door heat transfer subsurfaces) when they are closed or open.",
          "group_name": "AirflowNetwork",
          "group_id": 13
      },
      {
          "class_id": 1085,
          "class_name": "AirflowNetwork:MultiZone:Component:HorizontalOpening",
          "memo": " This object specifies the properties of air flow through a horizontal opening",
          "group_name": "AirflowNetwork",
          "group_id": 13
      },
      {
          "class_id": 1086,
          "class_name": "AirflowNetwork:MultiZone:Component:ZoneExhaustFan",
          "memo": " This object specifies the additional properties for a zone exhaust fan to perform multizone airflow calculations.",
          "group_name": "AirflowNetwork",
          "group_id": 13
      },
      {
          "class_id": 1087,
          "class_name": "AirflowNetwork:MultiZone:ExternalNode",
          "memo": " This object defines outdoor environmental conditions outside of the building.",
          "group_name": "AirflowNetwork",
          "group_id": 13
      },
      {
          "class_id": 1088,
          "class_name": "AirflowNetwork:MultiZone:WindPressureCoefficientArray",
          "memo": " Used only if Wind Pressure Coefficient (WPC) Type = Input in the AirflowNetwork:SimulationControl object. Number of WPC Values in the corresponding AirflowNetwork:MultiZone:WindPressureCoefficientValues object must be the same as the number of wind direc",
          "group_name": "AirflowNetwork",
          "group_id": 13
      },
      {
          "class_id": 1089,
          "class_name": "AirflowNetwork:MultiZone:WindPressureCoefficientValues",
          "memo": " Used only if Wind Pressure Coefficient (WPC) Type = INPUT in the AirflowNetwork:SimulationControl object. The number of WPC numeric inputs must correspond to the number of wind direction inputs in the AirflowNetwork:Multizone:WindPressureCoefficientArray",
          "group_name": "AirflowNetwork",
          "group_id": 13
      },
      {
          "class_id": 1090,
          "class_name": "AirflowNetwork:ZoneControl:PressureController",
          "memo": " This object is used to control a zone to a specified indoor pressure using the AirflowNetwork model. The specified pressure setpoint is used to control the zone exhaust fan flow rate in a controlled zone or the relief air flow rate in an air loop.",
          "group_name": "AirflowNetwork",
          "group_id": 13
      },
      {
          "class_id": 1091,
          "class_name": "AirflowNetwork:Distribution:Node",
          "memo": " This object represents an air distribution node in the AirflowNetwork model.",
          "group_name": "AirflowNetwork",
          "group_id": 13
      },
      {
          "class_id": 1092,
          "class_name": "AirflowNetwork:Distribution:Component:Leak",
          "memo": " This object defines the characteristics of a supply or return air leak.",
          "group_name": "AirflowNetwork",
          "group_id": 13
      },
      {
          "class_id": 1093,
          "class_name": "AirflowNetwork:Distribution:Component:LeakageRatio",
          "memo": " This object is used to define supply and return air leaks with respect to the fan's maximum air flow rate.",
          "group_name": "AirflowNetwork",
          "group_id": 13
      },
      {
          "class_id": 1094,
          "class_name": "AirflowNetwork:Distribution:Component:Duct",
          "memo": " This object defines the relationship between pressure and air flow through the duct.",
          "group_name": "AirflowNetwork",
          "group_id": 13
      },
      {
          "class_id": 1095,
          "class_name": "AirflowNetwork:Distribution:Component:Fan",
          "memo": " This object defines the name of the supply Air Fan used in an Air loop.",
          "group_name": "AirflowNetwork",
          "group_id": 13
      },
      {
          "class_id": 1096,
          "class_name": "AirflowNetwork:Distribution:Component:Coil",
          "memo": " This object defines the name of a coil used in an air loop.",
          "group_name": "AirflowNetwork",
          "group_id": 13
      },
      {
          "class_id": 1097,
          "class_name": "AirflowNetwork:Distribution:Component:HeatExchanger",
          "memo": " This object defines the name of an air-to-air heat exchanger used in an air loop.",
          "group_name": "AirflowNetwork",
          "group_id": 13
      },
      {
          "class_id": 1098,
          "class_name": "AirflowNetwork:Distribution:Component:TerminalUnit",
          "memo": " This object defines the name of a terminal unit in an air loop.",
          "group_name": "AirflowNetwork",
          "group_id": 13
      },
      {
          "class_id": 1099,
          "class_name": "AirflowNetwork:Distribution:Component:ConstantPressureDrop",
          "memo": " This object defines the characteristics of a constant pressure drop component (e.g. filter). Each node connected to this object can not be a node of mixer, splitter, a node of air primary loop, or zone equipment loop. It is recommended to connect to a du",
          "group_name": "AirflowNetwork",
          "group_id": 13
      },
      {
          "class_id": 1100,
          "class_name": "AirflowNetwork:Distribution:Component:OutdoorAirFlow",
          "memo": " This object includes the outdoor air flow rate set by the Controller:OutdoorAir object in the airflow network.",
          "group_name": "AirflowNetwork",
          "group_id": 13
      },
      {
          "class_id": 1101,
          "class_name": "AirflowNetwork:Distribution:Component:ReliefAirFlow",
          "memo": " This object allows variation of air flow rate to perform pressure.",
          "group_name": "AirflowNetwork",
          "group_id": 13
      },
      {
          "class_id": 1102,
          "class_name": "AirflowNetwork:Distribution:Linkage",
          "memo": " This object defines the connection between two nodes and a component.",
          "group_name": "AirflowNetwork",
          "group_id": 13
      },
      {
          "class_id": 1103,
          "class_name": "AirflowNetwork:Distribution:DuctViewFactors",
          "memo": " This object is used to allow user-defined view factors to be used for duct-surface radiation calculations.",
          "group_name": "AirflowNetwork",
          "group_id": 13
      },
      {
          "class_id": 1104,
          "class_name": "AirflowNetwork:Distribution:DuctSizing",
          "memo": " This object defines required parameters for duct sizing in an Airflow Network simulation. To activate duct sizing, see AirflowNetwork:SimulationControl Do Distribution Duct Sizing Calculation.",
          "group_name": "AirflowNetwork",
          "group_id": 13
      },
      {
          "class_id": 1105,
          "class_name": "AirflowNetwork:OccupantVentilationControl",
          "memo": " This object is used to provide advanced thermal comfort control of window opening and closing for both exterior and interior windows.",
          "group_name": "AirflowNetwork",
          "group_id": 13
      },
      {
          "class_id": 1106,
          "class_name": "AirflowNetwork:IntraZone:Node",
          "memo": " This object represents a node in a zone in the combination of RoomAir and AirflowNetwork model.",
          "group_name": "AirflowNetwork",
          "group_id": 13
      },
      {
          "class_id": 1107,
          "class_name": "AirflowNetwork:IntraZone:Linkage",
          "memo": " This object defines the connection between two nodes and a component used in the combination of RoomAir and AirflowNetwork model.",
          "group_name": "AirflowNetwork",
          "group_id": 13
      },
      {
          "class_id": 1108,
          "class_name": "Exterior:Lights",
          "memo": " only used for Meter type reporting, does not affect building loads",
          "group_name": "Exterior Equipment",
          "group_id": 14
      },
      {
          "class_id": 1109,
          "class_name": "Exterior:FuelEquipment",
          "memo": " only used for Meter type reporting, does not affect building loads",
          "group_name": "Exterior Equipment",
          "group_id": 14
      },
      {
          "class_id": 1110,
          "class_name": "Exterior:WaterEquipment",
          "memo": " only used for Meter type reporting, does not affect building loads",
          "group_name": "Exterior Equipment",
          "group_id": 14
      },
      {
          "class_id": 1111,
          "class_name": "HVACTemplate:Thermostat",
          "memo": " Zone thermostat control. Referenced schedules must be defined elsewhere in the idf. Thermostat control type is dual setpoint with deadband. It is not necessary to create a thermostat object for every zone, only for each unique set of setpoint schedules. ",
          "group_name": "HVAC Templates",
          "group_id": 15
      },
      {
          "class_id": 1112,
          "class_name": "HVACTemplate:Zone:IdealLoadsAirSystem",
          "memo": " Zone with ideal air system that meets heating or cooling loads",
          "group_name": "HVAC Templates",
          "group_id": 15
      },
      {
          "class_id": 1113,
          "class_name": "HVACTemplate:Zone:BaseboardHeat",
          "memo": " Zone baseboard heating system.",
          "group_name": "HVAC Templates",
          "group_id": 15
      },
      {
          "class_id": 1114,
          "class_name": "HVACTemplate:Zone:FanCoil",
          "memo": " 4 pipe fan coil unit with optional outdoor air.",
          "group_name": "HVAC Templates",
          "group_id": 15
      },
      {
          "class_id": 1115,
          "class_name": "HVACTemplate:Zone:PTAC",
          "memo": " Packaged Terminal Air Conditioner",
          "group_name": "HVAC Templates",
          "group_id": 15
      },
      {
          "class_id": 1116,
          "class_name": "HVACTemplate:Zone:PTHP",
          "memo": " Packaged Terminal Heat Pump",
          "group_name": "HVAC Templates",
          "group_id": 15
      },
      {
          "class_id": 1117,
          "class_name": "HVACTemplate:Zone:WaterToAirHeatPump",
          "memo": " Water to Air Heat Pump to be used with HVACTemplate:Plant:MixedWaterLoop",
          "group_name": "HVAC Templates",
          "group_id": 15
      },
      {
          "class_id": 1118,
          "class_name": "HVACTemplate:Zone:VRF",
          "memo": " Zone terminal unit with variable refrigerant flow (VRF) DX cooling and heating coils (air-to-air or water-to-air heat pump). The VRF terminal units are served by an HVACTemplate:System:VRF system.",
          "group_name": "HVAC Templates",
          "group_id": 15
      },
      {
          "class_id": 1119,
          "class_name": "HVACTemplate:Zone:Unitary",
          "memo": " Zone terminal unit, constant volume, no controls.",
          "group_name": "HVAC Templates",
          "group_id": 15
      },
      {
          "class_id": 1120,
          "class_name": "HVACTemplate:Zone:VAV",
          "memo": " Zone terminal unit, variable volume, reheat optional. For heating, this unit activates reheat coil first, then increases airflow (if reverse action specified).",
          "group_name": "HVAC Templates",
          "group_id": 15
      },
      {
          "class_id": 1121,
          "class_name": "HVACTemplate:Zone:VAV:FanPowered",
          "memo": " Zone terminal unit, fan powered variable volume, reheat optional. Referenced schedules must be defined elsewhere in the idf.",
          "group_name": "HVAC Templates",
          "group_id": 15
      },
      {
          "class_id": 1122,
          "class_name": "HVACTemplate:Zone:VAV:HeatAndCool",
          "memo": " VAV system with VAV for both heating and cooling and optional reheat coil. For heating, this unit increases airflow first, then activates reheat coil.",
          "group_name": "HVAC Templates",
          "group_id": 15
      },
      {
          "class_id": 1123,
          "class_name": "HVACTemplate:Zone:ConstantVolume",
          "memo": " Zone terminal unit, constant volume, reheat optional. Referenced schedules must be defined elsewhere in the idf.",
          "group_name": "HVAC Templates",
          "group_id": 15
      },
      {
          "class_id": 1124,
          "class_name": "HVACTemplate:Zone:DualDuct",
          "memo": " Zone terminal unit, dual-duct, constant or variable volume.",
          "group_name": "HVAC Templates",
          "group_id": 15
      },
      {
          "class_id": 1125,
          "class_name": "HVACTemplate:System:VRF",
          "memo": " Variable refrigerant flow (VRF) heat pump condensing unit. Serves one or more VRF zone terminal units (HVACTemplate:Zone:VRF).",
          "group_name": "HVAC Templates",
          "group_id": 15
      },
      {
          "class_id": 1126,
          "class_name": "HVACTemplate:System:Unitary",
          "memo": " Unitary furnace with air conditioner",
          "group_name": "HVAC Templates",
          "group_id": 15
      },
      {
          "class_id": 1127,
          "class_name": "HVACTemplate:System:UnitaryHeatPump:AirToAir",
          "memo": " Unitary furnace with electric air-to-air heat pump",
          "group_name": "HVAC Templates",
          "group_id": 15
      },
      {
          "class_id": 1128,
          "class_name": "HVACTemplate:System:UnitarySystem",
          "memo": " Unitary HVAC system with optional cooling and heating. Supports DX and chilled water, cooling, gas, electric, and hot water heating, air-to-air and water-to-air heat pumps.",
          "group_name": "HVAC Templates",
          "group_id": 15
      },
      {
          "class_id": 1129,
          "class_name": "HVACTemplate:System:VAV",
          "memo": " Variable Air Volume (VAV) air loop with optional heating coil and optional preheat.",
          "group_name": "HVAC Templates",
          "group_id": 15
      },
      {
          "class_id": 1130,
          "class_name": "HVACTemplate:System:PackagedVAV",
          "memo": " Packaged Variable Air Volume (PVAV) air loop with optional heating coil and optional preheat.",
          "group_name": "HVAC Templates",
          "group_id": 15
      },
      {
          "class_id": 1131,
          "class_name": "HVACTemplate:System:ConstantVolume",
          "memo": " Constant Air Volume air loop with optional chilled water cooling coil, optional heating coil and optional preheat.",
          "group_name": "HVAC Templates",
          "group_id": 15
      },
      {
          "class_id": 1132,
          "class_name": "HVACTemplate:System:DualDuct",
          "memo": " Dual-duct constant volume or variable volume air loop",
          "group_name": "HVAC Templates",
          "group_id": 15
      },
      {
          "class_id": 1133,
          "class_name": "HVACTemplate:System:DedicatedOutdoorAir",
          "memo": " This object creates a dedicated outdoor air system that must be used with HVACTemplate:Zone:* objects for BaseboardHeat FanCoil PTAC PTHP WaterToAirHeatPump and VRF. Does not support HVACTemplate:Zone:VAV or other central multizone systems",
          "group_name": "HVAC Templates",
          "group_id": 15
      },
      {
          "class_id": 1134,
          "class_name": "HVACTemplate:Plant:ChilledWaterLoop",
          "memo": " Plant and condenser loops to serve all HVACTemplate chilled water coils, chillers, and towers.",
          "group_name": "HVAC Templates",
          "group_id": 15
      },
      {
          "class_id": 1135,
          "class_name": "HVACTemplate:Plant:Chiller",
          "memo": " This object adds a chiller to an HVACTemplate:Plant:ChilledWaterLoop.",
          "group_name": "HVAC Templates",
          "group_id": 15
      },
      {
          "class_id": 1136,
          "class_name": "HVACTemplate:Plant:Chiller:ObjectReference",
          "memo": " This object references a detailed chiller object and adds it to an HVACTemplate:Plant:ChilledWaterLoop. The user must create a complete detailed chiller object with all required curve or performance objects.",
          "group_name": "HVAC Templates",
          "group_id": 15
      },
      {
          "class_id": 1137,
          "class_name": "HVACTemplate:Plant:Tower",
          "memo": " This object adds a cooling tower to an HVACTemplate:Plant:ChilledWaterLoop or MixedWaterLoop.",
          "group_name": "HVAC Templates",
          "group_id": 15
      },
      {
          "class_id": 1138,
          "class_name": "HVACTemplate:Plant:Tower:ObjectReference",
          "memo": " This object references a detailed cooling tower object and adds it to an HVACTemplate:Plant:ChilledWaterLoop or MixedWaterLoop. The user must create a complete detailed cooling tower object with all required curve or performance objects.",
          "group_name": "HVAC Templates",
          "group_id": 15
      },
      {
          "class_id": 1139,
          "class_name": "HVACTemplate:Plant:HotWaterLoop",
          "memo": " Plant loop to serve all HVACTemplate hot water coils and boilers.",
          "group_name": "HVAC Templates",
          "group_id": 15
      },
      {
          "class_id": 1140,
          "class_name": "HVACTemplate:Plant:Boiler",
          "memo": " This object adds a boiler to an HVACTemplate:Plant:HotWaterLoop or MixedWaterLoop.",
          "group_name": "HVAC Templates",
          "group_id": 15
      },
      {
          "class_id": 1141,
          "class_name": "HVACTemplate:Plant:Boiler:ObjectReference",
          "memo": " This object references a detailed boiler object and adds it to an HVACTemplate:Plant:HotWaterLoop or MixedWaterLoop. The user must create a complete detailed boiler object with all required curve or performance objects.",
          "group_name": "HVAC Templates",
          "group_id": 15
      },
      {
          "class_id": 1142,
          "class_name": "HVACTemplate:Plant:MixedWaterLoop",
          "memo": " Central plant loop portion of a water source heat pump system.",
          "group_name": "HVAC Templates",
          "group_id": 15
      },
      {
          "class_id": 1143,
          "class_name": "DesignSpecification:OutdoorAir",
          "memo": " This object is used to describe general outdoor air requirements which are referenced by other objects.",
          "group_name": "HVAC Design Objects",
          "group_id": 16
      },
      {
          "class_id": 1144,
          "class_name": "DesignSpecification:OutdoorAir:SpaceList",
          "memo": " Defines a list of DesignSpecification:OutdoorAir names which can be referenced as a group. The DesignSpecification:OutdoorAir:SpaceList name may be used in Sizing:Zone and Controller:MechanicalVentilation to specify space-by-space OA requirements and any",
          "group_name": "HVAC Design Objects",
          "group_id": 16
      },
      {
          "class_id": 1145,
          "class_name": "DesignSpecification:ZoneAirDistribution",
          "memo": " This object is used to describe zone air distribution in terms of air distribution effectiveness and secondary recirculation fraction. It is referenced by Sizing:Zone and Controller:MechanicalVentilation objects",
          "group_name": "HVAC Design Objects",
          "group_id": 16
      },
      {
          "class_id": 1146,
          "class_name": "Sizing:Parameters",
          "memo": " Specifies global heating and cooling sizing factors/ratios. These ratios are applied at the zone level to all of the zone heating and cooling loads and air flow rates. Then these new loads and air flow rates are used to calculate the system level flow ra",
          "group_name": "HVAC Design Objects",
          "group_id": 16
      },
      {
          "class_id": 1147,
          "class_name": "Sizing:Zone",
          "memo": " Specifies the data needed to perform a zone design air flow calculation. The calculation is done for every sizing period included in the input. The maximum cooling and heating load and cooling, heating, and ventilation air flows are then saved for system",
          "group_name": "HVAC Design Objects",
          "group_id": 16
      },
      {
          "class_id": 1148,
          "class_name": "DesignSpecification:ZoneHVAC:Sizing",
          "memo": " This object is used to describe general scalable zone HVAC equipment sizing which are referenced by other objects.",
          "group_name": "HVAC Design Objects",
          "group_id": 16
      },
      {
          "class_id": 1149,
          "class_name": "DesignSpecification:AirTerminal:Sizing",
          "memo": " This object is used to scale the sizing of air terminal units.",
          "group_name": "HVAC Design Objects",
          "group_id": 16
      },
      {
          "class_id": 1150,
          "class_name": "Sizing:System",
          "memo": " Specifies the input needed to perform sizing calculations for a central forced air system. System design air flow, heating capacity, and cooling capacity will be calculated using this input data.",
          "group_name": "HVAC Design Objects",
          "group_id": 16
      },
      {
          "class_id": 1151,
          "class_name": "Sizing:Plant",
          "memo": " Specifies the input needed to autosize plant loop flow rates and equipment capacities. This information is initially used by components that use water for heating or cooling such as hot or chilled water coils to calculate their maximum water flow rates. ",
          "group_name": "HVAC Design Objects",
          "group_id": 16
      },
      {
          "class_id": 1152,
          "class_name": "OutputControl:Sizing:Style",
          "memo": " Default style for the Sizing output files is comma -- this works well for importing into spreadsheet programs such as Excel(tm) but not so well for word processing programs -- there tab may be a better choice. Fixed puts spaces between the \"columns\"",
          "group_name": "HVAC Design Objects",
          "group_id": 16
      },
      {
          "class_id": 1153,
          "class_name": "ZoneControl:Humidistat",
          "memo": " Specifies zone relative humidity setpoint schedules for humidifying and dehumidifying.",
          "group_name": "Zone HVAC Controls and Thermostats",
          "group_id": 17
      },
      {
          "class_id": 1154,
          "class_name": "ZoneControl:Thermostat",
          "memo": " Define the Thermostat settings for a zone or list of zones. If you use a ZoneList in the Zone or ZoneList name field then this definition applies to all the zones in the ZoneList.",
          "group_name": "Zone HVAC Controls and Thermostats",
          "group_id": 17
      },
      {
          "class_id": 1155,
          "class_name": "ZoneControl:Thermostat:OperativeTemperature",
          "memo": " This object can be used with the ZoneList option on a thermostat or with one of the zones on that list (but you won't be able to use the object list to pick only one of those zones. Thermostat names are <Zone Name> <global Thermostat name> internally.",
          "group_name": "Zone HVAC Controls and Thermostats",
          "group_id": 17
      },
      {
          "class_id": 1156,
          "class_name": "ZoneControl:Thermostat:ThermalComfort",
          "memo": " If you use a ZoneList in the Zone or ZoneList name field then this definition applies to all the zones in the ZoneList.",
          "group_name": "Zone HVAC Controls and Thermostats",
          "group_id": 17
      },
      {
          "class_id": 1157,
          "class_name": "ZoneControl:Thermostat:TemperatureAndHumidity",
          "memo": " This object modifies a ZoneControl:Thermostat object to effect temperature control based on zone air humidity conditions.",
          "group_name": "Zone HVAC Controls and Thermostats",
          "group_id": 17
      },
      {
          "class_id": 1158,
          "class_name": "ThermostatSetpoint:SingleHeating",
          "memo": " Used for a heating only thermostat. The setpoint can be scheduled and varied throughout the simulation but only heating is allowed with this control type.",
          "group_name": "Zone HVAC Controls and Thermostats",
          "group_id": 17
      },
      {
          "class_id": 1159,
          "class_name": "ThermostatSetpoint:SingleCooling",
          "memo": " Used for a cooling only thermostat. The setpoint can be scheduled and varied throughout the simulation but only cooling is allowed.",
          "group_name": "Zone HVAC Controls and Thermostats",
          "group_id": 17
      },
      {
          "class_id": 1160,
          "class_name": "ThermostatSetpoint:SingleHeatingOrCooling",
          "memo": " Used for a heating and cooling thermostat with a single setpoint. The setpoint can be scheduled and varied throughout the simulation for both heating and cooling.",
          "group_name": "Zone HVAC Controls and Thermostats",
          "group_id": 17
      },
      {
          "class_id": 1161,
          "class_name": "ThermostatSetpoint:DualSetpoint",
          "memo": " Used for a heating and cooling thermostat with dual setpoints. The setpoints can be scheduled and varied throughout the simulation for both heating and cooling.",
          "group_name": "Zone HVAC Controls and Thermostats",
          "group_id": 17
      },
      {
          "class_id": 1162,
          "class_name": "ThermostatSetpoint:ThermalComfort:Fanger:SingleHeating",
          "memo": " Used for heating only thermal comfort control. The PMV setpoint can be scheduled and varied throughout the simulation but only heating is allowed with this control type.",
          "group_name": "Zone HVAC Controls and Thermostats",
          "group_id": 17
      },
      {
          "class_id": 1163,
          "class_name": "ThermostatSetpoint:ThermalComfort:Fanger:SingleCooling",
          "memo": " Used for cooling only thermal comfort control. The PMV setpoint can be scheduled and varied throughout the simulation but only cooling is allowed with this control type.",
          "group_name": "Zone HVAC Controls and Thermostats",
          "group_id": 17
      },
      {
          "class_id": 1164,
          "class_name": "ThermostatSetpoint:ThermalComfort:Fanger:SingleHeatingOrCooling",
          "memo": " Used for heating and cooling thermal comfort control with a single setpoint. The PMV setpoint can be scheduled and varied throughout the simulation for both heating and cooling.",
          "group_name": "Zone HVAC Controls and Thermostats",
          "group_id": 17
      },
      {
          "class_id": 1165,
          "class_name": "ThermostatSetpoint:ThermalComfort:Fanger:DualSetpoint",
          "memo": " Used for heating and cooling thermal comfort control with dual setpoints. The PMV setpoints can be scheduled and varied throughout the simulation for both heating and cooling.",
          "group_name": "Zone HVAC Controls and Thermostats",
          "group_id": 17
      },
      {
          "class_id": 1166,
          "class_name": "ZoneControl:Thermostat:StagedDualSetpoint",
          "memo": " Define the Thermostat StagedDualSetpoint settings for a zone or list of zones. If you use a ZoneList in the Zone or ZoneList name field then this definition applies to all the zones in the ZoneList.",
          "group_name": "Zone HVAC Controls and Thermostats",
          "group_id": 17
      },
      {
          "class_id": 1167,
          "class_name": "ZoneControl:ContaminantController",
          "memo": " Used to control a zone to a specified indoor level of CO2 or generic contaminants, or to specify minimum CO2 concentration schedule name for a zone.",
          "group_name": "Zone HVAC Controls and Thermostats",
          "group_id": 17
      },
      {
          "class_id": 1168,
          "class_name": "ZoneHVAC:IdealLoadsAirSystem",
          "memo": " Ideal system used to calculate loads without modeling a full HVAC system. All that is required for the ideal system are zone controls, zone equipment configurations, and the ideal loads system component. This component can be thought of as an ideal unit ",
          "group_name": "Zone HVAC Forced Air Units",
          "group_id": 18
      },
      {
          "class_id": 1169,
          "class_name": "ZoneHVAC:FourPipeFanCoil",
          "memo": " Four pipe fan coil system. Forced-convection hydronic heating-cooling unit with supply fan, hot water heating coil, chilled water cooling coil, and fixed-position outdoor air mixer.",
          "group_name": "Zone HVAC Forced Air Units",
          "group_id": 18
      },
      {
          "class_id": 1170,
          "class_name": "ZoneHVAC:WindowAirConditioner",
          "memo": " Window air conditioner. Forced-convection cooling-only unit with supply fan, direct expansion (DX) cooling coil, and fixed-position outdoor air mixer.",
          "group_name": "Zone HVAC Forced Air Units",
          "group_id": 18
      },
      {
          "class_id": 1171,
          "class_name": "ZoneHVAC:PackagedTerminalAirConditioner",
          "memo": " Packaged terminal air conditioner (PTAC). Forced-convection heating-cooling unit with supply fan, direct expansion (DX) cooling coil, heating coil (gas, electric, hot water, or steam) and fixed-position outdoor air mixer.",
          "group_name": "Zone HVAC Forced Air Units",
          "group_id": 18
      },
      {
          "class_id": 1172,
          "class_name": "ZoneHVAC:PackagedTerminalHeatPump",
          "memo": " Packaged terminal heat pump (PTHP). Forced-convection heating-cooling unit with supply fan, direct expansion (DX) cooling coil, DX heating coil (air-to-air heat pump), supplemental heating coil (gas, electric, hot water, or steam), and fixed-position out",
          "group_name": "Zone HVAC Forced Air Units",
          "group_id": 18
      },
      {
          "class_id": 1173,
          "class_name": "ZoneHVAC:WaterToAirHeatPump",
          "memo": " Water-to-air heat pump. Forced-convection heating-cooling unit with supply fan, water-to-air cooling and heating coils, supplemental heating coil (gas, electric, hot water, or steam), and fixed-position outdoor air mixer.",
          "group_name": "Zone HVAC Forced Air Units",
          "group_id": 18
      },
      {
          "class_id": 1174,
          "class_name": "ZoneHVAC:Dehumidifier:DX",
          "memo": " This object calculates the performance of zone (room) air dehumidifiers. Meant to model conventional direct expansion (DX) cooling-based room air dehumidifiers (reject 100% of condenser heat to the zone air), but this object might be able to be used to m",
          "group_name": "Zone HVAC Forced Air Units",
          "group_id": 18
      },
      {
          "class_id": 1175,
          "class_name": "ZoneHVAC:EnergyRecoveryVentilator",
          "memo": " This compound component models a stand-alone energy recovery ventilator (ERV) that conditions outdoor ventilation air and supplies that air directly to a zone. The ERV unit is modeled as a collection of components: air-to-air heat exchanger, supply air f",
          "group_name": "Zone HVAC Forced Air Units",
          "group_id": 18
      },
      {
          "class_id": 1176,
          "class_name": "ZoneHVAC:EnergyRecoveryVentilator:Controller",
          "memo": " This controller is used exclusively by the ZoneHVAC:EnergyRecoveryVentilator object to allow economizer (free cooling) operation when possible.",
          "group_name": "Zone HVAC Forced Air Units",
          "group_id": 18
      },
      {
          "class_id": 1177,
          "class_name": "ZoneHVAC:UnitVentilator",
          "memo": " Unit ventilator. Forced-convection ventilation unit with supply fan (constant-volume or variable-volume), optional chilled water cooling coil, optional heating coil (gas, electric, hot water, or steam) and controllable outdoor air mixer.",
          "group_name": "Zone HVAC Forced Air Units",
          "group_id": 18
      },
      {
          "class_id": 1178,
          "class_name": "ZoneHVAC:UnitHeater",
          "memo": " Unit heater. Forced-convection heating-only unit with supply fan, heating coil (gas, electric, hot water, or steam) and fixed-position outdoor air mixer.",
          "group_name": "Zone HVAC Forced Air Units",
          "group_id": 18
      },
      {
          "class_id": 1179,
          "class_name": "ZoneHVAC:EvaporativeCoolerUnit",
          "memo": " Zone evaporative cooler. Forced-convection cooling-only unit with supply fan, 100% outdoor air supply. Optional relief exhaust node",
          "group_name": "Zone HVAC Forced Air Units",
          "group_id": 18
      },
      {
          "class_id": 1180,
          "class_name": "ZoneHVAC:HybridUnitaryHVAC",
          "memo": " Hybrid Unitary HVAC. A black box model for multi-mode packaged forced air equipment. Independent variables include outdoor air conditions and indoor air conditions. Controlled inputs include operating mode, supply air flow rate, and outdoor air faction. ",
          "group_name": "Zone HVAC Forced Air Units",
          "group_id": 18
      },
      {
          "class_id": 1181,
          "class_name": "ZoneHVAC:OutdoorAirUnit",
          "memo": " The zone outdoor air unit models a single-zone dedicated outdoor air system (DOAS). Forced-convection 100% outdoor air unit with supply fan and optional equipment including exhaust fan, heating coil, cooling coil, and heat recovery.",
          "group_name": "Zone HVAC Forced Air Units",
          "group_id": 18
      },
      {
          "class_id": 1182,
          "class_name": "ZoneHVAC:OutdoorAirUnit:EquipmentList",
          "memo": " Equipment list for components in a ZoneHVAC:OutdoorAirUnit. Components are simulated sequentially in the order given in the equipment list.",
          "group_name": "Zone HVAC Forced Air Units",
          "group_id": 18
      },
      {
          "class_id": 1183,
          "class_name": "ZoneHVAC:TerminalUnit:VariableRefrigerantFlow",
          "memo": " A terminal unit with variable refrigerant flow (VRF) DX cooling and heating coils (air-to-air heat pump). The VRF terminal units are served by an AirConditioner:VariableRefrigerantFlow or AirConditioner:VariableRefrigerantFlow:FluidTemperatureControl:* s",
          "group_name": "Zone HVAC Forced Air Units",
          "group_id": 18
      },
      {
          "class_id": 1184,
          "class_name": "ZoneHVAC:Baseboard:RadiantConvective:Water:Design",
          "memo": "",
          "group_name": "Zone HVAC Radiative/Convective Units",
          "group_id": 19
      },
      {
          "class_id": 1185,
          "class_name": "ZoneHVAC:Baseboard:RadiantConvective:Water",
          "memo": " The number of surfaces can be expanded beyond 100, if necessary, by adding more groups to the end of the list",
          "group_name": "Zone HVAC Radiative/Convective Units",
          "group_id": 19
      },
      {
          "class_id": 1186,
          "class_name": "ZoneHVAC:Baseboard:RadiantConvective:Steam:Design",
          "memo": "",
          "group_name": "Zone HVAC Radiative/Convective Units",
          "group_id": 19
      },
      {
          "class_id": 1187,
          "class_name": "ZoneHVAC:Baseboard:RadiantConvective:Steam",
          "memo": " The number of surfaces can be expanded beyond 100, if necessary, by adding more groups to the end of the list.",
          "group_name": "Zone HVAC Radiative/Convective Units",
          "group_id": 19
      },
      {
          "class_id": 1188,
          "class_name": "ZoneHVAC:Baseboard:RadiantConvective:Electric",
          "memo": " The number of surfaces can be expanded beyond 100, if necessary, by adding more groups to the end of the list",
          "group_name": "Zone HVAC Radiative/Convective Units",
          "group_id": 19
      },
      {
          "class_id": 1189,
          "class_name": "ZoneHVAC:CoolingPanel:RadiantConvective:Water",
          "memo": " The number of surfaces can be expanded beyond 100, if necessary, by adding more groups to the end of the list",
          "group_name": "Zone HVAC Radiative/Convective Units",
          "group_id": 19
      },
      {
          "class_id": 1190,
          "class_name": "ZoneHVAC:Baseboard:Convective:Water",
          "memo": " Hot water baseboard heater, convection-only. Natural convection hydronic heating unit.",
          "group_name": "Zone HVAC Radiative/Convective Units",
          "group_id": 19
      },
      {
          "class_id": 1191,
          "class_name": "ZoneHVAC:Baseboard:Convective:Electric",
          "memo": " Electric baseboard heater, convection-only. Natural convection electric heating unit.",
          "group_name": "Zone HVAC Radiative/Convective Units",
          "group_id": 19
      },
      {
          "class_id": 1192,
          "class_name": "ZoneHVAC:LowTemperatureRadiant:VariableFlow",
          "memo": " Low temperature hydronic radiant heating and/or cooling system embedded in a building surface (wall, ceiling, or floor). Controlled by varying the hot or chilled water flow to the unit.",
          "group_name": "Zone HVAC Radiative/Convective Units",
          "group_id": 19
      },
      {
          "class_id": 1193,
          "class_name": "ZoneHVAC:LowTemperatureRadiant:VariableFlow:Design",
          "memo": "",
          "group_name": "Zone HVAC Radiative/Convective Units",
          "group_id": 19
      },
      {
          "class_id": 1194,
          "class_name": "ZoneHVAC:LowTemperatureRadiant:ConstantFlow",
          "memo": " Low temperature hydronic radiant heating and/or cooling system embedded in a building surface (wall, ceiling, or floor). Controlled by varying the hot or chilled water temperature circulating through the unit.",
          "group_name": "Zone HVAC Radiative/Convective Units",
          "group_id": 19
      },
      {
          "class_id": 1195,
          "class_name": "ZoneHVAC:LowTemperatureRadiant:ConstantFlow:Design",
          "memo": "",
          "group_name": "Zone HVAC Radiative/Convective Units",
          "group_id": 19
      },
      {
          "class_id": 1196,
          "class_name": "ZoneHVAC:LowTemperatureRadiant:Electric",
          "memo": " Electric resistance low temperature radiant system",
          "group_name": "Zone HVAC Radiative/Convective Units",
          "group_id": 19
      },
      {
          "class_id": 1197,
          "class_name": "ZoneHVAC:LowTemperatureRadiant:SurfaceGroup",
          "memo": " This is used to allow the coordinate control of several radiant system surfaces. Note that the following flow fractions must sum up to 1.0 The number of surfaces can be expanded beyond 100, if necessary, by adding more groups to the end of the list",
          "group_name": "Zone HVAC Radiative/Convective Units",
          "group_id": 19
      },
      {
          "class_id": 1198,
          "class_name": "ZoneHVAC:HighTemperatureRadiant",
          "memo": " The number of surfaces can be expanded beyond 100, if necessary, by adding more groups to the end of the list",
          "group_name": "Zone HVAC Radiative/Convective Units",
          "group_id": 19
      },
      {
          "class_id": 1199,
          "class_name": "ZoneHVAC:VentilatedSlab",
          "memo": " Ventilated slab system where outdoor air flows through hollow cores in a building surface (wall, ceiling, or floor).",
          "group_name": "Zone HVAC Radiative/Convective Units",
          "group_id": 19
      },
      {
          "class_id": 1200,
          "class_name": "ZoneHVAC:VentilatedSlab:SlabGroup",
          "memo": " This is used to allow the coordinate control of several ventilated slab system surfaces. Note that the flow fractions must sum up to 1.0. The number of surfaces can be expanded beyond 10, if necessary, by adding more groups to the end of the list",
          "group_name": "Zone HVAC Radiative/Convective Units",
          "group_id": 19
      },
      {
          "class_id": 1201,
          "class_name": "AirTerminal:SingleDuct:ConstantVolume:Reheat",
          "memo": " Central air system terminal unit, single duct, constant volume, with reheat coil (hot water, electric, gas, or steam).",
          "group_name": "Zone HVAC Air Loop Terminal Units",
          "group_id": 20
      },
      {
          "class_id": 1202,
          "class_name": "AirTerminal:SingleDuct:ConstantVolume:NoReheat",
          "memo": " Central air system terminal unit, single duct, constant volume, without reheat coil",
          "group_name": "Zone HVAC Air Loop Terminal Units",
          "group_id": 20
      },
      {
          "class_id": 1203,
          "class_name": "AirTerminal:SingleDuct:VAV:NoReheat",
          "memo": " Central air system terminal unit, single duct, variable volume, with no reheat coil.",
          "group_name": "Zone HVAC Air Loop Terminal Units",
          "group_id": 20
      },
      {
          "class_id": 1204,
          "class_name": "AirTerminal:SingleDuct:VAV:Reheat",
          "memo": " Central air system terminal unit, single duct, variable volume, with reheat coil (hot water, electric, gas, or steam).",
          "group_name": "Zone HVAC Air Loop Terminal Units",
          "group_id": 20
      },
      {
          "class_id": 1205,
          "class_name": "AirTerminal:SingleDuct:VAV:Reheat:VariableSpeedFan",
          "memo": " Central air system terminal unit, single duct, variable volume, with reheat coil (hot water, electric, gas, or steam) and variable-speed fan. These units are usually employed in underfloor air distribution (UFAD) systems where the air is supplied at low ",
          "group_name": "Zone HVAC Air Loop Terminal Units",
          "group_id": 20
      },
      {
          "class_id": 1206,
          "class_name": "AirTerminal:SingleDuct:VAV:HeatAndCool:NoReheat",
          "memo": " Central air system terminal unit, single duct, variable volume for both cooling and heating, with no reheat coil.",
          "group_name": "Zone HVAC Air Loop Terminal Units",
          "group_id": 20
      },
      {
          "class_id": 1207,
          "class_name": "AirTerminal:SingleDuct:VAV:HeatAndCool:Reheat",
          "memo": " Central air system terminal unit, single duct, variable volume for both cooling and heating, with reheat coil (hot water, electric, gas, or steam).",
          "group_name": "Zone HVAC Air Loop Terminal Units",
          "group_id": 20
      },
      {
          "class_id": 1208,
          "class_name": "AirTerminal:SingleDuct:SeriesPIU:Reheat",
          "memo": " Central air system terminal unit, single duct, variable volume, series powered induction unit (PIU), with reheat coil (hot water, electric, gas, or steam).",
          "group_name": "Zone HVAC Air Loop Terminal Units",
          "group_id": 20
      },
      {
          "class_id": 1209,
          "class_name": "AirTerminal:SingleDuct:ParallelPIU:Reheat",
          "memo": " Central air system terminal unit, single duct, variable volume, parallel powered induction unit (PIU), with reheat coil (hot water, electric, gas, or steam).",
          "group_name": "Zone HVAC Air Loop Terminal Units",
          "group_id": 20
      },
      {
          "class_id": 1210,
          "class_name": "AirTerminal:SingleDuct:ConstantVolume:FourPipeInduction",
          "memo": " Central air system terminal unit, single duct, variable volume, induction unit with hot water reheat coil and chilled water recool coil.",
          "group_name": "Zone HVAC Air Loop Terminal Units",
          "group_id": 20
      },
      {
          "class_id": 1211,
          "class_name": "AirTerminal:SingleDuct:ConstantVolume:FourPipeBeam",
          "memo": " Central air system terminal unit, single duct, constant volume, with heating and/or cooling. Operates as two-pipe unit if heating or cooling water is omitted. Heating and/or cooling can be scheduled off for dedicated ventilation.",
          "group_name": "Zone HVAC Air Loop Terminal Units",
          "group_id": 20
      },
      {
          "class_id": 1212,
          "class_name": "AirTerminal:SingleDuct:ConstantVolume:CooledBeam",
          "memo": " Central air system terminal unit, single duct, constant volume, with cooled beam (active or passive).",
          "group_name": "Zone HVAC Air Loop Terminal Units",
          "group_id": 20
      },
      {
          "class_id": 1213,
          "class_name": "AirTerminal:SingleDuct:Mixer",
          "memo": " The mixer air terminal unit provides a means of supplying central system air to the air inlet or outlet side of a zoneHVAC equipment such as a four pipe fan coil unit. Normally the central air would be ventilation air from a dedicated outdoor air system ",
          "group_name": "Zone HVAC Air Loop Terminal Units",
          "group_id": 20
      },
      {
          "class_id": 1214,
          "class_name": "AirTerminal:DualDuct:ConstantVolume",
          "memo": " Central air system terminal unit, dual duct, constant volume.",
          "group_name": "Zone HVAC Air Loop Terminal Units",
          "group_id": 20
      },
      {
          "class_id": 1215,
          "class_name": "AirTerminal:DualDuct:VAV",
          "memo": " Central air system terminal unit, dual duct, variable volume.",
          "group_name": "Zone HVAC Air Loop Terminal Units",
          "group_id": 20
      },
      {
          "class_id": 1216,
          "class_name": "AirTerminal:DualDuct:VAV:OutdoorAir",
          "memo": " Central air system terminal unit, dual duct, variable volume with special controls. One VAV duct is controlled to supply ventilation air and the other VAV duct is controlled to meet the zone cooling load.",
          "group_name": "Zone HVAC Air Loop Terminal Units",
          "group_id": 20
      },
      {
          "class_id": 1217,
          "class_name": "ZoneHVAC:AirDistributionUnit",
          "memo": " Central air system air distribution unit, serves as a wrapper for a specific type of air terminal unit. This object is referenced in a ZoneHVAC:EquipmentList.",
          "group_name": "Zone HVAC Air Loop Terminal Units",
          "group_id": 20
      },
      {
          "class_id": 1218,
          "class_name": "ZoneHVAC:ExhaustControl",
          "memo": " Defines a controlled exhaust flow from a zone which finally feeds into one of AirLoopHVAC:ZoneMixer's inlets, which are part of an AirLoopHVAC:ExhaustSystem.",
          "group_name": "Zone HVAC Air Loop Terminal Units",
          "group_id": 20
      },
      {
          "class_id": 1219,
          "class_name": "ZoneHVAC:EquipmentList",
          "memo": " List equipment in simulation order. Note that an ZoneHVAC:AirDistributionUnit object must be listed in this statement if there is a forced air system serving the zone from the air loop. Equipment is simulated in the order specified by Zone Equipment Cool",
          "group_name": "Zone HVAC Equipment Connections",
          "group_id": 21
      },
      {
          "class_id": 1220,
          "class_name": "ZoneHVAC:EquipmentConnections",
          "memo": " Specifies the HVAC equipment connections for a zone. Node names are specified for the zone air node, air inlet nodes, air exhaust nodes, and the air return node. A zone equipment list is referenced which lists all HVAC equipment connected to the zone.",
          "group_name": "Zone HVAC Equipment Connections",
          "group_id": 21
      },
      {
          "class_id": 1221,
          "class_name": "Fan:SystemModel",
          "memo": " Versatile simple fan that can be used in variable air volume, constant volume, on-off cycling, two-speed or multi-speed applications. Performance at different flow rates, or speed levels, is determined using separate performance curve or table or prescri",
          "group_name": "Fans",
          "group_id": 22
      },
      {
          "class_id": 1222,
          "class_name": "Fan:ConstantVolume",
          "memo": " Constant volume fan that is intended to operate continuously based on a time schedule. This fan will not cycle on and off based on cooling/heating load or other control signals.",
          "group_name": "Fans",
          "group_id": 22
      },
      {
          "class_id": 1223,
          "class_name": "Fan:VariableVolume",
          "memo": " Variable air volume fan where the electric power input varies according to a performance curve as a function of flow fraction.",
          "group_name": "Fans",
          "group_id": 22
      },
      {
          "class_id": 1224,
          "class_name": "Fan:OnOff",
          "memo": " Constant volume fan that is intended to cycle on and off based on cooling/heating load or other control signals. This fan can also operate continuously like Fan:ConstantVolume.",
          "group_name": "Fans",
          "group_id": 22
      },
      {
          "class_id": 1225,
          "class_name": "Fan:ZoneExhaust",
          "memo": " Models a fan that exhausts air from a zone.",
          "group_name": "Fans",
          "group_id": 22
      },
      {
          "class_id": 1226,
          "class_name": "FanPerformance:NightVentilation",
          "memo": " Specifies an alternate set of performance parameters for a fan. These alternate parameters are used when a system manager (such as AvailabilityManager:NightVentilation) sets a specified flow rate. May be used with Fan:ConstantVolume, Fan:VariableVolume a",
          "group_name": "Fans",
          "group_id": 22
      },
      {
          "class_id": 1227,
          "class_name": "Fan:ComponentModel",
          "memo": " A detailed fan type for constant-air-volume (CAV) and variable-air-volume (VAV) systems. It includes inputs that describe the air-distribution system as well as the fan, drive belt (if used), motor, and variable-frequency-drive (if used).",
          "group_name": "Fans",
          "group_id": 22
      },
      {
          "class_id": 1228,
          "class_name": "Coil:Cooling:Water",
          "memo": " Chilled water cooling coil, NTU-effectiveness model, with inputs for design entering and leaving conditions.",
          "group_name": "Coils",
          "group_id": 23
      },
      {
          "class_id": 1229,
          "class_name": "Coil:Cooling:Water:DetailedGeometry",
          "memo": " Chilled water cooling coil, detailed flat fin coil model for continuous plate fins, with inputs for detailed coil geometry specifications.",
          "group_name": "Coils",
          "group_id": 23
      },
      {
          "class_id": 1230,
          "class_name": "CoilSystem:Cooling:Water",
          "memo": " Virtual container component that consists of a water cooling coil and its associated controls. This control object supports the available water coil types and may be placed directly on an air loop branch or in an outdoor air equipment list.",
          "group_name": "Coils",
          "group_id": 23
      },
      {
          "class_id": 1231,
          "class_name": "Coil:Cooling:DX",
          "memo": " New general DX cooling coil supporting on or more speeds and one or or operating  modes. Includes DX evaporator coil, compressor, and condenser. Object is currently only supported by the AIRLOOPHVAC:UNITARYSYSTEM object. Remaining Coil:Cooling:DX* object",
          "group_name": "Coils",
          "group_id": 23
      },
      {
          "class_id": 1232,
          "class_name": "Coil:Cooling:DX:CurveFit:Performance",
          "memo": " DX cooling coil performance specification referencing one or more operating modes. Mode 1 is always the base design operating mode. Additional modes are optional states such as subcool reheat for humidity control.",
          "group_name": "Coils",
          "group_id": 23
      },
      {
          "class_id": 1233,
          "class_name": "Coil:Cooling:DX:CurveFit:OperatingMode",
          "memo": " DX cooling coil performance for a single operating mode which may have one or more speeds.",
          "group_name": "Coils",
          "group_id": 23
      },
      {
          "class_id": 1234,
          "class_name": "Coil:Cooling:DX:CurveFit:Speed",
          "memo": " DX cooling coil performance for a single speed within a single operating mode.",
          "group_name": "Coils",
          "group_id": 23
      },
      {
          "class_id": 1235,
          "class_name": "Coil:Cooling:DX:SingleSpeed",
          "memo": " Direct expansion (DX) cooling coil and condensing unit (includes electric compressor and condenser fan), single-speed. Optional inputs for moisture evaporation from wet coil when compressor cycles off with continuous fan operation.",
          "group_name": "Coils",
          "group_id": 23
      },
      {
          "class_id": 1236,
          "class_name": "Coil:Cooling:DX:TwoSpeed",
          "memo": " Direct expansion (DX) cooling coil and condensing unit (includes electric compressor and condenser fan), two-speed (or variable-speed). Requires two sets of performance data and will interpolate between speeds. Modeled as a single coil (multi-speed compr",
          "group_name": "Coils",
          "group_id": 23
      },
      {
          "class_id": 1237,
          "class_name": "Coil:Cooling:DX:MultiSpeed",
          "memo": " Direct expansion (DX) cooling coil and condensing unit (includes electric or engine-driven compressor and condenser fan), multi-speed (or variable-speed). Optional moisture evaporation from wet coil when compressor cycles off with continuous fan operatio",
          "group_name": "Coils",
          "group_id": 23
      },
      {
          "class_id": 1238,
          "class_name": "Coil:Cooling:DX:VariableSpeed",
          "memo": " Direct expansion (DX) cooling coil and condensing unit (includes electric compressor and condenser fan), variable-speed. Optional inputs for moisture evaporation from wet coil when compressor cycles off with continuous fan operation. Requires two to ten ",
          "group_name": "Coils",
          "group_id": 23
      },
      {
          "class_id": 1239,
          "class_name": "Coil:Cooling:DX:TwoStageWithHumidityControlMode",
          "memo": " Direct expansion (DX) cooling coil and condensing unit (includes electric compressor and condenser fan), two-stage with humidity control mode (e.g. sub-cool or hot gas reheat). Optional inputs for moisture evaporation from wet coil when compressor cycles",
          "group_name": "Coils",
          "group_id": 23
      },
      {
          "class_id": 1240,
          "class_name": "CoilPerformance:DX:Cooling",
          "memo": " Used to specify DX cooling coil performance for one mode of operation for a Coil:Cooling:DX:TwoStageWithHumidityControlMode object which may reference one to four CoilPerformance:DX:Cooling objects depending on the specified number of stages and dehumidi",
          "group_name": "Coils",
          "group_id": 23
      },
      {
          "class_id": 1241,
          "class_name": "Coil:Cooling:DX:VariableRefrigerantFlow",
          "memo": " Variable refrigerant flow (VRF) direct expansion (DX) cooling coil. Used with ZoneHVAC:TerminalUnit:VariableRefrigerantFlow. Condensing unit is modeled separately, see AirConditioner:VariableRefrigerantFlow.",
          "group_name": "Coils",
          "group_id": 23
      },
      {
          "class_id": 1242,
          "class_name": "Coil:Heating:DX:VariableRefrigerantFlow",
          "memo": " Variable refrigerant flow (VRF) direct expansion (DX) heating coil (air-to-air heat pump). Used with ZoneHVAC:TerminalUnit:VariableRefrigerantFlow. Condensing unit is modeled separately, see AirConditioner:VariableRefrigerantFlow.",
          "group_name": "Coils",
          "group_id": 23
      },
      {
          "class_id": 1243,
          "class_name": "Coil:Cooling:DX:VariableRefrigerantFlow:FluidTemperatureControl",
          "memo": " This is a key object in the new physics based VRF model applicable for Fluid Temperature Control. It describes the the indoor unit coil of the system at cooling mode. Used with ZoneHVAC:TerminalUnit:VariableRefrigerantFlow. Outdoor unit is modeled separa",
          "group_name": "Coils",
          "group_id": 23
      },
      {
          "class_id": 1244,
          "class_name": "Coil:Heating:DX:VariableRefrigerantFlow:FluidTemperatureControl",
          "memo": " This is a key object in the new physics based VRF model applicable for Fluid Temperature Control. It describes the the indoor unit coil of the system at heating mode. Used with ZoneHVAC:TerminalUnit:VariableRefrigerantFlow. Outdoor unit is modeled separa",
          "group_name": "Coils",
          "group_id": 23
      },
      {
          "class_id": 1245,
          "class_name": "Coil:Heating:Water",
          "memo": " Hot water heating coil, NTU-effectiveness model, assumes a cross-flow heat exchanger. Two options for capacity inputs: UA and water flow rate or capacity and design temperatures.",
          "group_name": "Coils",
          "group_id": 23
      },
      {
          "class_id": 1246,
          "class_name": "Coil:Heating:Steam",
          "memo": " Steam heating coil. Condenses and sub-cools steam at loop pressure and discharges condensate through steam traps to low pressure condensate line.",
          "group_name": "Coils",
          "group_id": 23
      },
      {
          "class_id": 1247,
          "class_name": "Coil:Heating:Electric",
          "memo": " Electric heating coil. If the coil is located directly in an air loop branch or outdoor air equipment list, then it is controlled on leaving air temperature and the Temperature Setpoint Node Name must be specified. If the coil is contained within another",
          "group_name": "Coils",
          "group_id": 23
      },
      {
          "class_id": 1248,
          "class_name": "Coil:Heating:Electric:MultiStage",
          "memo": " Electric heating coil, multi-stage. If the coil is located directly in an air loop branch or outdoor air equipment list, then it is controlled on leaving air temperature and the Temperature Setpoint Node Name must be specified. If the coil is contained w",
          "group_name": "Coils",
          "group_id": 23
      },
      {
          "class_id": 1249,
          "class_name": "Coil:Heating:Fuel",
          "memo": " Gas or other fuel heating coil. If the coil is located directly in an air loop branch or outdoor air equipment list, then it is controlled on leaving air temperature and the Temperature Setpoint Node Name must be specified. If the coil is contained withi",
          "group_name": "Coils",
          "group_id": 23
      },
      {
          "class_id": 1250,
          "class_name": "Coil:Heating:Gas:MultiStage",
          "memo": " Gas heating coil, multi-stage. If the coil is located directly in an air loop branch or outdoor air equipment list, then it is controlled on leaving air temperature and the Temperature Setpoint Node Name must be specified. If the coil is contained within",
          "group_name": "Coils",
          "group_id": 23
      },
      {
          "class_id": 1251,
          "class_name": "Coil:Heating:Desuperheater",
          "memo": " Desuperheater air heating coil. The heating energy provided by this coil is reclaimed from the superheated refrigerant gas leaving a compressor and does not impact the performance of the compressor. If the coil is located directly in an air loop branch o",
          "group_name": "Coils",
          "group_id": 23
      },
      {
          "class_id": 1252,
          "class_name": "Coil:Heating:DX:SingleSpeed",
          "memo": " Direct expansion (DX) heating coil (air-to-air heat pump) and compressor unit (includes electric compressor and outdoor fan), single-speed, with defrost controls.",
          "group_name": "Coils",
          "group_id": 23
      },
      {
          "class_id": 1253,
          "class_name": "Coil:Heating:DX:MultiSpeed",
          "memo": " Direct expansion (DX) heating coil (air-to-air heat pump) and compressor unit (includes electric or engine-driven compressor and outdoor fan), multi-speed (or variable-speed), with defrost controls. Requires two to four sets of performance data and will ",
          "group_name": "Coils",
          "group_id": 23
      },
      {
          "class_id": 1254,
          "class_name": "Coil:Heating:DX:VariableSpeed",
          "memo": " Direct expansion (DX) heating coil (air-to-air heat pump) and compressor unit (includes electric compressor and outdoor fan), variable-speed, with defrost controls. Requires two to ten sets of performance data and will interpolate between speeds.",
          "group_name": "Coils",
          "group_id": 23
      },
      {
          "class_id": 1255,
          "class_name": "Coil:Cooling:WaterToAirHeatPump:ParameterEstimation",
          "memo": " Direct expansion (DX) cooling coil for water-to-air heat pump (includes electric compressor), single-speed, parameter estimation model. Optional inputs for moisture evaporation from wet coil when compressor cycles off with continuous fan operation. Param",
          "group_name": "Coils",
          "group_id": 23
      },
      {
          "class_id": 1256,
          "class_name": "Coil:Heating:WaterToAirHeatPump:ParameterEstimation",
          "memo": " Direct expansion (DX) heating coil for water-to-air heat pump (includes electric compressor), single-speed, parameter estimation model. Parameter estimation model is a deterministic model that requires a consistent set of parameters to describe the opera",
          "group_name": "Coils",
          "group_id": 23
      },
      {
          "class_id": 1257,
          "class_name": "Coil:Cooling:WaterToAirHeatPump:EquationFit",
          "memo": " Direct expansion (DX) cooling coil for water-to-air heat pump (includes electric compressor), single-speed, equation-fit model. Optional inputs for moisture evaporation from wet coil when compressor cycles off with continuous fan operation. Equation-fit ",
          "group_name": "Coils",
          "group_id": 23
      },
      {
          "class_id": 1258,
          "class_name": "Coil:Cooling:WaterToAirHeatPump:VariableSpeedEquationFit",
          "memo": " Direct expansion (DX) cooling coil for water-to-air heat pump (includes electric compressor), variable-speed, equation-fit model. Optional inputs for moisture evaporation from wet coil when compressor cycles off with continuous fan operation. Equation-fi",
          "group_name": "Coils",
          "group_id": 23
      },
      {
          "class_id": 1259,
          "class_name": "Coil:Heating:WaterToAirHeatPump:EquationFit",
          "memo": " Direct expansion (DX) heating coil for water-to-air heat pump (includes electric compressor), single-speed, equation-fit model. Equation-fit model uses normalized curves to describe the heat pump performance.",
          "group_name": "Coils",
          "group_id": 23
      },
      {
          "class_id": 1260,
          "class_name": "Coil:Heating:WaterToAirHeatPump:VariableSpeedEquationFit",
          "memo": " Direct expansion (DX) heating coil for water-to-air heat pump (includes electric compressor), variable-speed, equation-fit model. Equation-fit model uses normalized curves to describe the heat pump performance. Requires two to ten sets of performance dat",
          "group_name": "Coils",
          "group_id": 23
      },
      {
          "class_id": 1261,
          "class_name": "Coil:WaterHeating:AirToWaterHeatPump:Pumped",
          "memo": " Heat pump water heater (HPWH) heating coil, air-to-water direct-expansion (DX) system which includes a water heating coil, evaporator air coil, evaporator fan, electric compressor, and water pump. Part of a WaterHeater:HeatPump:PumpedCondenser system.",
          "group_name": "Coils",
          "group_id": 23
      },
      {
          "class_id": 1262,
          "class_name": "Coil:WaterHeating:AirToWaterHeatPump:Wrapped",
          "memo": " Heat pump water heater (HPWH) heating coil, air-to-water direct-expansion (DX) system which includes a water heating coil, evaporator air coil, evaporator fan, electric compressor, and water pump. Part of a WaterHeater:HeatPump:WrappedCondenser system.",
          "group_name": "Coils",
          "group_id": 23
      },
      {
          "class_id": 1263,
          "class_name": "Coil:WaterHeating:AirToWaterHeatPump:VariableSpeed",
          "memo": " vairlable-speed Heat pump water heater (VSHPWH) heating coil, air-to-water direct-expansion (DX) system which includes a variable-speed water heating coil, evaporator air coil, evaporator fan, electric compressor, and water pump. Part of a WaterHeater:He",
          "group_name": "Coils",
          "group_id": 23
      },
      {
          "class_id": 1264,
          "class_name": "Coil:WaterHeating:Desuperheater",
          "memo": " Desuperheater air heating coil. The heating energy provided by this coil is reclaimed from the superheated refrigerant gas leaving a compressor and does not impact the performance of the compressor. This coil must be used with a water heater tank, see Wa",
          "group_name": "Coils",
          "group_id": 23
      },
      {
          "class_id": 1265,
          "class_name": "CoilSystem:Cooling:DX",
          "memo": " Virtual container component that consists of a DX cooling coil and its associated controls. This control object supports several different types of DX cooling coils and may be placed directly in an air loop branch or outdoor air equipment list.",
          "group_name": "Coils",
          "group_id": 23
      },
      {
          "class_id": 1266,
          "class_name": "CoilSystem:Heating:DX",
          "memo": " Virtual container component that consists of a DX heating coil (heat pump) and its associated controls. This control object supports two different types of DX heating coils and may be placed directly in an air loop branch or outdoor air equipment list.",
          "group_name": "Coils",
          "group_id": 23
      },
      {
          "class_id": 1267,
          "class_name": "CoilSystem:Cooling:Water:HeatExchangerAssisted",
          "memo": " Virtual component consisting of a chilled-water cooling coil and an air-to-air heat exchanger. The air-to-air heat exchanger precools the air entering the cooling coil and reuses this energy to reheat the supply air leaving the cooling coil. This heat ex",
          "group_name": "Coils",
          "group_id": 23
      },
      {
          "class_id": 1268,
          "class_name": "CoilSystem:Cooling:DX:HeatExchangerAssisted",
          "memo": " Virtual component consisting of a direct expansion (DX) cooling coil and an air-to-air heat exchanger. The air-to-air heat exchanger precools the air entering the cooling coil and reuses this energy to reheat the supply air leaving the cooling coil. This",
          "group_name": "Coils",
          "group_id": 23
      },
      {
          "class_id": 1269,
          "class_name": "CoilSystem:IntegratedHeatPump:AirSource",
          "memo": " This object is used for air-source integrated heat pump, a collection of its working modes.",
          "group_name": "Coils",
          "group_id": 23
      },
      {
          "class_id": 1270,
          "class_name": "Coil:Cooling:DX:SingleSpeed:ThermalStorage",
          "memo": " Direct expansion (DX) cooling coil and condensing unit (includes electric compressor and condenser fan), single-speed with packaged integrated thermal storage for cooling.",
          "group_name": "Coils",
          "group_id": 23
      },
      {
          "class_id": 1271,
          "class_name": "EvaporativeCooler:Direct:CelDekPad",
          "memo": " Direct evaporative cooler with rigid media evaporative pad and recirculating water pump. This model has no controls other than its availability schedule.",
          "group_name": "Evaporative Coolers",
          "group_id": 24
      },
      {
          "class_id": 1272,
          "class_name": "EvaporativeCooler:Indirect:CelDekPad",
          "memo": " Indirect evaporative cooler with rigid media evaporative pad, recirculating water pump, and secondary air fan. This model has no controls other than its availability schedule.",
          "group_name": "Evaporative Coolers",
          "group_id": 24
      },
      {
          "class_id": 1273,
          "class_name": "EvaporativeCooler:Indirect:WetCoil",
          "memo": " Indirect evaporative cooler with wetted coil, recirculating water pump, and secondary air fan. This model has no controls other than its availability schedule.",
          "group_name": "Evaporative Coolers",
          "group_id": 24
      },
      {
          "class_id": 1274,
          "class_name": "EvaporativeCooler:Indirect:ResearchSpecial",
          "memo": " Indirect evaporative cooler with user-specified effectiveness (can represent rigid pad or wetted coil), recirculating water pump, and secondary air fan. This model is controlled to meet the primary air outlet temperature setpoint.",
          "group_name": "Evaporative Coolers",
          "group_id": 24
      },
      {
          "class_id": 1275,
          "class_name": "EvaporativeCooler:Direct:ResearchSpecial",
          "memo": " Direct evaporative cooler with user-specified effectiveness (can represent rigid pad or similar media), and recirculating water pump, and secondary air fan. This model is controlled to meet the primary air outlet temperature setpoint.",
          "group_name": "Evaporative Coolers",
          "group_id": 24
      },
      {
          "class_id": 1276,
          "class_name": "Humidifier:Steam:Electric",
          "memo": " Electrically heated steam humidifier with fan.",
          "group_name": "Humidifiers and Dehumidifiers",
          "group_id": 25
      },
      {
          "class_id": 1277,
          "class_name": "Humidifier:Steam:Gas",
          "memo": " Natural gas fired steam humidifier with optional blower fan.",
          "group_name": "Humidifiers and Dehumidifiers",
          "group_id": 25
      },
      {
          "class_id": 1278,
          "class_name": "Dehumidifier:Desiccant:NoFans",
          "memo": " This object models a solid desiccant dehumidifier. The process air stream is the air which is dehumidified. The regeneration air stream is the air which is heated to regenerate the desiccant. This object determines the process air outlet conditions, the ",
          "group_name": "Humidifiers and Dehumidifiers",
          "group_id": 25
      },
      {
          "class_id": 1279,
          "class_name": "Dehumidifier:Desiccant:System",
          "memo": " This compound object models a desiccant heat exchanger, an optional heater, and associated fans. The process air stream is the air which is dehumidified. The regeneration air stream is the air which is heated to regenerate the desiccant. The desiccant he",
          "group_name": "Humidifiers and Dehumidifiers",
          "group_id": 25
      },
      {
          "class_id": 1280,
          "class_name": "HeatExchanger:AirToAir:FlatPlate",
          "memo": " Flat plate air-to-air heat exchanger, typically used for exhaust or relief air heat recovery.",
          "group_name": "Heat Recovery",
          "group_id": 26
      },
      {
          "class_id": 1281,
          "class_name": "HeatExchanger:AirToAir:SensibleAndLatent",
          "memo": " This object models an air-to-air heat exchanger using effectiveness relationships. The heat exchanger can transfer sensible energy, latent energy, or both between the supply (primary) and exhaust (secondary) air streams.",
          "group_name": "Heat Recovery",
          "group_id": 26
      },
      {
          "class_id": 1282,
          "class_name": "HeatExchanger:Desiccant:BalancedFlow",
          "memo": " This object models a balanced desiccant heat exchanger. The heat exchanger transfers both sensible and latent energy between the process and regeneration air streams. The air flow rate and face velocity are assumed to be the same on both the process and ",
          "group_name": "Heat Recovery",
          "group_id": 26
      },
      {
          "class_id": 1283,
          "class_name": "HeatExchanger:Desiccant:BalancedFlow:PerformanceDataType1",
          "memo": " RTO = B1 + B2*RWI + B3*RTI + B4*(RWI/RTI) + B5*PWI + B6*PTI + B7*(PWI/PTI) + B8*RFV RWO = C1 + C2*RWI + C3*RTI + C4*(RWI/RTI) + C5*PWI + C6*PTI + C7*(PWI/PTI) + C8*RFV where, RTO = Dry-bulb temperature of the regeneration outlet air (C) RWO = Humidity ra",
          "group_name": "Heat Recovery",
          "group_id": 26
      },
      {
          "class_id": 1284,
          "class_name": "AirLoopHVAC:UnitarySystem",
          "memo": " AirloopHVAC:UnitarySystem is a generic HVAC system type that allows any configuration of coils and/or fan. This object is a replacement of other AirloopHVAC objects. This object can be used in outdoor air systems, outdoor air units, air loops, and as zon",
          "group_name": "Unitary Equipment",
          "group_id": 27
      },
      {
          "class_id": 1285,
          "class_name": "UnitarySystemPerformance:Multispeed",
          "memo": " The UnitarySystemPerformance object is used to specify the air flow ratio at each operating speed. This object is primarily used for multispeed DX and water coils to allow operation at alternate flow rates different from those specified in the coil objec",
          "group_name": "Unitary Equipment",
          "group_id": 27
      },
      {
          "class_id": 1286,
          "class_name": "AirLoopHVAC:Unitary:Furnace:HeatOnly",
          "memo": " Unitary system, heating-only with constant volume supply fan (continuous or cycling) and heating coil (gas, electric, hot water, or steam). Identical to AirLoopHVAC:UnitaryHeatOnly.",
          "group_name": "Unitary Equipment",
          "group_id": 27
      },
      {
          "class_id": 1287,
          "class_name": "AirLoopHVAC:Unitary:Furnace:HeatCool",
          "memo": " Unitary system, heating and cooling with constant volume supply fan (continuous or cycling), direct expansion (DX) cooling coil, heating coil (gas, electric, hot water, or steam), and optional reheat coil for dehumidification control. Identical to AirLoo",
          "group_name": "Unitary Equipment",
          "group_id": 27
      },
      {
          "class_id": 1288,
          "class_name": "AirLoopHVAC:UnitaryHeatOnly",
          "memo": " Unitary system, heating-only with constant volume supply fan (continuous or cycling) and heating coil (gas, electric, hot water, or steam). Identical to AirLoopHVAC:Unitary:Furnace:HeatOnly.",
          "group_name": "Unitary Equipment",
          "group_id": 27
      },
      {
          "class_id": 1289,
          "class_name": "AirLoopHVAC:UnitaryHeatCool",
          "memo": " Unitary system, heating and cooling with constant volume supply fan (continuous or cycling), direct expansion (DX) cooling coil, heating coil (gas, electric, hot water, or steam), and optional reheat coil for dehumidification control. Identical to AirLoo",
          "group_name": "Unitary Equipment",
          "group_id": 27
      },
      {
          "class_id": 1290,
          "class_name": "AirLoopHVAC:UnitaryHeatPump:AirToAir",
          "memo": " Unitary heat pump system, heating and cooling, single-speed with supply fan, direct expansion (DX) cooling coil, DX heating coil (air-to-air heat pump), and supplemental heating coil (gas, electric, hot water, or steam).",
          "group_name": "Unitary Equipment",
          "group_id": 27
      },
      {
          "class_id": 1291,
          "class_name": "AirLoopHVAC:UnitaryHeatPump:WaterToAir",
          "memo": " Unitary heat pump system, heating and cooling, single-speed with constant volume supply fan (continuous or cycling), direct expansion (DX) cooling coil, DX heating coil (water-to-air heat pump), and supplemental heating coil (gas, electric, hot water, or",
          "group_name": "Unitary Equipment",
          "group_id": 27
      },
      {
          "class_id": 1292,
          "class_name": "AirLoopHVAC:UnitaryHeatCool:VAVChangeoverBypass",
          "memo": " Unitary system, heating and cooling with constant volume supply fan (continuous or cycling), direct expansion (DX) cooling coil, heating coil (gas, electric, hot water, steam, or DX air-to-air heat pump) and bypass damper for variable volume flow to term",
          "group_name": "Unitary Equipment",
          "group_id": 27
      },
      {
          "class_id": 1293,
          "class_name": "AirLoopHVAC:UnitaryHeatPump:AirToAir:MultiSpeed",
          "memo": " Unitary system, heating and cooling, multi-speed with constant volume supply fan (continuous or cycling), direct expansion (DX) cooling coil, heating coil (DX air-to-air heat pump, gas, electric, hot water, or steam), and supplemental heating coil (gas, ",
          "group_name": "Unitary Equipment",
          "group_id": 27
      },
      {
          "class_id": 1294,
          "class_name": "AirConditioner:VariableRefrigerantFlow",
          "memo": " Variable refrigerant flow (VRF) air-to-air heat pump condensing unit (includes one or more electric compressors and outdoor fan). Serves one or more VRF zone terminal units. See ZoneHVAC:TerminalUnit:VariableRefrigerantFlow and ZoneTerminalUnitList.",
          "group_name": "Variable Refrigerant Flow Equipment",
          "group_id": 28
      },
      {
          "class_id": 1295,
          "class_name": "AirConditioner:VariableRefrigerantFlow:FluidTemperatureControl",
          "memo": " This is a key object in the new physics based VRF model applicable for Fluid Temperature Control It describes the Variable Refrigerant Flow system excluding the performance of indoor units Indoor units are modeled separately, see ZoneHVAC:TerminalUnit:Va",
          "group_name": "Variable Refrigerant Flow Equipment",
          "group_id": 28
      },
      {
          "class_id": 1296,
          "class_name": "AirConditioner:VariableRefrigerantFlow:FluidTemperatureControl:HR",
          "memo": " This is a key object in the new physics based VRF Heat Recovery (HR) model applicable for Fluid Temperature Control. It describes the VRF HR system excluding the performance of indoor units. Indoor units are modeled separately in the ZoneHVAC:TerminalUni",
          "group_name": "Variable Refrigerant Flow Equipment",
          "group_id": 28
      },
      {
          "class_id": 1297,
          "class_name": "ZoneTerminalUnitList",
          "memo": " List of variable refrigerant flow (VRF) terminal units served by a given VRF condensing unit. See ZoneHVAC:TerminalUnit:VariableRefrigerantFlow and AirConditioner:VariableRefrigerantFlow.",
          "group_name": "Variable Refrigerant Flow Equipment",
          "group_id": 28
      },
      {
          "class_id": 1298,
          "class_name": "Controller:WaterCoil",
          "memo": " Controller for a water coil which is located directly in an air loop branch or outdoor air equipment list. Controls the coil water flow to meet the specified leaving air setpoint(s). Used with Coil:Heating:Water, Coil:Cooling:Water, Coil:Cooling:Water:De",
          "group_name": "Controllers",
          "group_id": 29
      },
      {
          "class_id": 1299,
          "class_name": "Controller:OutdoorAir",
          "memo": " Controller to set the outdoor air flow rate for an air loop. Control options include fixed, proportional, scheduled, economizer, and demand-controlled ventilation.",
          "group_name": "Controllers",
          "group_id": 29
      },
      {
          "class_id": 1300,
          "class_name": "Controller:MechanicalVentilation",
          "memo": " This object is used in conjunction with Controller:OutdoorAir to specify outdoor ventilation air based on outdoor air specified in the DesignSpecification:OutdoorAir object The Controller:OutdoorAir object is associated with a specific air loop, so the o",
          "group_name": "Controllers",
          "group_id": 29
      },
      {
          "class_id": 1301,
          "class_name": "AirLoopHVAC:ControllerList",
          "memo": " List controllers in order of control sequence",
          "group_name": "Controllers",
          "group_id": 29
      },
      {
          "class_id": 1302,
          "class_name": "AirLoopHVAC",
          "memo": " Defines a central forced air system.",
          "group_name": "Air Distribution",
          "group_id": 30
      },
      {
          "class_id": 1303,
          "class_name": "AirLoopHVAC:OutdoorAirSystem:EquipmentList",
          "memo": " List equipment in simulation order",
          "group_name": "Air Distribution",
          "group_id": 30
      },
      {
          "class_id": 1304,
          "class_name": "AirLoopHVAC:OutdoorAirSystem",
          "memo": " Outdoor air subsystem for an AirLoopHVAC. Includes an outdoor air mixing box and optional outdoor air conditioning equipment such as heat recovery, preheat, and precool coils. From the perspective of the primary air loop the outdoor air system is treated",
          "group_name": "Air Distribution",
          "group_id": 30
      },
      {
          "class_id": 1305,
          "class_name": "OutdoorAir:Mixer",
          "memo": " Outdoor air mixer. Node names cannot be duplicated within a single OutdoorAir:Mixer object or across all outdoor air mixers.",
          "group_name": "Air Distribution",
          "group_id": 30
      },
      {
          "class_id": 1306,
          "class_name": "AirLoopHVAC:ZoneSplitter",
          "memo": " Split one air stream into N outlet streams (currently 500 per air loop, but extensible). Node names cannot be duplicated within a single zone splitter (AirLoopHVAC:ZoneSplitter) list.",
          "group_name": "Air Distribution",
          "group_id": 30
      },
      {
          "class_id": 1307,
          "class_name": "AirLoopHVAC:SupplyPlenum",
          "memo": " Connects 1 zone inlet air stream, through zone supply plenum, to one or more outlets. Node names cannot be duplicated within a single supply plenum list.",
          "group_name": "Air Distribution",
          "group_id": 30
      },
      {
          "class_id": 1308,
          "class_name": "AirLoopHVAC:SupplyPath",
          "memo": " A supply path can only contain AirLoopHVAC:ZoneSplitter and AirLoopHVAC:SupplyPlenum objects which may be in series or parallel.",
          "group_name": "Air Distribution",
          "group_id": 30
      },
      {
          "class_id": 1309,
          "class_name": "AirLoopHVAC:ZoneMixer",
          "memo": " Mix N inlet air streams into one (currently 500 per air loop, but extensible). Node names cannot be duplicated within a single zone mixer (AirLoopHVAC:ZoneMixer) list.",
          "group_name": "Air Distribution",
          "group_id": 30
      },
      {
          "class_id": 1310,
          "class_name": "AirLoopHVAC:ReturnPlenum",
          "memo": " Connects N zone inlet air streams, through zone return plenum, to outlet (currently 500 per air loop) Node names cannot be duplicated within a single plenum list.",
          "group_name": "Air Distribution",
          "group_id": 30
      },
      {
          "class_id": 1311,
          "class_name": "AirLoopHVAC:ReturnPath",
          "memo": " A return air path can only contain one AirLoopHVAC:ZoneMixer and one or more AirLoopHVAC:ReturnPlenum objects.",
          "group_name": "Air Distribution",
          "group_id": 30
      },
      {
          "class_id": 1312,
          "class_name": "AirLoopHVAC:ExhaustSystem",
          "memo": " Defines a general exhaust system with a central exhaust fan drawing from one or more ZoneHVAC:ExhaustControl outlet nodes via an AirLoopHVAC:ZoneMixer.",
          "group_name": "Air Distribution",
          "group_id": 30
      },
      {
          "class_id": 1313,
          "class_name": "AirLoopHVAC:DedicatedOutdoorAirSystem",
          "memo": " Defines a central forced air system to provide dedicated outdoor air to multiple AirLoopHVACs.",
          "group_name": "Air Distribution",
          "group_id": 30
      },
      {
          "class_id": 1314,
          "class_name": "AirLoopHVAC:Mixer",
          "memo": " Mix N inlet air streams from Relief Air Stream Node in OutdoorAir:Mixer objects served by AirLoopHVAC objects listed in AirLoopHVAC:DedicatedOutdoorAirSystem into one (currently 10 as default, but extensible). Node names cannot be duplicated within a sin",
          "group_name": "Air Distribution",
          "group_id": 30
      },
      {
          "class_id": 1315,
          "class_name": "AirLoopHVAC:Splitter",
          "memo": " Split one air stream from AirLoopHVAC:DedicatedOutdoorAirSystem outlet node into N outlet streams (currently 10 as default, but extensible). Node names should be Outdoor Air Stream Node Name in OutdoorAir:Mixer objects served by AirLoopHVAC objects liste",
          "group_name": "Air Distribution",
          "group_id": 30
      },
      {
          "class_id": 1316,
          "class_name": "Branch",
          "memo": " List components on the branch in simulation and connection order Note: this should NOT include splitters or mixers which define endpoints of branches",
          "group_name": "Node-Branch Management",
          "group_id": 31
      },
      {
          "class_id": 1317,
          "class_name": "BranchList",
          "memo": " Branches MUST be listed in Flow order: Inlet branch, then parallel branches, then Outlet branch. Branches are simulated in the order listed. Branch names cannot be duplicated within a single branch list.",
          "group_name": "Node-Branch Management",
          "group_id": 31
      },
      {
          "class_id": 1318,
          "class_name": "Connector:Splitter",
          "memo": " Split one air/water stream into N outlet streams. Branch names cannot be duplicated within a single Splitter list.",
          "group_name": "Node-Branch Management",
          "group_id": 31
      },
      {
          "class_id": 1319,
          "class_name": "Connector:Mixer",
          "memo": " Mix N inlet air/water streams into one. Branch names cannot be duplicated within a single mixer list.",
          "group_name": "Node-Branch Management",
          "group_id": 31
      },
      {
          "class_id": 1320,
          "class_name": "ConnectorList",
          "memo": " only two connectors allowed per loop if two entered, one must be Connector:Splitter and one must be Connector:Mixer",
          "group_name": "Node-Branch Management",
          "group_id": 31
      },
      {
          "class_id": 1321,
          "class_name": "NodeList",
          "memo": " This object is used in places where lists of nodes may be needed, e.g. ZoneHVAC:EquipmentConnections field Zone Air Inlet Node or NodeList Name",
          "group_name": "Node-Branch Management",
          "group_id": 31
      },
      {
          "class_id": 1322,
          "class_name": "OutdoorAir:Node",
          "memo": " This object sets the temperature and humidity conditions for an outdoor air node. It allows the height above ground to be specified. This object may be used more than once. The same node name may not appear in both an OutdoorAir:Node object and an Outdoo",
          "group_name": "Node-Branch Management",
          "group_id": 31
      },
      {
          "class_id": 1323,
          "class_name": "OutdoorAir:NodeList",
          "memo": " This object sets the temperature and humidity conditions for an outdoor air node using the weather data values. to vary outdoor air node conditions with height above ground use OutdoorAir:Node instead of this object. This object may be used more than onc",
          "group_name": "Node-Branch Management",
          "group_id": 31
      },
      {
          "class_id": 1324,
          "class_name": "Pipe:Adiabatic",
          "memo": " Passes Inlet Node state variables to Outlet Node state variables",
          "group_name": "Node-Branch Management",
          "group_id": 31
      },
      {
          "class_id": 1325,
          "class_name": "Pipe:Adiabatic:Steam",
          "memo": " Passes Inlet Node state variables to Outlet Node state variables",
          "group_name": "Node-Branch Management",
          "group_id": 31
      },
      {
          "class_id": 1326,
          "class_name": "Pipe:Indoor",
          "memo": " Pipe model with transport delay and heat transfer to the environment.",
          "group_name": "Node-Branch Management",
          "group_id": 31
      },
      {
          "class_id": 1327,
          "class_name": "Pipe:Outdoor",
          "memo": " Pipe model with transport delay and heat transfer to the environment.",
          "group_name": "Node-Branch Management",
          "group_id": 31
      },
      {
          "class_id": 1328,
          "class_name": "Pipe:Underground",
          "memo": " Buried Pipe model: For pipes buried at a depth less than one meter, this is an alternative object to: HeatExchanger:Surface",
          "group_name": "Node-Branch Management",
          "group_id": 31
      },
      {
          "class_id": 1329,
          "class_name": "PipingSystem:Underground:Domain",
          "memo": " The ground domain object for underground piping system simulation.",
          "group_name": "Node-Branch Management",
          "group_id": 31
      },
      {
          "class_id": 1330,
          "class_name": "PipingSystem:Underground:PipeCircuit",
          "memo": " The pipe circuit object in an underground piping system. This object is simulated within an underground piping domain object and connected on a branch on a plant loop.",
          "group_name": "Node-Branch Management",
          "group_id": 31
      },
      {
          "class_id": 1331,
          "class_name": "PipingSystem:Underground:PipeSegment",
          "memo": " The pipe segment to be used in an underground piping system This object represents a single pipe leg positioned axially in the local z-direction, at a given x, y location in the domain",
          "group_name": "Node-Branch Management",
          "group_id": 31
      },
      {
          "class_id": 1332,
          "class_name": "Duct",
          "memo": " Passes inlet node state variables to outlet node state variables",
          "group_name": "Node-Branch Management",
          "group_id": 31
      },
      {
          "class_id": 1333,
          "class_name": "Pump:VariableSpeed",
          "memo": " This pump model is described in the ASHRAE secondary HVAC toolkit.",
          "group_name": "Pumps",
          "group_id": 32
      },
      {
          "class_id": 1334,
          "class_name": "Pump:ConstantSpeed",
          "memo": " This pump model is described in the ASHRAE secondary HVAC toolkit.",
          "group_name": "Pumps",
          "group_id": 32
      },
      {
          "class_id": 1335,
          "class_name": "Pump:VariableSpeed:Condensate",
          "memo": " This pump model is described in the ASHRAE secondary HVAC toolkit. Variable Speed Condensate pump for Steam Systems",
          "group_name": "Pumps",
          "group_id": 32
      },
      {
          "class_id": 1336,
          "class_name": "HeaderedPumps:ConstantSpeed",
          "memo": " This Headered pump object describes a pump bank with more than 1 pump in parallel",
          "group_name": "Pumps",
          "group_id": 32
      },
      {
          "class_id": 1337,
          "class_name": "HeaderedPumps:VariableSpeed",
          "memo": " This Headered pump object describes a pump bank with more than 1 pump in parallel",
          "group_name": "Pumps",
          "group_id": 32
      },
      {
          "class_id": 1338,
          "class_name": "TemperingValve",
          "memo": " Temperature-controlled diversion valve used to divert flow around one or more plant components such as a hot water heater. It can only be used on one of two branches between a Splitter and a Mixer.",
          "group_name": "Plant-Condenser Flow Control",
          "group_id": 33
      },
      {
          "class_id": 1339,
          "class_name": "LoadProfile:Plant",
          "memo": " Used to simulate a scheduled plant loop demand profile. Load and flow rate are specified using schedules. Positive values are heating loads, and negative values are cooling loads. The actual load met is dependent on the performance of the supply loop com",
          "group_name": "Non-Zone Equipment",
          "group_id": 34
      },
      {
          "class_id": 1340,
          "class_name": "SolarCollectorPerformance:FlatPlate",
          "memo": " Thermal and optical performance parameters for a single flat plate solar collector module. These parameters are based on the testing methodologies described in ASHRAE Standards 93 and 96 which are used Solar Rating and Certification Corporation (SRCC) Di",
          "group_name": "Solar Collectors",
          "group_id": 35
      },
      {
          "class_id": 1341,
          "class_name": "SolarCollector:FlatPlate:Water",
          "memo": " Flat plate water solar collector (single glazed, unglazed, or evacuated tube). Thermal and optical properties are taken from the referenced SolarCollectorPerformance:FlatPlate object. Collector tilt, azimuth, and gross area are taken from the referenced ",
          "group_name": "Solar Collectors",
          "group_id": 35
      },
      {
          "class_id": 1342,
          "class_name": "SolarCollector:FlatPlate:PhotovoltaicThermal",
          "memo": " Models hybrid photovoltaic-thermal (PVT) solar collectors that convert incident solar energy into both electricity and useful thermal energy by heating air or water.",
          "group_name": "Solar Collectors",
          "group_id": 35
      },
      {
          "class_id": 1343,
          "class_name": "SolarCollectorPerformance:PhotovoltaicThermal:Simple",
          "memo": " Thermal performance parameters for a hybrid photovoltaic-thermal (PVT) solar collector.",
          "group_name": "Solar Collectors",
          "group_id": 35
      },
      {
          "class_id": 1344,
          "class_name": "SolarCollector:IntegralCollectorStorage",
          "memo": " Glazed solar collector with integral storage unit. Thermal and optical properties are taken from the referenced SolarCollectorPerformance:IntegralCollectorStorage object. Collector tilt, azimuth, and gross area are taken from the referenced building surf",
          "group_name": "Solar Collectors",
          "group_id": 35
      },
      {
          "class_id": 1345,
          "class_name": "SolarCollectorPerformance:IntegralCollectorStorage",
          "memo": " Thermal and optical performance parameters for a single glazed solar collector with integral storage unit.",
          "group_name": "Solar Collectors",
          "group_id": 35
      },
      {
          "class_id": 1346,
          "class_name": "SolarCollector:UnglazedTranspired",
          "memo": " Unglazed transpired solar collector (UTSC) used to condition outdoor air. This type of collector is generally used to heat air drawn through perforated absorbers and also recover heat conducted out through the underlying surface. This object represents a",
          "group_name": "Solar Collectors",
          "group_id": 35
      },
      {
          "class_id": 1347,
          "class_name": "SolarCollector:UnglazedTranspired:Multisystem",
          "memo": " quad-tuples of inlet, outlet, control, and zone nodes for multiple different outdoor air systems attached to same collector",
          "group_name": "Solar Collectors",
          "group_id": 35
      },
      {
          "class_id": 1348,
          "class_name": "Boiler:HotWater",
          "memo": " This boiler model is an adaptation of the empirical model from the Building Loads and System Thermodynamics (BLAST) program. Boiler performance curves are generated by fitting catalog data to polynomial equations. A constant efficiency boiler may be mode",
          "group_name": "Plant Heating and Cooling Equipment",
          "group_id": 36
      },
      {
          "class_id": 1349,
          "class_name": "Boiler:Steam",
          "memo": " This boiler model is an adaptation of the empirical model from the Building Loads and System Thermodynamics (BLAST) program. Boiler performance curves are generated by fitting catalog data to third order polynomial equations. A constant efficiency boiler",
          "group_name": "Plant Heating and Cooling Equipment",
          "group_id": 36
      },
      {
          "class_id": 1350,
          "class_name": "Chiller:Electric:ASHRAE205",
          "memo": " This chiller model utilizes ASHRAE Standard 205 compliant representations for chillers (Representation Specification RS0001).",
          "group_name": "Plant Heating and Cooling Equipment",
          "group_id": 36
      },
      {
          "class_id": 1351,
          "class_name": "Chiller:Electric:EIR",
          "memo": " This chiller model is the empirical model from the DOE-2 building Energy simulation program. Chiller performance at off-reference conditions is modeled using three polynomial equations. Three curves objects are required.",
          "group_name": "Plant Heating and Cooling Equipment",
          "group_id": 36
      },
      {
          "class_id": 1352,
          "class_name": "Chiller:Electric:ReformulatedEIR",
          "memo": " This chiller model is an empirical model, a reformulated version of Chiller:Electric:EIR where the performance is a function of condenser leaving fluid Temperature instead of condenser entering fluid Temperature. Chiller performance at off-reference cond",
          "group_name": "Plant Heating and Cooling Equipment",
          "group_id": 36
      },
      {
          "class_id": 1353,
          "class_name": "Chiller:Electric",
          "memo": " This chiller model is the empirical model from the Building Loads and System Thermodynamics (BLAST) program. Chiller performance curves are generated by fitting catalog data to third order polynomial equations. Three sets of coefficients are required.",
          "group_name": "Plant Heating and Cooling Equipment",
          "group_id": 36
      },
      {
          "class_id": 1354,
          "class_name": "Chiller:Absorption:Indirect",
          "memo": " This indirect absorption chiller model is an enhanced model from the Building Loads and System Thermodynamics (BLAST) program. Chiller performance curves are generated by fitting catalog data to third order polynomial equations. The chiller capacity is a",
          "group_name": "Plant Heating and Cooling Equipment",
          "group_id": 36
      },
      {
          "class_id": 1355,
          "class_name": "Chiller:Absorption",
          "memo": " This indirect absorption chiller model is the empirical model from the Building Loads and System Thermodynamics (BLAST) program. Chiller performance curves are generated by fitting catalog data to third order polynomial equations. Two sets of coefficient",
          "group_name": "Plant Heating and Cooling Equipment",
          "group_id": 36
      },
      {
          "class_id": 1356,
          "class_name": "Chiller:ConstantCOP",
          "memo": " This constant COP chiller model provides a means of quickly specifying a Chiller where performance data is not available.",
          "group_name": "Plant Heating and Cooling Equipment",
          "group_id": 36
      },
      {
          "class_id": 1357,
          "class_name": "Chiller:EngineDriven",
          "memo": " This chiller model is the empirical model from the Building Loads and System Thermodynamics (BLAST) program. Chiller performance curves are generated by fitting catalog data to third order polynomial equations. Three sets of coefficients are required.",
          "group_name": "Plant Heating and Cooling Equipment",
          "group_id": 36
      },
      {
          "class_id": 1358,
          "class_name": "Chiller:CombustionTurbine",
          "memo": " This chiller model is the empirical model from the Building Loads and System Thermodynamics (BLAST) program. Chiller performance curves are generated by fitting catalog data to third order polynomial equations. Three sets of coefficients are required.",
          "group_name": "Plant Heating and Cooling Equipment",
          "group_id": 36
      },
      {
          "class_id": 1359,
          "class_name": "ChillerHeater:Absorption:DirectFired",
          "memo": " Direct fired gas absorption chiller-heater using performance curves similar to DOE-2",
          "group_name": "Plant Heating and Cooling Equipment",
          "group_id": 36
      },
      {
          "class_id": 1360,
          "class_name": "ChillerHeater:Absorption:DoubleEffect",
          "memo": " Exhaust fired absorption chiller-heater using performance curves similar to DOE-2",
          "group_name": "Plant Heating and Cooling Equipment",
          "group_id": 36
      },
      {
          "class_id": 1361,
          "class_name": "HeatPump:PlantLoop:EIR:Cooling",
          "memo": " An EIR formulated water to water heat pump model, cooling operation.",
          "group_name": "Plant Heating and Cooling Equipment",
          "group_id": 36
      },
      {
          "class_id": 1362,
          "class_name": "HeatPump:PlantLoop:EIR:Heating",
          "memo": " An EIR formulated water to water heat pump model, heating operation",
          "group_name": "Plant Heating and Cooling Equipment",
          "group_id": 36
      },
      {
          "class_id": 1363,
          "class_name": "HeatPump:WaterToWater:EquationFit:Heating",
          "memo": " simple water-water hp curve-fit model",
          "group_name": "Plant Heating and Cooling Equipment",
          "group_id": 36
      },
      {
          "class_id": 1364,
          "class_name": "HeatPump:WaterToWater:EquationFit:Cooling",
          "memo": " simple water-water heat pump curve-fit model",
          "group_name": "Plant Heating and Cooling Equipment",
          "group_id": 36
      },
      {
          "class_id": 1365,
          "class_name": "HeatPump:WaterToWater:ParameterEstimation:Cooling",
          "memo": " OSU parameter estimation model",
          "group_name": "Plant Heating and Cooling Equipment",
          "group_id": 36
      },
      {
          "class_id": 1366,
          "class_name": "HeatPump:WaterToWater:ParameterEstimation:Heating",
          "memo": " OSU parameter estimation model",
          "group_name": "Plant Heating and Cooling Equipment",
          "group_id": 36
      },
      {
          "class_id": 1367,
          "class_name": "DistrictCooling",
          "memo": " Centralized source of chilled water, such as a district cooling system.",
          "group_name": "Plant Heating and Cooling Equipment",
          "group_id": 36
      },
      {
          "class_id": 1368,
          "class_name": "DistrictHeating",
          "memo": " Centralized source of hot water, such as a district heating system.",
          "group_name": "Plant Heating and Cooling Equipment",
          "group_id": 36
      },
      {
          "class_id": 1369,
          "class_name": "PlantComponent:TemperatureSource",
          "memo": " Simulates an object of pre-determined (constant or scheduled) source temperature The object introduces fluid into the plant loop at the specified temperature and at the same flow rate as the fluid enters the component Fluid entering the component vanishe",
          "group_name": "Plant Heating and Cooling Equipment",
          "group_id": 36
      },
      {
          "class_id": 1370,
          "class_name": "CentralHeatPumpSystem",
          "memo": " This chiller bank can contain multiple chiller heaters and heat pump performance objects. Its function is to encapsulate the extra controls needed to turn individual modules on/off and whether they are to operate in cooling-only, heating-only or simultan",
          "group_name": "Plant Heating and Cooling Equipment",
          "group_id": 36
      },
      {
          "class_id": 1371,
          "class_name": "ChillerHeaterPerformance:Electric:EIR",
          "memo": " This chiller model is a generic chiller-heater where the cooling mode performance is a function of condenser entering or leaving fluid temperature and the heating mode performance is typically a function of condenser leaving fluid temperature. Performanc",
          "group_name": "Plant Heating and Cooling Equipment",
          "group_id": 36
      },
      {
          "class_id": 1372,
          "class_name": "CoolingTower:SingleSpeed",
          "memo": " This tower model is based on Merkel's theory, which is also the basis for the tower model in ASHRAE's HVAC1 Toolkit. The open wet cooling tower is modeled as a counter flow heat exchanger with a single-speed fan drawing air through the tower (induced-dra",
          "group_name": "Condenser Equipment and Heat Exchangers",
          "group_id": 37
      },
      {
          "class_id": 1373,
          "class_name": "CoolingTower:TwoSpeed",
          "memo": " This tower model is based on Merkel's theory, which is also the basis for the tower model in ASHRAE's HVAC1 Toolkit. The open wet cooling tower is modeled as a counter flow heat exchanger with a two-speed fan drawing air through the tower (induced-draft ",
          "group_name": "Condenser Equipment and Heat Exchangers",
          "group_id": 37
      },
      {
          "class_id": 1374,
          "class_name": "CoolingTower:VariableSpeed:Merkel",
          "memo": " This tower model is based on Merkel's theory, which is also the basis for the tower model in ASHRAE's HVAC1 Toolkit. The open wet cooling tower is modeled as a counter flow heat exchanger with a variable-speed fan drawing air through the tower (induced-d",
          "group_name": "Condenser Equipment and Heat Exchangers",
          "group_id": 37
      },
      {
          "class_id": 1375,
          "class_name": "CoolingTower:VariableSpeed",
          "memo": " This open wet tower model is based on purely empirical algorithms derived from manufacturer's performance data or field measurements. The user can select from two existing algorithms (CoolTools or YorkCalc), or they can enter their own correlation for ap",
          "group_name": "Condenser Equipment and Heat Exchangers",
          "group_id": 37
      },
      {
          "class_id": 1376,
          "class_name": "CoolingTowerPerformance:CoolTools",
          "memo": " This object is used to define coefficients for the approach temperature correlation for a variable speed cooling tower when tower Model Type is specified as CoolToolsUserDefined in the object CoolingTower:VariableSpeed.",
          "group_name": "Condenser Equipment and Heat Exchangers",
          "group_id": 37
      },
      {
          "class_id": 1377,
          "class_name": "CoolingTowerPerformance:YorkCalc",
          "memo": " This object is used to define coefficients for the approach temperature correlation for a variable speed cooling tower when tower Model Type is specified as YorkCalcUserDefined in the object CoolingTower:VariableSpeed.",
          "group_name": "Condenser Equipment and Heat Exchangers",
          "group_id": 37
      },
      {
          "class_id": 1378,
          "class_name": "EvaporativeFluidCooler:SingleSpeed",
          "memo": " This model is based on Merkel's theory, which is also the basis for the cooling tower model in EnergyPlus. The Evaporative fluid cooler is modeled as a counter flow heat exchanger.",
          "group_name": "Condenser Equipment and Heat Exchangers",
          "group_id": 37
      },
      {
          "class_id": 1379,
          "class_name": "EvaporativeFluidCooler:TwoSpeed",
          "memo": " This model is based on Merkel's theory, which is also the basis for the cooling tower model in EnergyPlus. The Evaporative fluid cooler is modeled as a counter flow heat exchanger.",
          "group_name": "Condenser Equipment and Heat Exchangers",
          "group_id": 37
      },
      {
          "class_id": 1380,
          "class_name": "FluidCooler:SingleSpeed",
          "memo": " The fluid cooler is modeled as a cross flow heat exchanger (both streams unmixed) with single-speed fans (induced draft configuration).",
          "group_name": "Condenser Equipment and Heat Exchangers",
          "group_id": 37
      },
      {
          "class_id": 1381,
          "class_name": "FluidCooler:TwoSpeed",
          "memo": " The fluid cooler is modeled as a cross flow heat exchanger (both streams unmixed) with two-speed fans (induced draft configuration).",
          "group_name": "Condenser Equipment and Heat Exchangers",
          "group_id": 37
      },
      {
          "class_id": 1382,
          "class_name": "GroundHeatExchanger:System",
          "memo": " Models vertical ground heat exchangers systems using the response factor approach developed by Eskilson. Response factors are calculated using a finite line source model assuming uniform heat flux at the borehole wall if UHFcalc is specified, or uniform ",
          "group_name": "Condenser Equipment and Heat Exchangers",
          "group_id": 37
      },
      {
          "class_id": 1383,
          "class_name": "GroundHeatExchanger:Vertical:Properties",
          "memo": " Properties for vertical ground heat exchanger systems",
          "group_name": "Condenser Equipment and Heat Exchangers",
          "group_id": 37
      },
      {
          "class_id": 1384,
          "class_name": "GroundHeatExchanger:Vertical:Array",
          "memo": "",
          "group_name": "Condenser Equipment and Heat Exchangers",
          "group_id": 37
      },
      {
          "class_id": 1385,
          "class_name": "GroundHeatExchanger:Vertical:Single",
          "memo": "",
          "group_name": "Condenser Equipment and Heat Exchangers",
          "group_id": 37
      },
      {
          "class_id": 1386,
          "class_name": "GroundHeatExchanger:ResponseFactors",
          "memo": " Response factor definitions from third-party tool, commonly referred to a \"g-functions\"",
          "group_name": "Condenser Equipment and Heat Exchangers",
          "group_id": 37
      },
      {
          "class_id": 1387,
          "class_name": "GroundHeatExchanger:Pond",
          "memo": " A model of a shallow pond with immersed pipe loops. Typically used in hybrid geothermal systems and included in the condenser loop. This component may also be used as a simple solar collector.",
          "group_name": "Condenser Equipment and Heat Exchangers",
          "group_id": 37
      },
      {
          "class_id": 1388,
          "class_name": "GroundHeatExchanger:Surface",
          "memo": " A hydronic surface/panel consisting of a multi-layer construction with embedded rows of tubes. Typically used in hybrid geothermal systems and included in the condenser loop. This component may also be used as a simple solar collector. The bottom surface",
          "group_name": "Condenser Equipment and Heat Exchangers",
          "group_id": 37
      },
      {
          "class_id": 1389,
          "class_name": "GroundHeatExchanger:HorizontalTrench",
          "memo": " This models a horizontal heat exchanger placed in a series of trenches The model uses the PipingSystem:Underground underlying algorithms, but provides a more usable input interface.",
          "group_name": "Condenser Equipment and Heat Exchangers",
          "group_id": 37
      },
      {
          "class_id": 1390,
          "class_name": "GroundHeatExchanger:Slinky",
          "memo": " This models a slinky horizontal heat exchanger placed in a series of trenches The model uses the model developed by: Xiong, Z., D.E. Fisher, and J.D. Spitler. 2015. Development and Validation of a Slinky Ground Heat Exchanger Model. Applied Energy 141: 5",
          "group_name": "Condenser Equipment and Heat Exchangers",
          "group_id": 37
      },
      {
          "class_id": 1391,
          "class_name": "HeatExchanger:FluidToFluid",
          "memo": " A fluid/fluid heat exchanger designed to couple the supply side of one loop to the demand side of another loop Loops can be either plant or condenser loops but no air side connections are allowed",
          "group_name": "Condenser Equipment and Heat Exchangers",
          "group_id": 37
      },
      {
          "class_id": 1392,
          "class_name": "WaterHeater:Mixed",
          "memo": " Water heater with well-mixed, single-node water tank. May be used to model a tankless water heater (small tank volume), a hot water storage tank (zero heater capacity), or a heat pump water heater (see WaterHeater:HeatPump:PumpedCondenser.)",
          "group_name": "Water Heaters and Thermal Storage",
          "group_id": 38
      },
      {
          "class_id": 1393,
          "class_name": "WaterHeater:Stratified",
          "memo": " Water heater with stratified, multi-node water tank. May be used to model a tankless water heater (small tank volume), a hot water storage tank (zero heater capacity), or a heat pump water heater (see WaterHeater:HeatPump:*.)",
          "group_name": "Water Heaters and Thermal Storage",
          "group_id": 38
      },
      {
          "class_id": 1394,
          "class_name": "WaterHeater:Sizing",
          "memo": " This input object is used with WaterHeater:Mixed or with WaterHeater:Stratified to autosize tank volume and heater capacity This object is not needed if water heaters are not autosized.",
          "group_name": "Water Heaters and Thermal Storage",
          "group_id": 38
      },
      {
          "class_id": 1395,
          "class_name": "WaterHeater:HeatPump:PumpedCondenser",
          "memo": " This object models an air-source heat pump for water heating where the water is pumped out of the tank, through a heating coil and returned to the tank. For wrapped condenser HPWHs, see WaterHeater:HeatPump:WrappedCondenser. WaterHeater:HeatPump:PumpedCo",
          "group_name": "Water Heaters and Thermal Storage",
          "group_id": 38
      },
      {
          "class_id": 1396,
          "class_name": "WaterHeater:HeatPump:WrappedCondenser",
          "memo": " This object models an air-source heat pump for water heating where the heating coil is wrapped around the tank, which is typical of residential HPWHs. For pumped condenser HPWHs, see WaterHeater:HeatPump:PumpedCondenser. WaterHeater:HeatPump:WrappedConde",
          "group_name": "Water Heaters and Thermal Storage",
          "group_id": 38
      },
      {
          "class_id": 1397,
          "class_name": "ThermalStorage:Ice:Simple",
          "memo": " This ice storage model is a simplified model It requires a setpoint placed on the Chilled Water Side Outlet Node It should be placed in the chilled water supply side outlet branch followed by a pipe. Use the PlantEquipmentOperation:ComponentSetpoint plan",
          "group_name": "Water Heaters and Thermal Storage",
          "group_id": 38
      },
      {
          "class_id": 1398,
          "class_name": "ThermalStorage:Ice:Detailed",
          "memo": " This input syntax is intended to describe a thermal storage system that includes smaller containers filled with water that are placed in a larger tank or series of tanks. The model uses polynomial equations to describe the system performance.",
          "group_name": "Water Heaters and Thermal Storage",
          "group_id": 38
      },
      {
          "class_id": 1399,
          "class_name": "ThermalStorage:ChilledWater:Mixed",
          "memo": " Chilled water storage with a well-mixed, single-node tank. The chilled water is \"used\" by drawing from the \"Use Side\" of the water tank. The tank is indirectly charged by circulating cold water through the \"Source Side\" of the water tank.",
          "group_name": "Water Heaters and Thermal Storage",
          "group_id": 38
      },
      {
          "class_id": 1400,
          "class_name": "ThermalStorage:ChilledWater:Stratified",
          "memo": " Chilled water storage with a stratified, multi-node tank. The chilled water is \"used\" by drawing from the \"Use Side\" of the water tank. The tank is indirectly charged by circulating cold water through the \"Source Side\" of the water tank.",
          "group_name": "Water Heaters and Thermal Storage",
          "group_id": 38
      },
      {
          "class_id": 1401,
          "class_name": "PlantLoop",
          "memo": " Defines a central plant loop.",
          "group_name": "Plant-Condenser Loops",
          "group_id": 39
      },
      {
          "class_id": 1402,
          "class_name": "CondenserLoop",
          "memo": " Defines a central plant condenser loop. CondenserLoop and PlantLoop are nearly identical except some components and operation schemes are applicable to only one loop type or the other.",
          "group_name": "Plant-Condenser Loops",
          "group_id": 39
      },
      {
          "class_id": 1403,
          "class_name": "PlantEquipmentList",
          "memo": " List plant equipment in order of operating priority, 1st in list will be used 1st, etc Use only plant equipment in this list. If no equipment object types and equipment names are specified, then the corresponding PlantEquipmentOperation:* object will ass",
          "group_name": "Plant-Condenser Control",
          "group_id": 40
      },
      {
          "class_id": 1404,
          "class_name": "CondenserEquipmentList",
          "memo": " List condenser equipment in order of operating priority, 1st in list will be used 1st, etc Use only condenser equipment in this list. If no equipment object types and equipment names are specified, then the corresponding PlantEquipmentOperation:* object ",
          "group_name": "Plant-Condenser Control",
          "group_id": 40
      },
      {
          "class_id": 1405,
          "class_name": "PlantEquipmentOperation:Uncontrolled",
          "memo": " Plant equipment operation scheme for uncontrolled operation. Specifies a group of equipment that runs if the loop is active, unless turned off by the loop flow resolver to maintain continuity in the fluid loop.",
          "group_name": "Plant-Condenser Control",
          "group_id": 40
      },
      {
          "class_id": 1406,
          "class_name": "PlantEquipmentOperation:CoolingLoad",
          "memo": " Plant equipment operation scheme for cooling load range operation. Specifies one or more groups of equipment which are available to operate for successive cooling load ranges.",
          "group_name": "Plant-Condenser Control",
          "group_id": 40
      },
      {
          "class_id": 1407,
          "class_name": "PlantEquipmentOperation:HeatingLoad",
          "memo": " Plant equipment operation scheme for heating load range operation. Specifies one or more groups of equipment which are available to operate for successive heating load ranges.",
          "group_name": "Plant-Condenser Control",
          "group_id": 40
      },
      {
          "class_id": 1408,
          "class_name": "PlantEquipmentOperation:OutdoorDryBulb",
          "memo": " Plant equipment operation scheme for outdoor dry-bulb temperature range operation. Specifies one or more groups of equipment which are available to operate for successive outdoor dry-bulb temperature ranges.",
          "group_name": "Plant-Condenser Control",
          "group_id": 40
      },
      {
          "class_id": 1409,
          "class_name": "PlantEquipmentOperation:OutdoorWetBulb",
          "memo": " Plant equipment operation scheme for outdoor wet-bulb temperature range operation. Specifies one or more groups of equipment which are available to operate for successive outdoor wet-bulb temperature ranges.",
          "group_name": "Plant-Condenser Control",
          "group_id": 40
      },
      {
          "class_id": 1410,
          "class_name": "PlantEquipmentOperation:OutdoorRelativeHumidity",
          "memo": " Plant equipment operation scheme for outdoor relative humidity range operation. Specifies one or more groups of equipment which are available to operate for successive outdoor relative humidity ranges.",
          "group_name": "Plant-Condenser Control",
          "group_id": 40
      },
      {
          "class_id": 1411,
          "class_name": "PlantEquipmentOperation:OutdoorDewpoint",
          "memo": " Plant equipment operation scheme for outdoor dewpoint temperature range operation. Specifies one or more groups of equipment which are available to operate for successive outdoor dewpoint temperature ranges.",
          "group_name": "Plant-Condenser Control",
          "group_id": 40
      },
      {
          "class_id": 1412,
          "class_name": "PlantEquipmentOperation:ComponentSetpoint",
          "memo": " Plant equipment operation scheme for component setpoint operation. Specifies one or pieces of equipment which are controlled to meet the temperature setpoint at the component outlet node.",
          "group_name": "Plant-Condenser Control",
          "group_id": 40
      },
      {
          "class_id": 1413,
          "class_name": "PlantEquipmentOperation:ThermalEnergyStorage",
          "memo": " Plant equipment operation scheme for simpler input to control thermal (ice) energy storage systems. It replaces a host of setpoint managers with simple, single input values. For more complex controls, use the ComponentSetpoint scheme.",
          "group_name": "Plant-Condenser Control",
          "group_id": 40
      },
      {
          "class_id": 1414,
          "class_name": "PlantEquipmentOperation:OutdoorDryBulbDifference",
          "memo": " Plant equipment operation scheme for outdoor dry-bulb temperature difference operation. Specifies one or more groups of equipment which are available to operate for successive ranges based the difference between a reference node temperature and the outdo",
          "group_name": "Plant-Condenser Control",
          "group_id": 40
      },
      {
          "class_id": 1415,
          "class_name": "PlantEquipmentOperation:OutdoorWetBulbDifference",
          "memo": " Plant equipment operation scheme for outdoor wet-bulb temperature difference operation. Specifies one or more groups of equipment which are available to operate for successive ranges based the difference between a reference node temperature and the outdo",
          "group_name": "Plant-Condenser Control",
          "group_id": 40
      },
      {
          "class_id": 1416,
          "class_name": "PlantEquipmentOperation:OutdoorDewpointDifference",
          "memo": " Plant equipment operation scheme for outdoor dewpoint temperature difference operation. Specifies one or more groups of equipment which are available to operate for successive ranges based the difference between a reference node temperature and the outdo",
          "group_name": "Plant-Condenser Control",
          "group_id": 40
      },
      {
          "class_id": 1417,
          "class_name": "PlantEquipmentOperationSchemes",
          "memo": " Operation schemes are listed in \"priority\" order. Note that each scheme must address the entire load and/or condition ranges for the simulation. The actual one selected for use will be the first that is \"Scheduled\" on. That is, if control scheme 1 is not",
          "group_name": "Plant-Condenser Control",
          "group_id": 40
      },
      {
          "class_id": 1418,
          "class_name": "CondenserEquipmentOperationSchemes",
          "memo": " Operation schemes are listed in \"priority\" order. Note that each scheme must address the entire load and/or condition ranges for the simulation. The actual one selected for use will be the first that is \"Scheduled\" on. That is, if control scheme 1 is not",
          "group_name": "Plant-Condenser Control",
          "group_id": 40
      },
      {
          "class_id": 1419,
          "class_name": "EnergyManagementSystem:Sensor",
          "memo": " Declares EMS variable as a sensor a list of output variables and meters that can be reported are available after a run on the report (.rdd) or meter dictionary file (.mdd) if the Output:VariableDictionary has been requested.",
          "group_name": "Energy Management System (EMS)",
          "group_id": 41
      },
      {
          "class_id": 1420,
          "class_name": "EnergyManagementSystem:Actuator",
          "memo": " Hardware portion of EMS used to set up actuators in the model",
          "group_name": "Energy Management System (EMS)",
          "group_id": 41
      },
      {
          "class_id": 1421,
          "class_name": "EnergyManagementSystem:ProgramCallingManager",
          "memo": " Input EMS program. a program needs a name a description of when it should be called and then lines of program code for EMS Runtime language",
          "group_name": "Energy Management System (EMS)",
          "group_id": 41
      },
      {
          "class_id": 1422,
          "class_name": "EnergyManagementSystem:Program",
          "memo": " This input defines an Erl program Each field after the name is a line of EMS Runtime Language",
          "group_name": "Energy Management System (EMS)",
          "group_id": 41
      },
      {
          "class_id": 1423,
          "class_name": "EnergyManagementSystem:Subroutine",
          "memo": " This input defines an Erl program subroutine Each field after the name is a line of EMS Runtime Language",
          "group_name": "Energy Management System (EMS)",
          "group_id": 41
      },
      {
          "class_id": 1424,
          "class_name": "EnergyManagementSystem:GlobalVariable",
          "memo": " Declares Erl variable as having global scope No spaces allowed in names used for Erl variables",
          "group_name": "Energy Management System (EMS)",
          "group_id": 41
      },
      {
          "class_id": 1425,
          "class_name": "EnergyManagementSystem:OutputVariable",
          "memo": " This object sets up an EnergyPlus output variable from an Erl variable",
          "group_name": "Energy Management System (EMS)",
          "group_id": 41
      },
      {
          "class_id": 1426,
          "class_name": "EnergyManagementSystem:MeteredOutputVariable",
          "memo": " This object sets up an EnergyPlus output variable from an Erl variable",
          "group_name": "Energy Management System (EMS)",
          "group_id": 41
      },
      {
          "class_id": 1427,
          "class_name": "EnergyManagementSystem:TrendVariable",
          "memo": " This object sets up an EMS trend variable from an Erl variable A trend variable logs values across timesteps",
          "group_name": "Energy Management System (EMS)",
          "group_id": 41
      },
      {
          "class_id": 1428,
          "class_name": "EnergyManagementSystem:InternalVariable",
          "memo": " Declares EMS variable as an internal data variable",
          "group_name": "Energy Management System (EMS)",
          "group_id": 41
      },
      {
          "class_id": 1429,
          "class_name": "EnergyManagementSystem:CurveOrTableIndexVariable",
          "memo": " Declares EMS variable that identifies a curve or table",
          "group_name": "Energy Management System (EMS)",
          "group_id": 41
      },
      {
          "class_id": 1430,
          "class_name": "EnergyManagementSystem:ConstructionIndexVariable",
          "memo": " Declares EMS variable that identifies a construction",
          "group_name": "Energy Management System (EMS)",
          "group_id": 41
      },
      {
          "class_id": 1431,
          "class_name": "ExternalInterface",
          "memo": " This object activates the external interface of EnergyPlus. If the object ExternalInterface is present, then all ExtnernalInterface:* objects will receive their values from the BCVTB interface or from FMUs at each zone time step. If this object is not pr",
          "group_name": "External Interface",
          "group_id": 42
      },
      {
          "class_id": 1432,
          "class_name": "ExternalInterface:Schedule",
          "memo": " A ExternalInterface:Schedule contains only one value, which is used during the warm-up period and the system sizing.",
          "group_name": "External Interface",
          "group_id": 42
      },
      {
          "class_id": 1433,
          "class_name": "ExternalInterface:Variable",
          "memo": " This input object is similar to EnergyManagementSystem:GlobalVariable. However, at the beginning of each zone time step, its value is set to the value received from the external interface. During the warm-up period and the system sizing, its value is set",
          "group_name": "External Interface",
          "group_id": 42
      },
      {
          "class_id": 1434,
          "class_name": "ExternalInterface:Actuator",
          "memo": " Hardware portion of EMS used to set up actuators in the model",
          "group_name": "External Interface",
          "group_id": 42
      },
      {
          "class_id": 1435,
          "class_name": "ExternalInterface:FunctionalMockupUnitImport",
          "memo": " This object declares an FMU",
          "group_name": "External Interface",
          "group_id": 42
      },
      {
          "class_id": 1436,
          "class_name": "ExternalInterface:FunctionalMockupUnitImport:From:Variable",
          "memo": " This object declares an FMU input variable",
          "group_name": "External Interface",
          "group_id": 42
      },
      {
          "class_id": 1437,
          "class_name": "ExternalInterface:FunctionalMockupUnitImport:To:Schedule",
          "memo": " This objects contains only one value, which is used during the first call of EnergyPlus",
          "group_name": "External Interface",
          "group_id": 42
      },
      {
          "class_id": 1438,
          "class_name": "ExternalInterface:FunctionalMockupUnitImport:To:Actuator",
          "memo": " Hardware portion of EMS used to set up actuators in the model that are dynamically updated from the FMU.",
          "group_name": "External Interface",
          "group_id": 42
      },
      {
          "class_id": 1439,
          "class_name": "ExternalInterface:FunctionalMockupUnitImport:To:Variable",
          "memo": " Declares Erl variable as having global scope No spaces allowed in names used for Erl variables",
          "group_name": "External Interface",
          "group_id": 42
      },
      {
          "class_id": 1440,
          "class_name": "ExternalInterface:FunctionalMockupUnitExport:From:Variable",
          "memo": " This object declares an FMU input variable",
          "group_name": "External Interface",
          "group_id": 42
      },
      {
          "class_id": 1441,
          "class_name": "ExternalInterface:FunctionalMockupUnitExport:To:Schedule",
          "memo": " This objects contains only one value, which is used during the first call of EnergyPlus",
          "group_name": "External Interface",
          "group_id": 42
      },
      {
          "class_id": 1442,
          "class_name": "ExternalInterface:FunctionalMockupUnitExport:To:Actuator",
          "memo": " Hardware portion of EMS used to set up actuators in the model that are dynamically updated from the FMU.",
          "group_name": "External Interface",
          "group_id": 42
      },
      {
          "class_id": 1443,
          "class_name": "ExternalInterface:FunctionalMockupUnitExport:To:Variable",
          "memo": " Declares Erl variable as having global scope No spaces allowed in names used for Erl variables",
          "group_name": "External Interface",
          "group_id": 42
      },
      {
          "class_id": 1444,
          "class_name": "ZoneHVAC:ForcedAir:UserDefined",
          "memo": " Defines a generic zone air unit for custom modeling using Energy Management System or External Interface",
          "group_name": "User Defined HVAC and Plant Component Models",
          "group_id": 43
      },
      {
          "class_id": 1445,
          "class_name": "AirTerminal:SingleDuct:UserDefined",
          "memo": " Defines a generic single duct air terminal unit for custom modeling using Energy Management System or External Interface",
          "group_name": "User Defined HVAC and Plant Component Models",
          "group_id": 43
      },
      {
          "class_id": 1446,
          "class_name": "Coil:UserDefined",
          "memo": " Defines a generic air system component for custom modeling using Energy Management System or External Interface",
          "group_name": "User Defined HVAC and Plant Component Models",
          "group_id": 43
      },
      {
          "class_id": 1447,
          "class_name": "PlantComponent:UserDefined",
          "memo": " Defines a generic plant component for custom modeling using Energy Management System or External Interface",
          "group_name": "User Defined HVAC and Plant Component Models",
          "group_id": 43
      },
      {
          "class_id": 1448,
          "class_name": "PlantEquipmentOperation:UserDefined",
          "memo": " Defines a generic plant operation scheme for custom supervisory control using Energy Management System or External Interface to dispatch loads",
          "group_name": "User Defined HVAC and Plant Component Models",
          "group_id": 43
      },
      {
          "class_id": 1449,
          "class_name": "AvailabilityManager:Scheduled",
          "memo": " Determines the availability of a loop or system: whether it is on or off. Schedule overrides fan/pump schedule.",
          "group_name": "System Availability Managers",
          "group_id": 44
      },
      {
          "class_id": 1450,
          "class_name": "AvailabilityManager:ScheduledOn",
          "memo": " Determines the availability of a loop or system: only controls the turn on action. Schedule overrides fan/pump schedule.",
          "group_name": "System Availability Managers",
          "group_id": 44
      },
      {
          "class_id": 1451,
          "class_name": "AvailabilityManager:ScheduledOff",
          "memo": " Determines the availability of a loop or system: only controls the turn off action. Schedule overrides fan/pump schedule.",
          "group_name": "System Availability Managers",
          "group_id": 44
      },
      {
          "class_id": 1452,
          "class_name": "AvailabilityManager:OptimumStart",
          "memo": " Determines the optimal start of HVAC systems before occupancy.",
          "group_name": "System Availability Managers",
          "group_id": 44
      },
      {
          "class_id": 1453,
          "class_name": "AvailabilityManager:NightCycle",
          "memo": " Determines the availability of a loop or system: whether it is on or off. Depending on zone temperatures, overrides Schedules and forces system Fans on.",
          "group_name": "System Availability Managers",
          "group_id": 44
      },
      {
          "class_id": 1454,
          "class_name": "AvailabilityManager:DifferentialThermostat",
          "memo": " Overrides fan/pump schedules depending on temperature difference between two nodes.",
          "group_name": "System Availability Managers",
          "group_id": 44
      },
      {
          "class_id": 1455,
          "class_name": "AvailabilityManager:HighTemperatureTurnOff",
          "memo": " Overrides fan/pump schedules depending on temperature at sensor node.",
          "group_name": "System Availability Managers",
          "group_id": 44
      },
      {
          "class_id": 1456,
          "class_name": "AvailabilityManager:HighTemperatureTurnOn",
          "memo": " Overrides fan/pump schedules depending on temperature at sensor node.",
          "group_name": "System Availability Managers",
          "group_id": 44
      },
      {
          "class_id": 1457,
          "class_name": "AvailabilityManager:LowTemperatureTurnOff",
          "memo": " Overrides fan/pump schedules depending on temperature at sensor node.",
          "group_name": "System Availability Managers",
          "group_id": 44
      },
      {
          "class_id": 1458,
          "class_name": "AvailabilityManager:LowTemperatureTurnOn",
          "memo": " Overrides fan/pump schedules depending on temperature at sensor node.",
          "group_name": "System Availability Managers",
          "group_id": 44
      },
      {
          "class_id": 1459,
          "class_name": "AvailabilityManager:NightVentilation",
          "memo": " depending on zone and outdoor conditions overrides fan schedule to do precooling with outdoor air",
          "group_name": "System Availability Managers",
          "group_id": 44
      },
      {
          "class_id": 1460,
          "class_name": "AvailabilityManager:HybridVentilation",
          "memo": " Depending on zone and outdoor conditions overrides window/door opening controls to maximize natural ventilation and turn off an HVAC system when ventilation control conditions are met. This object (zone ventilation object name) has not been instrumented ",
          "group_name": "System Availability Managers",
          "group_id": 44
      },
      {
          "class_id": 1461,
          "class_name": "AvailabilityManagerAssignmentList",
          "memo": " Defines the applicable managers used for an AirLoopHVAC or PlantLoop. The priority of availability managers is based on a set of rules and are specific to the type of loop. The output from each availability manager is an availability status flag: NoActio",
          "group_name": "System Availability Managers",
          "group_id": 44
      },
      {
          "class_id": 1462,
          "class_name": "SetpointManager:Scheduled",
          "memo": " The simplest Setpoint Manager simply uses a schedule to determine one or more setpoints. Values of the nodes are not used as input.",
          "group_name": "Setpoint Managers",
          "group_id": 45
      },
      {
          "class_id": 1463,
          "class_name": "SetpointManager:Scheduled:DualSetpoint",
          "memo": " This setpoint manager places a high and low schedule value on one or more nodes.",
          "group_name": "Setpoint Managers",
          "group_id": 45
      },
      {
          "class_id": 1464,
          "class_name": "SetpointManager:OutdoorAirReset",
          "memo": " This Setpoint Manager is used to place a setpoint temperature on system node according to the outdoor air temperature using a reset rule. The outdoor air temperature is obtained from the weather information during the simulation.",
          "group_name": "Setpoint Managers",
          "group_id": 45
      },
      {
          "class_id": 1465,
          "class_name": "SetpointManager:SingleZone:Reheat",
          "memo": " This setpoint manager detects the control zone load, zone inlet node flow rate, and zone node temperature and calculates a setpoint temperature for the supply air that will satisfy the zone load (heating or cooling) for the control zone. This setpoint ma",
          "group_name": "Setpoint Managers",
          "group_id": 45
      },
      {
          "class_id": 1466,
          "class_name": "SetpointManager:SingleZone:Heating",
          "memo": " This setpoint manager detects the control zone load to meet the current heating setpoint, zone inlet node flow rate, and zone node temperature, and calculates a setpoint temperature for the supply air that will satisfy the zone heating load for the contr",
          "group_name": "Setpoint Managers",
          "group_id": 45
      },
      {
          "class_id": 1467,
          "class_name": "SetpointManager:SingleZone:Cooling",
          "memo": " This setpoint manager detects the control zone load to meet the current cooling setpoint, zone inlet node flow rate, and zone node temperature, and calculates a setpoint temperature for the supply air that will satisfy the zone cooling load for the contr",
          "group_name": "Setpoint Managers",
          "group_id": 45
      },
      {
          "class_id": 1468,
          "class_name": "SetpointManager:SingleZone:Humidity:Minimum",
          "memo": " The Single Zone Minimum Humidity Setpoint Manager allows the control of a single zone minimum humidity level. This setpoint manager can be used in conjunction with object ZoneControl:Humidistat to detect humidity levels.",
          "group_name": "Setpoint Managers",
          "group_id": 45
      },
      {
          "class_id": 1469,
          "class_name": "SetpointManager:SingleZone:Humidity:Maximum",
          "memo": " The Single Zone Maximum Humidity Setpoint Manager allows the control of a single zone maximum humidity level. This setpoint manager can be used in conjunction with object ZoneControl:Humidistat to detect humidity levels.",
          "group_name": "Setpoint Managers",
          "group_id": 45
      },
      {
          "class_id": 1470,
          "class_name": "SetpointManager:MixedAir",
          "memo": " The Mixed Air Setpoint Manager is meant to be used in conjunction with a Controller:OutdoorAir object. This setpoint manager is used to establish a temperature setpoint at the mixed air node.",
          "group_name": "Setpoint Managers",
          "group_id": 45
      },
      {
          "class_id": 1471,
          "class_name": "SetpointManager:OutdoorAirPretreat",
          "memo": " This setpoint manager determines the required conditions at the outdoor air stream node which will produce the reference setpoint condition at the mixed air node when mixed with the return air stream",
          "group_name": "Setpoint Managers",
          "group_id": 45
      },
      {
          "class_id": 1472,
          "class_name": "SetpointManager:Warmest",
          "memo": " This SetpointManager resets the cooling supply air temperature of a central forced air HVAC system according to the cooling demand of the warmest zone.",
          "group_name": "Setpoint Managers",
          "group_id": 45
      },
      {
          "class_id": 1473,
          "class_name": "SetpointManager:Coldest",
          "memo": " This SetpointManager is used in dual duct systems to reset the setpoint temperature of the air in the heating supply duct. Usually it is used in conjunction with a SetpointManager:Warmest resetting the temperature of the air in the cooling supply duct.",
          "group_name": "Setpoint Managers",
          "group_id": 45
      },
      {
          "class_id": 1474,
          "class_name": "SetpointManager:ReturnAirBypassFlow",
          "memo": " This setpoint manager determines the required mass flow rate through a return air bypass duct to meet the specified temperature setpoint",
          "group_name": "Setpoint Managers",
          "group_id": 45
      },
      {
          "class_id": 1475,
          "class_name": "SetpointManager:WarmestTemperatureFlow",
          "memo": " This setpoint manager sets both the supply air temperature and the supply air flow rate.",
          "group_name": "Setpoint Managers",
          "group_id": 45
      },
      {
          "class_id": 1476,
          "class_name": "SetpointManager:MultiZone:Heating:Average",
          "memo": " This setpoint manager sets the average supply air temperature based on the heating load requirements of all controlled zones in an air loop served by a central air-conditioner.",
          "group_name": "Setpoint Managers",
          "group_id": 45
      },
      {
          "class_id": 1477,
          "class_name": "SetpointManager:MultiZone:Cooling:Average",
          "memo": " This setpoint manager sets the average supply air temperature based on the cooling load requirements of all controlled zones in an air loop served by a central air-conditioner.",
          "group_name": "Setpoint Managers",
          "group_id": 45
      },
      {
          "class_id": 1478,
          "class_name": "SetpointManager:MultiZone:MinimumHumidity:Average",
          "memo": " This setpoint manager sets the average supply air minimum humidity ratio based on moisture load requirements of all controlled zones in an air loop served by a central air-conditioner.",
          "group_name": "Setpoint Managers",
          "group_id": 45
      },
      {
          "class_id": 1479,
          "class_name": "SetpointManager:MultiZone:MaximumHumidity:Average",
          "memo": " This setpoint manager sets the average supply air maximum humidity ratio based on moisture load requirements of all controlled zones in an air loop served by a central air-conditioner.",
          "group_name": "Setpoint Managers",
          "group_id": 45
      },
      {
          "class_id": 1480,
          "class_name": "SetpointManager:MultiZone:Humidity:Minimum",
          "memo": " This setpoint manager sets the minimum supply air humidity ratio based on humidification requirements of a controlled zone with critical humidity ratio setpoint (i.e., a zone with the highest humidity ratio setpoint) in an air loop served by a central ai",
          "group_name": "Setpoint Managers",
          "group_id": 45
      },
      {
          "class_id": 1481,
          "class_name": "SetpointManager:MultiZone:Humidity:Maximum",
          "memo": " This setpoint manager sets the maximum supply air humidity ratio based on dehumidification requirements of a controlled zone with critical humidity ratio setpoint (i.e., a zone with the lowest humidity ratio setpoint) in an air loop served by a central a",
          "group_name": "Setpoint Managers",
          "group_id": 45
      },
      {
          "class_id": 1482,
          "class_name": "SetpointManager:FollowOutdoorAirTemperature",
          "memo": " This setpoint manager is used to place a temperature setpoint on a system node that is derived from the current outdoor air environmental conditions. The outdoor air conditions are obtained from the weather information during the simulation.",
          "group_name": "Setpoint Managers",
          "group_id": 45
      },
      {
          "class_id": 1483,
          "class_name": "SetpointManager:FollowSystemNodeTemperature",
          "memo": " This setpoint manager is used to place a temperature setpoint on a system node that is derived from the current temperatures at a separate system node. The current value of the temperature at a reference node is obtained and used to generate setpoint on ",
          "group_name": "Setpoint Managers",
          "group_id": 45
      },
      {
          "class_id": 1484,
          "class_name": "SetpointManager:FollowGroundTemperature",
          "memo": " This setpoint manager is used to place a temperature setpoint on a system node that is derived from a current ground temperature. The ground temperatures are specified in different Site:GroundTemperature:* objects and used during the simulation. This set",
          "group_name": "Setpoint Managers",
          "group_id": 45
      },
      {
          "class_id": 1485,
          "class_name": "SetpointManager:CondenserEnteringReset",
          "memo": " This setpoint manager uses one curve to determine the optimum condenser entering water temperature for a given timestep and two other curves to place boundary conditions on the setpoint value.",
          "group_name": "Setpoint Managers",
          "group_id": 45
      },
      {
          "class_id": 1486,
          "class_name": "SetpointManager:CondenserEnteringReset:Ideal",
          "memo": " This setpoint manager determine the ideal optimum condenser entering water temperature setpoint for a given timestep.",
          "group_name": "Setpoint Managers",
          "group_id": 45
      },
      {
          "class_id": 1487,
          "class_name": "SetpointManager:SingleZone:OneStageCooling",
          "memo": " This object can be used with CoilSystem:Cooling:DX to model on/off cycling control of single stage air systems. Setpoints are modulated to run coil full on or full off depending on zone conditions. Intended for use with ZoneControl:Thermostat:StagedDualS",
          "group_name": "Setpoint Managers",
          "group_id": 45
      },
      {
          "class_id": 1488,
          "class_name": "SetpointManager:SingleZone:OneStageHeating",
          "memo": " This object can be used with CoilSystem:Heating:DX, Coil:Heating:Fuel, Coil:Heating:Electric to model on/off cycling control of single stage air systems. Setpoints are modulated to run coil full on or full off depending on zone conditions. Intended for u",
          "group_name": "Setpoint Managers",
          "group_id": 45
      },
      {
          "class_id": 1489,
          "class_name": "SetpointManager:ReturnTemperature:ChilledWater",
          "memo": " This setpoint manager is used to place a temperature setpoint on a plant supply outlet node based on a target return water setpoint. The setpoint manager attempts to achieve the desired return water temperature by adjusting the supply temperature setpoin",
          "group_name": "Setpoint Managers",
          "group_id": 45
      },
      {
          "class_id": 1490,
          "class_name": "SetpointManager:ReturnTemperature:HotWater",
          "memo": " This setpoint manager is used to place a temperature setpoint on a plant supply outlet node based on a target return water setpoint. The setpoint manager attempts to achieve the desired return water temperature by adjusting the supply temperature setpoin",
          "group_name": "Setpoint Managers",
          "group_id": 45
      },
      {
          "class_id": 1491,
          "class_name": "SetpointManager:SystemNodeReset:Temperature",
          "memo": " This Setpoint Manager is used to place a temperature setpoint on a system node according to the reference (e.g., return) temperature using a reset rule. The temperature setpoint is obtained by retrieving the temperature of the user specified reference sy",
          "group_name": "Setpoint Managers",
          "group_id": 45
      },
      {
          "class_id": 1492,
          "class_name": "SetpointManager:SystemNodeReset:Humidity",
          "memo": " This Setpoint Manager is used to place a humidity ratio setpoint on a system node according to the reference (e.g., return) humidity ratio using a reset rule. The humidity ratio setpoint is obtained by retrieving the humidity ratio of the user specified ",
          "group_name": "Setpoint Managers",
          "group_id": 45
      },
      {
          "class_id": 1493,
          "class_name": "Refrigeration:Case",
          "memo": " The Refrigeration Case object works in conjunction with a compressor rack, a refrigeration system, or a secondary loop to simulate the performance of a refrigerated case system. The object calculates the energy use for lights, fans and anti-sweat heaters",
          "group_name": "Refrigeration",
          "group_id": 46
      },
      {
          "class_id": 1494,
          "class_name": "Refrigeration:CompressorRack",
          "memo": " Works in conjunction with the refrigeration case and walk-in objects to simulate the performance of a refrigerated case system. This object models the electric consumption of the rack compressors and the condenser fans. Heat can be rejected either outdoo",
          "group_name": "Refrigeration",
          "group_id": 46
      },
      {
          "class_id": 1495,
          "class_name": "Refrigeration:CaseAndWalkInList",
          "memo": " Provides a list of all the refrigerated cases, walk in coolers, or air chillers cooled by a single refrigeration system. Note that the names of all cases, walk-ins ,air chillers, and CaseAndWalkInLists must be unique. That is, you cannot give a list the ",
          "group_name": "Refrigeration",
          "group_id": 46
      },
      {
          "class_id": 1496,
          "class_name": "Refrigeration:Condenser:AirCooled",
          "memo": " Air cooled condenser for a refrigeration system (Refrigeration:System).",
          "group_name": "Refrigeration",
          "group_id": 46
      },
      {
          "class_id": 1497,
          "class_name": "Refrigeration:Condenser:EvaporativeCooled",
          "memo": " Evaporative-cooled condenser for a refrigeration system (Refrigeration:System).",
          "group_name": "Refrigeration",
          "group_id": 46
      },
      {
          "class_id": 1498,
          "class_name": "Refrigeration:Condenser:WaterCooled",
          "memo": " Water cooled condenser for a refrigeration system (Refrigeration:System).",
          "group_name": "Refrigeration",
          "group_id": 46
      },
      {
          "class_id": 1499,
          "class_name": "Refrigeration:Condenser:Cascade",
          "memo": " Cascade condenser for a refrigeration system (Refrigeration:System). The cascade condenser is unlike the other condenser options because it rejects heat to another, higher-temperature, refrigeration system. That is, the cascade condenser acts as a heat r",
          "group_name": "Refrigeration",
          "group_id": 46
      },
      {
          "class_id": 1500,
          "class_name": "Refrigeration:GasCooler:AirCooled",
          "memo": " The transcritical refrigeration system requires a single gas cooler to reject the system heat.",
          "group_name": "Refrigeration",
          "group_id": 46
      },
      {
          "class_id": 1501,
          "class_name": "Refrigeration:TransferLoadList",
          "memo": " A refrigeration system may provide cooling to other, secondary, systems through either a secondary loop or a cascade condenser. If multiple transfer loads are served by a single primary system, use this list to group them together for reference by the pr",
          "group_name": "Refrigeration",
          "group_id": 46
      },
      {
          "class_id": 1502,
          "class_name": "Refrigeration:Subcooler",
          "memo": " Two types of subcoolers are modeled by the detailed refrigeration system. The liquid suction heat exchanger uses cool suction gas to subcool the hot condensate after it leaves the condenser and before it reaches the thermal expansion valve. A mechanical ",
          "group_name": "Refrigeration",
          "group_id": 46
      },
      {
          "class_id": 1503,
          "class_name": "Refrigeration:Compressor",
          "memo": " Refrigeration system compressor. Data is available for many compressors in the RefrigerationCompressor.idf dataset",
          "group_name": "Refrigeration",
          "group_id": 46
      },
      {
          "class_id": 1504,
          "class_name": "Refrigeration:CompressorList",
          "memo": " List of all the compressors included within a single refrigeration system (Refrigeration:System). Each list must contain at least one compressor. The order in which the individual compressors are listed here will be the order in which the compressors are",
          "group_name": "Refrigeration",
          "group_id": 46
      },
      {
          "class_id": 1505,
          "class_name": "Refrigeration:System",
          "memo": " Simulates the performance of a supermarket refrigeration system when used along with other objects to define the refrigeration load(s), the compressor(s), and the condenser.",
          "group_name": "Refrigeration",
          "group_id": 46
      },
      {
          "class_id": 1506,
          "class_name": "Refrigeration:TranscriticalSystem",
          "memo": " Detailed transcritical carbon dioxide (CO2) booster refrigeration systems used in supermarkets. The object allows for modeling either a single stage system with medium-temperature loads or a two stage system with both medium- and low-temperature loads.",
          "group_name": "Refrigeration",
          "group_id": 46
      },
      {
          "class_id": 1507,
          "class_name": "Refrigeration:SecondarySystem",
          "memo": " Works in conjunction with refrigerated cases and walkins to simulate the performance of a secondary loop supermarket refrigeration system. Heat from the refrigeration loads served by the secondary loop is absorbed by a primary refrigeration system (Refri",
          "group_name": "Refrigeration",
          "group_id": 46
      },
      {
          "class_id": 1508,
          "class_name": "Refrigeration:WalkIn",
          "memo": " Works in conjunction with a compressor rack, a refrigeration system, or a refrigeration secondary system to simulate the performance of a walk-in cooler. The walk-in cooler model uses information at rated conditions along with input descriptions for heat",
          "group_name": "Refrigeration",
          "group_id": 46
      },
      {
          "class_id": 1509,
          "class_name": "Refrigeration:AirChiller",
          "memo": " Works in conjunction with a refrigeration chiller set, compressor rack, a refrigeration system, or a refrigeration secondary system to simulate the performance of an air chiller, similar to one found in a refrigerated warehouse. Energy use for fans and h",
          "group_name": "Refrigeration",
          "group_id": 46
      },
      {
          "class_id": 1510,
          "class_name": "ZoneHVAC:RefrigerationChillerSet",
          "memo": " Works in conjunction with one or multiple air chillers, compressor racks, refrigeration systems, or refrigeration secondary system objects to simulate the performance of a group of air chillers cooling a single zone. The chiller set model passes informat",
          "group_name": "Refrigeration",
          "group_id": 46
      },
      {
          "class_id": 1511,
          "class_name": "DemandManagerAssignmentList",
          "memo": " A high level control that makes demand limiting decisions based on a list of possible demand limiting strategies.",
          "group_name": "Demand Limiting Controls",
          "group_id": 47
      },
      {
          "class_id": 1512,
          "class_name": "DemandManager:ExteriorLights",
          "memo": " used for demand limiting Exterior:Lights objects.",
          "group_name": "Demand Limiting Controls",
          "group_id": 47
      },
      {
          "class_id": 1513,
          "class_name": "DemandManager:Lights",
          "memo": " used for demand limiting Lights objects.",
          "group_name": "Demand Limiting Controls",
          "group_id": 47
      },
      {
          "class_id": 1514,
          "class_name": "DemandManager:ElectricEquipment",
          "memo": " used for demand limiting ElectricEquipment objects.",
          "group_name": "Demand Limiting Controls",
          "group_id": 47
      },
      {
          "class_id": 1515,
          "class_name": "DemandManager:Thermostats",
          "memo": " used for demand limiting ZoneControl:Thermostat objects.",
          "group_name": "Demand Limiting Controls",
          "group_id": 47
      },
      {
          "class_id": 1516,
          "class_name": "DemandManager:Ventilation",
          "memo": " used for demand limiting Controller:OutdoorAir objects.",
          "group_name": "Demand Limiting Controls",
          "group_id": 47
      },
      {
          "class_id": 1517,
          "class_name": "Generator:InternalCombustionEngine",
          "memo": " This generator model is the empirical model from the Building Loads and System Thermodynamics (BLAST) program. Engine performance curves are generated by fitting catalog data to second order polynomial equations. Three sets of coefficients are required.",
          "group_name": "Electric Load Center-Generator Specifications",
          "group_id": 48
      },
      {
          "class_id": 1518,
          "class_name": "Generator:CombustionTurbine",
          "memo": " This generator model is the empirical model from the Building Loads and System Thermodynamics (BLAST) program. Generator performance curves are generated by fitting catalog data to second order polynomial equations. Three sets of coefficients are require",
          "group_name": "Electric Load Center-Generator Specifications",
          "group_id": 48
      },
      {
          "class_id": 1519,
          "class_name": "Generator:MicroTurbine",
          "memo": " MicroTurbine generators are small combustion turbines (e.g., 25kW to 500kW). The model calculates electrical power output, fuel use, standby and ancillary power. Energy recovery from exhaust air can be used to heat water.",
          "group_name": "Electric Load Center-Generator Specifications",
          "group_id": 48
      },
      {
          "class_id": 1520,
          "class_name": "Generator:Photovoltaic",
          "memo": " Describes an array of photovoltaic (PV) modules. A series of different PV arrays can be connected to a single electric load center (and inverter) by listing them all in an ElectricLoadCenter:Generator object. PV performance is taken from the referenced P",
          "group_name": "Electric Load Center-Generator Specifications",
          "group_id": 48
      },
      {
          "class_id": 1521,
          "class_name": "PhotovoltaicPerformance:Simple",
          "memo": " Describes a simple model of photovoltaics that may be useful for early phase design analysis. In this model the user has direct access to the efficiency with which surfaces convert incident solar radiation to electricity and need not specify arrays of sp",
          "group_name": "Electric Load Center-Generator Specifications",
          "group_id": 48
      },
      {
          "class_id": 1522,
          "class_name": "PhotovoltaicPerformance:EquivalentOne-Diode",
          "memo": " Describes the performance characteristics of Photovoltaic (PV) modules to be modeled using an equivalent one-diode circuit. This model is also known as the 4- or 5-parameter TRNSYS model for photovoltaics.",
          "group_name": "Electric Load Center-Generator Specifications",
          "group_id": 48
      },
      {
          "class_id": 1523,
          "class_name": "PhotovoltaicPerformance:Sandia",
          "memo": " Describes performance input data needed for specific makes and models of production PV panels using the empirical coefficients assembled by Sandia National Laboratory.",
          "group_name": "Electric Load Center-Generator Specifications",
          "group_id": 48
      },
      {
          "class_id": 1524,
          "class_name": "Generator:PVWatts",
          "memo": " Describes a simple set of inputs for an array of photovoltaic (PV) modules as described in the PVWatts software. A series of different PVWatts arrays can be connected to a single electric load center (preferably through an ElectricLoadCenter:Inverter:PVW",
          "group_name": "Electric Load Center-Generator Specifications",
          "group_id": 48
      },
      {
          "class_id": 1525,
          "class_name": "ElectricLoadCenter:Inverter:PVWatts",
          "memo": " Electric power inverter to convert from direct current (DC) to alternating current (AC) in an electric load center that contains Generator:PVWatts objects. It implements the PVWatts inverter performance curves.",
          "group_name": "Electric Load Center-Generator Specifications",
          "group_id": 48
      },
      {
          "class_id": 1526,
          "class_name": "Generator:FuelCell",
          "memo": " This generator model is the FC model from IEA Annex 42",
          "group_name": "Electric Load Center-Generator Specifications",
          "group_id": 48
      },
      {
          "class_id": 1527,
          "class_name": "Generator:FuelCell:PowerModule",
          "memo": " Describe the core power module subsystem of a fuel cell power generator. This includes the fuel cell stack, fuel reformer, and whatever ancillary devices are included inside. If the model has multiple FC generators that are of the exact same type, then o",
          "group_name": "Electric Load Center-Generator Specifications",
          "group_id": 48
      },
      {
          "class_id": 1528,
          "class_name": "Generator:FuelCell:AirSupply",
          "memo": " Used to define details of the air supply subsystem for a fuel cell power generator.",
          "group_name": "Electric Load Center-Generator Specifications",
          "group_id": 48
      },
      {
          "class_id": 1529,
          "class_name": "Generator:FuelCell:WaterSupply",
          "memo": " Used to provide details of the water supply subsystem for a fuel cell power generator. This water is used for steam reforming of the fuel and is not the same as the water used for thermal heat recovery.",
          "group_name": "Electric Load Center-Generator Specifications",
          "group_id": 48
      },
      {
          "class_id": 1530,
          "class_name": "Generator:FuelCell:AuxiliaryHeater",
          "memo": " Intended for modeling an auxiliary heater for a fuel cell power generator, however this portion of the model is not yet available. The program still requires one of these objects be included even though the data are not yet used (so that internal data st",
          "group_name": "Electric Load Center-Generator Specifications",
          "group_id": 48
      },
      {
          "class_id": 1531,
          "class_name": "Generator:FuelCell:ExhaustGasToWaterHeatExchanger",
          "memo": " Describes the exhaust gas heat exchanger subsystem of a fuel cell power generator used to recovery thermal energy",
          "group_name": "Electric Load Center-Generator Specifications",
          "group_id": 48
      },
      {
          "class_id": 1532,
          "class_name": "Generator:FuelCell:ElectricalStorage",
          "memo": " Used to describe the electrical storage subsystem for a fuel cell power generator. The electrical storage model is a very simple \"constrained bucket\" model. Note that this electrical storage is embedded within the FC device.",
          "group_name": "Electric Load Center-Generator Specifications",
          "group_id": 48
      },
      {
          "class_id": 1533,
          "class_name": "Generator:FuelCell:Inverter",
          "memo": " Used to describe the power condition unit subsystem of a fuel cell power generator. This object models an inverter system contained within a fuel cell system that converts from direct current (DC) to alternating current (AC).",
          "group_name": "Electric Load Center-Generator Specifications",
          "group_id": 48
      },
      {
          "class_id": 1534,
          "class_name": "Generator:FuelCell:StackCooler",
          "memo": " This object is optional and is used to define details needed to model the stack cooler on PEMFC.",
          "group_name": "Electric Load Center-Generator Specifications",
          "group_id": 48
      },
      {
          "class_id": 1535,
          "class_name": "Generator:MicroCHP",
          "memo": " Small-scale combined heat and power (micro CHP) electric generator using the model developed by IEA/ECBCS Annex 42 see www.cogen-sim.net. The model was developed for both internal combustion and Stirling cycle engines, but might be used for other types o",
          "group_name": "Electric Load Center-Generator Specifications",
          "group_id": 48
      },
      {
          "class_id": 1536,
          "class_name": "Generator:MicroCHP:NonNormalizedParameters",
          "memo": " This object is referenced by a Generator:MicroCHP object and provides the non-normalized parameters for the MicroCHP generator model.",
          "group_name": "Electric Load Center-Generator Specifications",
          "group_id": 48
      },
      {
          "class_id": 1537,
          "class_name": "Generator:FuelSupply",
          "memo": " Used only with Generator:FuelCell and Generator:MicroCHP",
          "group_name": "Electric Load Center-Generator Specifications",
          "group_id": 48
      },
      {
          "class_id": 1538,
          "class_name": "Generator:WindTurbine",
          "memo": " Wind turbine generator.",
          "group_name": "Electric Load Center-Generator Specifications",
          "group_id": 48
      },
      {
          "class_id": 1539,
          "class_name": "ElectricLoadCenter:Generators",
          "memo": " List of electric power generators to include in the simulation including the name and type of each generators along with availability schedule, rated power output, and thermal-to-electrical power ratio.",
          "group_name": "Electric Load Center-Generator Specifications",
          "group_id": 48
      },
      {
          "class_id": 1540,
          "class_name": "ElectricLoadCenter:Inverter:Simple",
          "memo": " Electric power inverter to convert from direct current (DC) to alternating current (AC) in an electric load center that contains photovoltaic modules. This input object is for the simplest inverter model and uses a fixed efficiency.",
          "group_name": "Electric Load Center-Generator Specifications",
          "group_id": 48
      },
      {
          "class_id": 1541,
          "class_name": "ElectricLoadCenter:Inverter:FunctionOfPower",
          "memo": " Electric power inverter to convert from direct current (DC) to alternating current (AC) in an electric load center that contains photovoltaic modules. This input object is for an inverter model where efficiency is a function of normalized power.",
          "group_name": "Electric Load Center-Generator Specifications",
          "group_id": 48
      },
      {
          "class_id": 1542,
          "class_name": "ElectricLoadCenter:Inverter:LookUpTable",
          "memo": " California Energy Commission tests and publishes data on inverters This inverter model interpolates using CEC test data Input data are at http://www.gosolarcalifornia.org/equipment/inverter_tests/summaries",
          "group_name": "Electric Load Center-Generator Specifications",
          "group_id": 48
      },
      {
          "class_id": 1543,
          "class_name": "ElectricLoadCenter:Storage:Simple",
          "memo": " Used to model storage of electricity in an electric load center. This is a simple model that does not attempt to represent any of the characteristics of a real storage device such as a battery. The type of power, AC or DC, depends on the configuration ch",
          "group_name": "Electric Load Center-Generator Specifications",
          "group_id": 48
      },
      {
          "class_id": 1544,
          "class_name": "ElectricLoadCenter:Storage:Battery",
          "memo": " Uses the kinetic battery model (KiBaM) to simulate rechargeable battery banks in an electrical load center. The battery bank is a collection of one or more individual battery modules. Given the surplus or deficit power from the electrical system and the ",
          "group_name": "Electric Load Center-Generator Specifications",
          "group_id": 48
      },
      {
          "class_id": 1545,
          "class_name": "ElectricLoadCenter:Storage:LiIonNMCBattery",
          "memo": " Uses Lithium Ion NMC model to simulate rechargeable battery banks in an electrical load center. The battery bank is a collection of one or more individual battery modules. Given the surplus or deficit power from the electrical system and the state of cha",
          "group_name": "Electric Load Center-Generator Specifications",
          "group_id": 48
      },
      {
          "class_id": 1546,
          "class_name": "ElectricLoadCenter:Transformer",
          "memo": " This object is used to model the energy losses of transformers when they are used to transfer electricity from the grid to a building (as distribution transformers) or transfer electricity from onsite generators to the grid.",
          "group_name": "Electric Load Center-Generator Specifications",
          "group_id": 48
      },
      {
          "class_id": 1547,
          "class_name": "ElectricLoadCenter:Distribution",
          "memo": " ElectricLoadCenter:Distribution objects are used to include on-site electricity generators and or storage in a simulation.",
          "group_name": "Electric Load Center-Generator Specifications",
          "group_id": 48
      },
      {
          "class_id": 1548,
          "class_name": "ElectricLoadCenter:Storage:Converter",
          "memo": " This model is for converting AC to DC for grid-supplied charging of DC storage",
          "group_name": "Electric Load Center-Generator Specifications",
          "group_id": 48
      },
      {
          "class_id": 1549,
          "class_name": "WaterUse:Equipment",
          "memo": " A generalized object for simulating all water end uses. Hot and cold water uses are included, as well as controlled mixing of hot and cold water at the tap. The WaterUse:Equipment object can be used stand-alone, or coupled into a plant loop using the Wat",
          "group_name": "Water Systems",
          "group_id": 49
      },
      {
          "class_id": 1550,
          "class_name": "WaterUse:Connections",
          "memo": " A subsystem that groups together multiple WaterUse:Equipment components. As its name suggests, the object provides connections that are shared by these components, including: 1. Inlet node and outlet node connections to a plant loop 2. Connections to Wat",
          "group_name": "Water Systems",
          "group_id": 49
      },
      {
          "class_id": 1551,
          "class_name": "WaterUse:Storage",
          "memo": " A water storage tank. If the building model is to include any on-site water collection, wells, or storing and reuse of graywater, then a WaterUse:Storage object is needed. Each WaterUse:Storage can serve as a central node and make connections to numerous",
          "group_name": "Water Systems",
          "group_id": 49
      },
      {
          "class_id": 1552,
          "class_name": "WaterUse:Well",
          "memo": " Simulates on-site water supply from a well. Well water is pumped out of the ground into a WaterUse:Storage. The operation of the ground water well is controlled by the associated WaterUse:Storage which is assumed to be operated as a vented cistern with n",
          "group_name": "Water Systems",
          "group_id": 49
      },
      {
          "class_id": 1553,
          "class_name": "WaterUse:RainCollector",
          "memo": " Used for harvesting rainwater falling on building surfaces. The rainwater is sent to a WaterUse:Storage object. In versions up till Version 9.6, it is necessary to also include a Site:Precipitation object to describe the rates of rainfall, in order to us",
          "group_name": "Water Systems",
          "group_id": 49
      },
      {
          "class_id": 1554,
          "class_name": "FaultModel:TemperatureSensorOffset:OutdoorAir",
          "memo": " This object describes outdoor air temperature sensor offset",
          "group_name": "Operational Faults",
          "group_id": 50
      },
      {
          "class_id": 1555,
          "class_name": "FaultModel:HumiditySensorOffset:OutdoorAir",
          "memo": " This object describes outdoor air humidity sensor offset",
          "group_name": "Operational Faults",
          "group_id": 50
      },
      {
          "class_id": 1556,
          "class_name": "FaultModel:EnthalpySensorOffset:OutdoorAir",
          "memo": " This object describes outdoor air enthalpy sensor offset",
          "group_name": "Operational Faults",
          "group_id": 50
      },
      {
          "class_id": 1557,
          "class_name": "FaultModel:TemperatureSensorOffset:ReturnAir",
          "memo": " This object describes return air temperature sensor offset",
          "group_name": "Operational Faults",
          "group_id": 50
      },
      {
          "class_id": 1558,
          "class_name": "FaultModel:EnthalpySensorOffset:ReturnAir",
          "memo": " This object describes return air enthalpy sensor offset",
          "group_name": "Operational Faults",
          "group_id": 50
      },
      {
          "class_id": 1559,
          "class_name": "FaultModel:TemperatureSensorOffset:ChillerSupplyWater",
          "memo": " This object describes fault of chiller supply water temperature sensor offset",
          "group_name": "Operational Faults",
          "group_id": 50
      },
      {
          "class_id": 1560,
          "class_name": "FaultModel:TemperatureSensorOffset:CoilSupplyAir",
          "memo": " This object describes fault of coil supply air temperature sensor offset",
          "group_name": "Operational Faults",
          "group_id": 50
      },
      {
          "class_id": 1561,
          "class_name": "FaultModel:TemperatureSensorOffset:CondenserSupplyWater",
          "memo": " This object describes fault of condenser supply water temperature sensor offset",
          "group_name": "Operational Faults",
          "group_id": 50
      },
      {
          "class_id": 1562,
          "class_name": "FaultModel:ThermostatOffset",
          "memo": " This object describes fault of thermostat offset",
          "group_name": "Operational Faults",
          "group_id": 50
      },
      {
          "class_id": 1563,
          "class_name": "FaultModel:HumidistatOffset",
          "memo": " This object describes fault of humidistat offset",
          "group_name": "Operational Faults",
          "group_id": 50
      },
      {
          "class_id": 1564,
          "class_name": "FaultModel:Fouling:AirFilter",
          "memo": " This object describes fault of dirty air filters",
          "group_name": "Operational Faults",
          "group_id": 50
      },
      {
          "class_id": 1565,
          "class_name": "FaultModel:Fouling:Boiler",
          "memo": " This object describes the fouling fault of boilers with water-based heat exchangers",
          "group_name": "Operational Faults",
          "group_id": 50
      },
      {
          "class_id": 1566,
          "class_name": "FaultModel:Fouling:EvaporativeCooler",
          "memo": " This object describes the fouling fault of the wetted coil evaporative cooler",
          "group_name": "Operational Faults",
          "group_id": 50
      },
      {
          "class_id": 1567,
          "class_name": "FaultModel:Fouling:Chiller",
          "memo": " This object describes the fouling fault of chillers with water-cooled condensers",
          "group_name": "Operational Faults",
          "group_id": 50
      },
      {
          "class_id": 1568,
          "class_name": "FaultModel:Fouling:CoolingTower",
          "memo": " This object describes the fault of fouling cooling towers",
          "group_name": "Operational Faults",
          "group_id": 50
      },
      {
          "class_id": 1569,
          "class_name": "FaultModel:Fouling:Coil",
          "memo": " This object describes fouling water heating or cooling coils",
          "group_name": "Operational Faults",
          "group_id": 50
      },
      {
          "class_id": 1570,
          "class_name": "Matrix:TwoDimension",
          "memo": " matrix data in row-major order list each row keeping the columns in order number of values must equal N1 x N2",
          "group_name": "General Data Entry",
          "group_id": 51
      },
      {
          "class_id": 1571,
          "class_name": "HybridModel:Zone",
          "memo": " Zones with measured air temperature data and a range of dates. If the range of temperature measurement dates includes a leap day, the weather data should include a leap day.",
          "group_name": "Hybrid Model",
          "group_id": 52
      },
      {
          "class_id": 1572,
          "class_name": "Curve:Linear",
          "memo": " Linear curve with one independent variable. Input for the linear curve consists of a curve name, the two coefficients, and the maximum and minimum valid independent variable values. Optional inputs for curve minimum and maximum may be used to limit the o",
          "group_name": "Performance Curves",
          "group_id": 53
      },
      {
          "class_id": 1573,
          "class_name": "Curve:QuadLinear",
          "memo": " Linear curve with four independent variables. Input for the linear curve consists of a curve name, the two coefficients, and the maximum and minimum valid independent variable values. Optional inputs for curve minimum and maximum may be used to limit the",
          "group_name": "Performance Curves",
          "group_id": 53
      },
      {
          "class_id": 1574,
          "class_name": "Curve:QuintLinear",
          "memo": " Linear curve with five independent variables. Input for the linear curve consists of a curve name, the two coefficients, and the maximum and minimum valid independent variable values. Optional inputs for curve minimum and maximum may be used to limit the",
          "group_name": "Performance Curves",
          "group_id": 53
      },
      {
          "class_id": 1575,
          "class_name": "Curve:Quadratic",
          "memo": " Quadratic curve with one independent variable. Input for a quadratic curve consists of the curve name, the three coefficients, and the maximum and minimum valid independent variable values. Optional inputs for curve minimum and maximum may be used to lim",
          "group_name": "Performance Curves",
          "group_id": 53
      },
      {
          "class_id": 1576,
          "class_name": "Curve:Cubic",
          "memo": " Cubic curve with one independent variable. Input for a cubic curve consists of the curve name, the 4 coefficients, and the maximum and minimum valid independent variable values. Optional inputs for curve minimum and maximum may be used to limit the outpu",
          "group_name": "Performance Curves",
          "group_id": 53
      },
      {
          "class_id": 1577,
          "class_name": "Curve:Quartic",
          "memo": " Quartic (fourth order polynomial) curve with one independent variable. Input for a Quartic curve consists of the curve name, the five coefficients, and the maximum and minimum valid independent variable values. Optional inputs for curve minimum and maxim",
          "group_name": "Performance Curves",
          "group_id": 53
      },
      {
          "class_id": 1578,
          "class_name": "Curve:Exponent",
          "memo": " Exponent curve with one independent variable. Input for a exponent curve consists of the curve name, the 3 coefficients, and the maximum and minimum valid independent variable values. Optional inputs for curve minimum and maximum may be used to limit the",
          "group_name": "Performance Curves",
          "group_id": 53
      },
      {
          "class_id": 1579,
          "class_name": "Curve:Bicubic",
          "memo": " Cubic curve with two independent variables. Input consists of the curve name, the ten coefficients, and the minimum and maximum values for each of the independent variables. Optional inputs for curve minimum and maximum may be used to limit the output of",
          "group_name": "Performance Curves",
          "group_id": 53
      },
      {
          "class_id": 1580,
          "class_name": "Curve:Biquadratic",
          "memo": " Quadratic curve with two independent variables. Input consists of the curve name, the six coefficients, and min and max values for each of the independent variables. Optional inputs for curve minimum and maximum may be used to limit the output of the per",
          "group_name": "Performance Curves",
          "group_id": 53
      },
      {
          "class_id": 1581,
          "class_name": "Curve:QuadraticLinear",
          "memo": " Quadratic-linear curve with two independent variables. Input consists of the curve name, the six coefficients, and min and max values for each of the independent variables. Optional inputs for curve minimum and maximum may be used to limit the output of ",
          "group_name": "Performance Curves",
          "group_id": 53
      },
      {
          "class_id": 1582,
          "class_name": "Curve:CubicLinear",
          "memo": " Cubic-linear curve with two independent variables. Input consists of the curve name, the six coefficients, and min and max values for each of the independent variables. Optional inputs for curve minimum and maximum may be used to limit the output of the ",
          "group_name": "Performance Curves",
          "group_id": 53
      },
      {
          "class_id": 1583,
          "class_name": "Curve:Triquadratic",
          "memo": " Quadratic curve with three independent variables. Input consists of the curve name, the twenty seven coefficients, and min and max values for each of the independent variables. Optional inputs for curve minimum and maximum may be used to limit the output",
          "group_name": "Performance Curves",
          "group_id": 53
      },
      {
          "class_id": 1584,
          "class_name": "Curve:Functional:PressureDrop",
          "memo": " Sets up curve information for minor loss and/or friction calculations in plant pressure simulations Expression: DeltaP = {K + f*(L/D)} * (rho * V^2) / 2",
          "group_name": "Performance Curves",
          "group_id": 53
      },
      {
          "class_id": 1585,
          "class_name": "Curve:FanPressureRise",
          "memo": " Special curve type with two independent variables. Input for the fan total pressure rise curve consists of the curve name, the four coefficients, and the maximum and minimum valid independent variable values. Optional inputs for the curve minimum and max",
          "group_name": "Performance Curves",
          "group_id": 53
      },
      {
          "class_id": 1586,
          "class_name": "Curve:ExponentialSkewNormal",
          "memo": " Exponential-modified skew normal curve with one independent variable. Input consists of the curve name, the four coefficients, and the maximum and minimum valid independent variable values. Optional inputs for the curve minimum and maximum may be used to",
          "group_name": "Performance Curves",
          "group_id": 53
      },
      {
          "class_id": 1587,
          "class_name": "Curve:Sigmoid",
          "memo": " Sigmoid curve with one independent variable. Input consists of the curve name, the five coefficients, and the maximum and minimum valid independent variable values. Optional inputs for the curve minimum and maximum may be used to limit the output of the ",
          "group_name": "Performance Curves",
          "group_id": 53
      },
      {
          "class_id": 1588,
          "class_name": "Curve:RectangularHyperbola1",
          "memo": " Rectangular hyperbola type 1 curve with one independent variable. Input consists of the curve name, the three coefficients, and the maximum and minimum valid independent variable values. Optional inputs for the curve minimum and maximum may be used to li",
          "group_name": "Performance Curves",
          "group_id": 53
      },
      {
          "class_id": 1589,
          "class_name": "Curve:RectangularHyperbola2",
          "memo": " Rectangular hyperbola type 2 curve with one independent variable. Input consists of the curve name, the three coefficients, and the maximum and minimum valid independent variable values. Optional inputs for the curve minimum and maximum may be used to li",
          "group_name": "Performance Curves",
          "group_id": 53
      },
      {
          "class_id": 1590,
          "class_name": "Curve:ExponentialDecay",
          "memo": " Exponential decay curve with one independent variable. Input consists of the curve name, the three coefficients, and the maximum and minimum valid independent variable values. Optional inputs for the curve minimum and maximum may be used to limit the out",
          "group_name": "Performance Curves",
          "group_id": 53
      },
      {
          "class_id": 1591,
          "class_name": "Curve:DoubleExponentialDecay",
          "memo": " Double exponential decay curve with one independent variable. Input consists of the curve name, the five coefficients, and the maximum and minimum valid independent variable values. Optional inputs for the curve minimum and maximum may be used to limit t",
          "group_name": "Performance Curves",
          "group_id": 53
      },
      {
          "class_id": 1592,
          "class_name": "Curve:ChillerPartLoadWithLift",
          "memo": " This chiller part-load performance curve has three independent variables. Input consists of the curve name, the twelve coefficients, and the maximum and minimum valid independent variable values. Optional inputs for the curve minimum and maximum may be u",
          "group_name": "Performance Curves",
          "group_id": 53
      },
      {
          "class_id": 1593,
          "class_name": "Table:IndependentVariable",
          "memo": " An independent variable representing a single dimension of a Table:Lookup object.",
          "group_name": "Performance Tables",
          "group_id": 54
      },
      {
          "class_id": 1594,
          "class_name": "Table:IndependentVariableList",
          "memo": " A sorted list of independent variables used by one or more Table:Lookup objects.",
          "group_name": "Performance Tables",
          "group_id": 54
      },
      {
          "class_id": 1595,
          "class_name": "Table:Lookup",
          "memo": " Lookup tables are used in place of curves and can represent any number of independent variables (defined as Table:IndependentVariable objects in a Table:IndependentVariableList). Output values are interpolated within the bounds defined by each independen",
          "group_name": "Performance Tables",
          "group_id": 54
      },
      {
          "class_id": 1596,
          "class_name": "FluidProperties:Name",
          "memo": " potential fluid name/type in the input file repeat this object for each fluid",
          "group_name": "Fluid Properties",
          "group_id": 55
      },
      {
          "class_id": 1597,
          "class_name": "FluidProperties:GlycolConcentration",
          "memo": " glycol and what concentration it is",
          "group_name": "Fluid Properties",
          "group_id": 55
      },
      {
          "class_id": 1598,
          "class_name": "FluidProperties:Temperatures",
          "memo": " property values for fluid properties list of up to 250 temperatures, note that number of property values must match the number of properties in other words, there must be a one-to-one correspondence between the property values in this list and the actual",
          "group_name": "Fluid Properties",
          "group_id": 55
      },
      {
          "class_id": 1599,
          "class_name": "FluidProperties:Saturated",
          "memo": " fluid properties for the saturated region",
          "group_name": "Fluid Properties",
          "group_id": 55
      },
      {
          "class_id": 1600,
          "class_name": "FluidProperties:Superheated",
          "memo": " fluid properties for the superheated region",
          "group_name": "Fluid Properties",
          "group_id": 55
      },
      {
          "class_id": 1601,
          "class_name": "FluidProperties:Concentration",
          "memo": " fluid properties for water/other fluid mixtures",
          "group_name": "Fluid Properties",
          "group_id": 55
      },
      {
          "class_id": 1602,
          "class_name": "CurrencyType",
          "memo": " If CurrencyType is not specified, it will default to USD and produce $ in the reports.",
          "group_name": "Economics",
          "group_id": 56
      },
      {
          "class_id": 1603,
          "class_name": "ComponentCost:Adjustments",
          "memo": " Used to perform various modifications to the construction costs to arrive at an estimate for total project costs. This object allows extending the line item model so that the overall costs of the project will reflect various profit and fees.",
          "group_name": "Economics",
          "group_id": 56
      },
      {
          "class_id": 1604,
          "class_name": "ComponentCost:Reference",
          "memo": " Used to allow comparing the current cost estimate to the results of a previous estimate for a reference building. This object parallels the ComponentCost:Adjustments object but adds a field for entering the cost line item model result for the reference b",
          "group_name": "Economics",
          "group_id": 56
      },
      {
          "class_id": 1605,
          "class_name": "ComponentCost:LineItem",
          "memo": " Each instance of this object creates a cost line item and will contribute to the total for a cost estimate.",
          "group_name": "Economics",
          "group_id": 56
      },
      {
          "class_id": 1606,
          "class_name": "UtilityCost:Tariff",
          "memo": " Defines the name of a utility cost tariff, the type of tariff, and other details about the overall tariff. Each other object that is part of the tariff model references the tariff name. See UtilityCost:Charge:Simple, UtilityCost:Charge:Block, UtilityCost",
          "group_name": "Economics",
          "group_id": 56
      },
      {
          "class_id": 1607,
          "class_name": "UtilityCost:Qualify",
          "memo": " The qualify object allows only tariffs to be selected based on limits which may apply such as maximum or minimum demand requirements. If the results of the simulation fall outside of the range of qualifications, that tariff is still calculated but the \"Q",
          "group_name": "Economics",
          "group_id": 56
      },
      {
          "class_id": 1608,
          "class_name": "UtilityCost:Charge:Simple",
          "memo": " UtilityCost:Charge:Simple is one of the most often used objects for tariff calculation. It is used to compute energy and demand charges that are very simple. It may also be used for taxes, surcharges and any other charges that occur on a utility bill. Mu",
          "group_name": "Economics",
          "group_id": 56
      },
      {
          "class_id": 1609,
          "class_name": "UtilityCost:Charge:Block",
          "memo": " Used to compute energy and demand charges (or any other charges) that are structured in blocks of charges. Multiple UtilityCost:Charge:Block objects may be defined for a single tariff and they will be added together.",
          "group_name": "Economics",
          "group_id": 56
      },
      {
          "class_id": 1610,
          "class_name": "UtilityCost:Ratchet",
          "memo": " Allows the modeling of tariffs that include some type of seasonal ratcheting. Ratchets are most common when used with electric demand charges. A ratchet is when a utility requires that the demand charge for a month with a low demand may be increased to b",
          "group_name": "Economics",
          "group_id": 56
      },
      {
          "class_id": 1611,
          "class_name": "UtilityCost:Variable",
          "memo": " Allows for the direct entry of monthly values into a utility tariff variable.",
          "group_name": "Economics",
          "group_id": 56
      },
      {
          "class_id": 1612,
          "class_name": "UtilityCost:Computation",
          "memo": " The object lists a series of computations that are used to perform the utility bill calculation. The object is only used for complex tariffs that cannot be modeled any other way. For most utility tariffs, UtilityCost:Computation is unnecessary and should",
          "group_name": "Economics",
          "group_id": 56
      },
      {
          "class_id": 1613,
          "class_name": "LifeCycleCost:Parameters",
          "memo": " Provides inputs related to the overall life-cycle analysis. It establishes many of the assumptions used in computing the present value. It is important that when comparing the results of multiple simulations that the fields in the LifeCycleCost:Parameter",
          "group_name": "Economics",
          "group_id": 56
      },
      {
          "class_id": 1614,
          "class_name": "LifeCycleCost:RecurringCosts",
          "memo": " Recurring costs are costs that repeat over time on a regular schedule during the study period. If costs associated with equipment do repeat but not on a regular schedule, use LifeCycleCost:NonrecurringCost objects instead.",
          "group_name": "Economics",
          "group_id": 56
      },
      {
          "class_id": 1615,
          "class_name": "LifeCycleCost:NonrecurringCost",
          "memo": " A non-recurring cost happens only once during the study period. For costs that occur more than once during the study period on a regular schedule, use the LifeCycleCost:RecurringCost object.",
          "group_name": "Economics",
          "group_id": 56
      },
      {
          "class_id": 1616,
          "class_name": "LifeCycleCost:UsePriceEscalation",
          "memo": " Life cycle cost escalation factors. The values for this object may be found in the annual supplement to NIST Handbook 135 in Tables Ca-1 to Ca-5 and are included in an EnergyPlus dataset file.",
          "group_name": "Economics",
          "group_id": 56
      },
      {
          "class_id": 1617,
          "class_name": "LifeCycleCost:UseAdjustment",
          "memo": " Used by advanced users to adjust the energy or water use costs for future years. This should not be used for compensating for inflation but should only be used to increase the costs of energy or water based on assumed changes to the actual usage, such as",
          "group_name": "Economics",
          "group_id": 56
      },
      {
          "class_id": 1618,
          "class_name": "Parametric:SetValueForRun",
          "memo": " Parametric objects allow a set of multiple simulations to be defined in a single idf file. The parametric preprocessor scans the idf for Parametric:* objects then creates and runs multiple idf files, one for each defined simulation. The core parametric o",
          "group_name": "Parametrics",
          "group_id": 57
      },
      {
          "class_id": 1619,
          "class_name": "Parametric:Logic",
          "memo": " This object allows some types of objects to be included for some parametric cases and not for others. For example, you might want an overhang on a window in some parametric runs and not others. A single Parametric:Logic object is allowed per file. Consul",
          "group_name": "Parametrics",
          "group_id": 57
      },
      {
          "class_id": 1620,
          "class_name": "Parametric:RunControl",
          "memo": " Controls which parametric runs are simulated. This object is optional. If it is not included, then all parametric runs are performed.",
          "group_name": "Parametrics",
          "group_id": 57
      },
      {
          "class_id": 1621,
          "class_name": "Parametric:FileNameSuffix",
          "memo": " Defines the suffixes to be appended to the idf and output file names for each parametric run. If this object is omitted, the suffix will default to the run number.",
          "group_name": "Parametrics",
          "group_id": 57
      },
      {
          "class_id": 1622,
          "class_name": "Output:VariableDictionary",
          "memo": " Produces a list summarizing the output variables and meters that are available for reporting for the model being simulated (rdd output file). The list varies depending on the types of objects present in the idf file. For example, variables related to lig",
          "group_name": "Output Reporting",
          "group_id": 58
      },
      {
          "class_id": 1623,
          "class_name": "Output:Surfaces:List",
          "memo": " Produces a report summarizing the details of surfaces in the eio output file.",
          "group_name": "Output Reporting",
          "group_id": 58
      },
      {
          "class_id": 1624,
          "class_name": "Output:Surfaces:Drawing",
          "memo": " Produces reports/files that are capable of rendering graphically or being imported into other programs. Rendering does not alter the actual inputs/surfaces.",
          "group_name": "Output Reporting",
          "group_id": 58
      },
      {
          "class_id": 1625,
          "class_name": "Output:Schedules",
          "memo": " Produces a condensed reporting that illustrates the full range of schedule values in the eio output file. In the style of input: DaySchedule,  WeekSchedule, and Annual Schedule.",
          "group_name": "Output Reporting",
          "group_id": 58
      },
      {
          "class_id": 1626,
          "class_name": "Output:Constructions",
          "memo": " Adds a report to the eio output file which shows details for each construction, including overall properties, a list of material layers, and calculated results related to conduction transfer functions.",
          "group_name": "Output Reporting",
          "group_id": 58
      },
      {
          "class_id": 1627,
          "class_name": "Output:EnergyManagementSystem",
          "memo": " This object is used to control the output produced by the Energy Management System",
          "group_name": "Output Reporting",
          "group_id": 58
      },
      {
          "class_id": 1628,
          "class_name": "OutputControl:SurfaceColorScheme",
          "memo": " This object is used to set colors for reporting on various building elements particularly for the DXF reports. We know the user can enter 0 to 255 and the color map is available in DXF output. Therefore, we are limiting the colors in that range. You can ",
          "group_name": "Output Reporting",
          "group_id": 58
      },
      {
          "class_id": 1629,
          "class_name": "Output:Table:SummaryReports",
          "memo": " This object allows the user to call report types that are predefined and will appear with the other tabular reports. These predefined reports are sensitive to the OutputControl:Table:Style object and appear in the same files as the tabular reports. The e",
          "group_name": "Output Reporting",
          "group_id": 58
      },
      {
          "class_id": 1630,
          "class_name": "Output:Table:TimeBins",
          "memo": " Produces a bin report in the table output file which shows the amount of time in hours that occurs in different bins for a single specific output variable or meter. Two different types of binning are reported: by month and by hour of the day.",
          "group_name": "Output Reporting",
          "group_id": 58
      },
      {
          "class_id": 1631,
          "class_name": "Output:Table:Monthly",
          "memo": " Provides a generic method of setting up tables of monthly results. The report has multiple columns that are each defined using a repeated group of fields for any number of columns. A single Output:Table:Monthly object often produces multiple tables in th",
          "group_name": "Output Reporting",
          "group_id": 58
      },
      {
          "class_id": 1632,
          "class_name": "Output:Table:Annual",
          "memo": " Provides a generic method of setting up tables of annual results with one row per object. The report has multiple columns that are each defined using a repeated group of fields for any number of columns. A single Output:Table:Annual produces a single tab",
          "group_name": "Output Reporting",
          "group_id": 58
      },
      {
          "class_id": 1633,
          "class_name": "Output:Table:ReportPeriod",
          "memo": " This object allows the user to generate the resilience tabular reports over a subset of a run period. When it is defined, a series of reporting-period-specific resilience summary tables will be generated at the end of all tabular reports. Multiple report",
          "group_name": "Output Reporting",
          "group_id": 58
      },
      {
          "class_id": 1634,
          "class_name": "OutputControl:Table:Style",
          "memo": " default style for the OutputControl:Table:Style is comma -- this works well for importing into spreadsheet programs such as Excel(tm) but not so well for word processing programs -- there tab may be a better choice. fixed puts spaces between the \"columns",
          "group_name": "Output Reporting",
          "group_id": 58
      },
      {
          "class_id": 1635,
          "class_name": "OutputControl:ReportingTolerances",
          "memo": " Calculations of the time that setpoints are not met use a tolerance of 0.2C. This object allows changing the tolerance used to determine when setpoints are being met.",
          "group_name": "Output Reporting",
          "group_id": 58
      },
      {
          "class_id": 1636,
          "class_name": "Output:Variable",
          "memo": " each Output:Variable command picks variables to be put onto the standard output file (.eso) some variables may not be reported for every simulation. a list of variables that can be reported are available after a run on the report dictionary file (.rdd) i",
          "group_name": "Output Reporting",
          "group_id": 58
      },
      {
          "class_id": 1637,
          "class_name": "Output:Meter",
          "memo": " Each Output:Meter command picks meters to be put onto the standard output file (.eso) and meter file (.mtr). Not all meters are reported in every simulation. A list of meters that can be reported are available after a run on the meter dictionary file (.m",
          "group_name": "Output Reporting",
          "group_id": 58
      },
      {
          "class_id": 1638,
          "class_name": "Output:Meter:MeterFileOnly",
          "memo": " Each Output:Meter:MeterFileOnly command picks meters to be put only onto meter file (.mtr). Not all meters are reported in every simulation. A list of meters that can be reported a list of meters that can be reported are available after a run on the mete",
          "group_name": "Output Reporting",
          "group_id": 58
      },
      {
          "class_id": 1639,
          "class_name": "Output:Meter:Cumulative",
          "memo": " Each Output:Meter:Cumulative command picks meters to be reported cumulatively onto the standard output file (.eso) and meter file (.mtr). Not all meters are reported in every simulation. a list of meters that can be reported are available after a run on ",
          "group_name": "Output Reporting",
          "group_id": 58
      },
      {
          "class_id": 1640,
          "class_name": "Output:Meter:Cumulative:MeterFileOnly",
          "memo": " Each Output:Meter:Cumulative:MeterFileOnly command picks meters to be reported cumulatively onto the standard output file (.eso) and meter file (.mtr). Not all meters are reported in every simulation. a list of meters that can be reported are available a",
          "group_name": "Output Reporting",
          "group_id": 58
      },
      {
          "class_id": 1641,
          "class_name": "Meter:Custom",
          "memo": " Used to allow users to combine specific variables and/or meters into \"custom\" meter configurations. To access these meters by name, one must first run a simulation to generate the RDD/MDD files and names. A Meter:Custom cannot reference another Meter:Cus",
          "group_name": "Output Reporting",
          "group_id": 58
      },
      {
          "class_id": 1642,
          "class_name": "Meter:CustomDecrement",
          "memo": " Used to allow users to combine specific variables and/or meters into \"custom\" meter configurations. To access these meters by name, one must first run a simulation to generate the RDD/MDD files and names.",
          "group_name": "Output Reporting",
          "group_id": 58
      },
      {
          "class_id": 1643,
          "class_name": "OutputControl:Files",
          "memo": " Conditionally turn on/off output from EnergyPlus.",
          "group_name": "Output Reporting",
          "group_id": 58
      },
      {
          "class_id": 1644,
          "class_name": "Output:JSON",
          "memo": " Output from EnergyPlus can be written to JSON format files.",
          "group_name": "Output Reporting",
          "group_id": 58
      },
      {
          "class_id": 1645,
          "class_name": "Output:SQLite",
          "memo": " Output from EnergyPlus can be written to an SQLite format file.",
          "group_name": "Output Reporting",
          "group_id": 58
      },
      {
          "class_id": 1646,
          "class_name": "Output:EnvironmentalImpactFactors",
          "memo": " This is used to Automatically report the facility meters and turn on the Environmental Impact Report calculations for all of the Environmental Factors.",
          "group_name": "Output Reporting",
          "group_id": 58
      },
      {
          "class_id": 1647,
          "class_name": "EnvironmentalImpactFactors",
          "memo": " Used to help convert district and ideal energy use to a fuel type and provide total carbon equivalent with coefficients Also used in Source=>Site conversions.",
          "group_name": "Output Reporting",
          "group_id": 58
      },
      {
          "class_id": 1648,
          "class_name": "FuelFactors",
          "memo": " Provides Fuel Factors for Emissions as well as Source=>Site conversions. OtherFuel1, OtherFuel2 provide options for users who want to create and use fuels that may not be mainstream (biomass, wood, pellets).",
          "group_name": "Output Reporting",
          "group_id": 58
      },
      {
          "class_id": 1649,
          "class_name": "Output:Diagnostics",
          "memo": " Special keys to produce certain warning messages or effect certain simulation characteristics.",
          "group_name": "Output Reporting",
          "group_id": 58
      },
      {
          "class_id": 1650,
          "class_name": "Output:DebuggingData",
          "memo": " switch eplusout.dbg file on or off",
          "group_name": "Output Reporting",
          "group_id": 58
      },
      {
          "class_id": 1651,
          "class_name": "Output:PreprocessorMessage",
          "memo": " This object does not come from a user input. This is generated by a pre-processor so that various conditions can be gracefully passed on by the InputProcessor.",
          "group_name": "Output Reporting",
          "group_id": 58
      },
      {
          "class_id": 1652,
          "class_name": "PythonPlugin:SearchPaths",
          "memo": " Add directories to the search path for Python plugin modules The directory containing the EnergyPlus executable file is automatically added so that the Python interpreter can find the packaged up pyenergyplus Python package. By default, the current worki",
          "group_name": "Python Plugin System",
          "group_id": 59
      },
      {
          "class_id": 1653,
          "class_name": "PythonPlugin:Instance",
          "memo": " A single plugin to be executed during the simulation, which can contain multiple calling points for the same class instance by overriding multiple calling point methods.",
          "group_name": "Python Plugin System",
          "group_id": 59
      },
      {
          "class_id": 1654,
          "class_name": "PythonPlugin:Variables",
          "memo": " This object defines name identifiers for custom Python Plugin variable data that should be shared among all running Python Plugins.",
          "group_name": "Python Plugin System",
          "group_id": 59
      },
      {
          "class_id": 1655,
          "class_name": "PythonPlugin:TrendVariable",
          "memo": " This object sets up a Python plugin trend variable from an Python plugin variable A trend variable logs values across timesteps",
          "group_name": "Python Plugin System",
          "group_id": 59
      },
      {
          "class_id": 1656,
          "class_name": "PythonPlugin:OutputVariable",
          "memo": " This object sets up an EnergyPlus output variable from a Python Plugin variable",
          "group_name": "Python Plugin System",
          "group_id": 59
      }
  ],
  "links": {
      "self": "link-value"
  },
  "optional_info": "some optional info"
}