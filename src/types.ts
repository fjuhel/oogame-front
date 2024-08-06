export enum IconElementSizeEnum {
  Small = 'small',
  Medium = 'medium',
  Large = 'large',
}

export enum IconElementStateEnum {
  Ready = 0,
  LackResource = 1,
  LackRequirements = 2,
}

export enum IconElementEnum {
  // Resources
  MetalMine = 'metalMine',
  CrystalMine = 'crystalMine',
  DeuteriumMine = 'deuteriumMine',
  SolarPlant = 'solarPlant',
  FusionReactor = 'fusionReactor',
  MetalStorage = 'metalStorage',
  CrystalStorage = 'crystalStorage',
  DeuteriumStorage = 'deuteriumStorage',

  // Resources - Shipyard
  SolarSatellite = 'solarSatellite',
  Crawler = 'crawler',

  // Facilities
  RoboticsFactory = 'roboticsFactory',
  Shipyard = 'shipyard',
  ResearchLab = 'researchLab',
  AllianceDepot = 'allianceDepot',
  MissileSilo = 'missileSilo',
  NaniteFactory = 'naniteFactory',
  Terraformer = 'terraformer',
  SpaceDock = 'spaceDock',

  // Defence
  RocketLauncher = 'rocketLauncher',
  LightLaser = 'lightLaser',
  HeavyLaser = 'heavyLaser',
  GaussCannon = 'gaussCannon',
  IonCannon = 'ionCannon',
  PlasmaTurret = 'plasmaTurret',
  SmallShield = 'smallShield',
  LargeShield = 'largeShield',
  AntiBallisticMissile = 'antiBallisticMissile',
  InterplanetaryMissile = 'interplanetaryMissile',

  // Shipyard
  LightFighter = 'lightFighter',
  HeavyFighter = 'heavyFighter',
  Cruiser = 'cruiser',
  Battleship = 'battleship',
  Battlecruiser = 'battlecruiser',
  Bomber = 'bomber',
  Destroyer = 'destroyer',
  Deathstar = 'deathstar',
  Reaper = 'reaper',
  Pathfinder = 'pathfinder',
  SmallCargo = 'smallCargo',
  LargeCargo = 'largeCargo',
  ColonyShip = 'colonyShip',
  Recycler = 'recycler',
  EspionageProbe = 'espionageProbe',

  // Research
  EnergyTechnology = 'energyTechnology',
  LaserTechnology = 'laserTechnology',
  IonTechnology = 'ionTechnology',
  HyperspaceTechnology = 'hyperspaceTechnology',
  PlasmaTechnology = 'plasmaTechnology',
  CombustionDrive = 'combustionDrive',
  ImpulseDrive = 'impulseDrive',
  HyperspaceDrive = 'hyperspaceDrive',
  EspionageTechnology = 'espionageTechnology',
  ComputerTechnology = 'computerTechnology',
  Astrophysics = 'astrophysics',
  IntergalacticResearchNetwork = 'intergalacticResearchNetwork',
  GravitonTechnology = 'gravitonTechnology',
  WeaponsTechnology = 'weaponsTechnology',
  ShieldingTechnology = 'shieldingTechnology',
  ArmourTechnology = 'armourTechnology',
}

  export enum IconElementStateEnum_ {
    ResourcesLargeReady = 'RESOURCES_LARGE_READY',
    ResourcesMediumReady = 'RESOURCES_MEDIUM_READY',
    ResourcesMediumLackResource = 'RESOURCES_MEDIUM_LACK_RESOURCES',
    ResourcesMediumLackRequirements = 'RESOURCES_MEDIUM_LACK_REQUIREMENTS',
    ResourcesSmallReady = 'RESOURCES_SMALL_READY',
    ResourcesSmallLackResource = 'RESOURCES_SMALL_LACK_RESOURCE',
    ResourcesSmallLackRequirement = 'RESOURCES_SMALL_LACK_REQUIREMENT',

    FacilitiesLargeReady = 'FACILITIES_LARGE_READY',
    FacilitiesMediumReady = 'FACILITIES_MEDIUM_READY',
    FacilitiesMediumLackResource = 'FACILITIES_MEDIUM_LACK_FACILITIES',
    FacilitiesMediumLackRequirements = 'FACILITIES_MEDIUM_LACK_REQUIREMENTS',
    FacilitiesSmallReady = 'FACILITIES_SMALL_READY',
    FacilitiesSmallLackResource = 'FACILITIES_SMALL_LACK_RESOURCE',
    FacilitiesSmallLackRequirement = 'FACILITIES_SMALL_LACK_REQUIREMENT',

    DefenceLargeReady = 'DEFENCE_LARGE_READY',
    DefenceMediumReady = 'DEFENCE_MEDIUM_READY',
    DefenceMediumLackResource = 'DEFENCE_MEDIUM_LACK_DEFENCE',
    DefenceMediumLackRequirements = 'DEFENCE_MEDIUM_LACK_REQUIREMENTS',
    DefenceSmallReady = 'DEFENCE_SMALL_READY',
    DefenceSmallLackResource = 'DEFENCE_SMALL_LACK_RESOURCE',
    DefenceSmallLackRequirement = 'DEFENCE_SMALL_LACK_REQUIREMENT',

    ShipyardLargeReady = 'SHIPYARD_LARGE_READY',
    ShipyardMediumReady = 'SHIPYARD_MEDIUM_READY',
    ShipyardMediumLackResource = 'SHIPYARD_MEDIUM_LACK_SHIPYARD',
    ShipyardMediumLackRequirements = 'SHIPYARD_MEDIUM_LACK_REQUIREMENTS',
    ShipyardSmallReady = 'SHIPYARD_SMALL_READY',
    ShipyardSmallLackResource = 'SHIPYARD_SMALL_LACK_RESOURCE',
    ShipyardSmallLackRequirement = 'SHIPYARD_SMALL_LACK_REQUIREMENT',

    ResearchLargeReady = 'RESEARCH_LARGE_READY',
    ResearchMediumReady = 'RESEARCH_MEDIUM_READY',
    ResearchMediumLackResource = 'RESEARCH_MEDIUM_LACK_RESEARCH',
    ResearchMediumLackRequirements = 'RESEARCH_MEDIUM_LACK_REQUIREMENTS',
    ResearchSmallReady = 'RESEARCH_SMALL_READY',
    ResearchSmallLackResource = 'RESEARCH_SMALL_LACK_RESOURCE',
    ResearchSmallLackRequirement = 'RESEARCH_SMALL_LACK_REQUIREMENT',
  }
