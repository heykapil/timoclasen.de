export enum NodeProfile {
    None = 0,
    Homee = 1,
    OnOffPlug = 10,
    DimmableMeteringSwitch = 11,
    MeteringSwitch = 12,
    MeteringPlug = 13,
    DimmablePlug = 14,
    DimmableSwitch = 15,
    OnOffSwitch = 16,
    DoubleOnOffSwitch = 18,
    DimmableMeteringPlug = 19,
    OneButtonRemote = 20,
    BinaryInput = 21,
    DimmableColorMeteringPlug = 22,
    DoubleBinaryInput = 23,
    TwoButtonRemote = 24,
    ThreeButtonRemote = 25,
    FourButtonRemote = 26,
    AlarmSensor = 27,
    DoubleOnOffPlug = 28,
    OnOffSwitchWithBinaryInput = 29,
    WatchDogWithPressureAndTemperatures = 30,
    FibaroButton = 31,
    EnergyMeter = 32,
    DoubleMeteringSwitch = 33,
    FibaroSwipe = 34,
    EnergyManager = 38,
    LevelMeter = 39,
    RangeExtender = 40,
    Remote = 41,
    ImpulsePlug = 42,
    ImpulseRelay = 43,
    BrightnessSensor = 1000,
    DimmableColorLight = 1001,
    DimmableExtendedColorLight = 1002,
    DimmableColorTemperatureLight = 1003,
    DimmableLight = 1004,
    DimmableLightWithBrightnessSensor = 1005,
    DimmableLightWithBrightnessAndPresenceSensor = 1006,
    DimmableLightWithPresenceSensor = 1007,
    DimmableRGBWLight = 1008,
    OpenCloseSensor = 2000,
    WindowHandle = 2001,
    ShutterPositionSwitch = 2002,
    OpenCloseAndTemperatureSensor = 2003,
    ElectricMotorMeteringSwitch = 2004,
    OpenCloseWithTemperatureAndBrightnessSensor = 2005,
    ElectricMotorMeteringSwitchWithoutSlatPosition = 2006,
    Lock = 2007,
    WindowHandleWithButtons = 2008,
    WindowHandleWithButtonsAndTemperatureAndHumiditySensor = 2009,
    EntranceGateOperator = 2010,
    PerimeterProtectionSystem = 2011,
    GarageDoorOperator = 2012,
    GateOperator = 2013,
    InnerDoorOperator = 2014,
    GarageDoorImpulseOperator = 2015,
    EntranceDoor = 2016,
    TemperatureAndHumiditySensor = 3001,
    CO2Sensor = 3002,
    RoomThermostat = 3003,
    RoomThermostatWithHumiditySensor = 3004,
    BinaryInputWithTemperatureSensor = 3005,
    RadiatorThermostat = 3006,
    TemperatureSensor = 3009,
    HumiditySensor = 3010,
    WaterValve = 3011,
    WaterMeter = 3012,
    WeatherStation = 3013,
    NetatmoMainModule = 3014,
    NetatmoOutdoorModule = 3015,
    NetatmoIndoorModule = 3016,
    NetatmoRainModule = 3017,
    CosiThermChannel = 3018,
    VentilationControl = 3019,
    ThermostatWithHeatingAndCooling = 3022,
    NetatmoWindModule = 3023,
    ElectricalHeating = 3024,
    ValveDrive = 3025,
    Camera = 3026,
    CameraWithFloodlight = 3027,
    HeatingSystem = 3028,
    WarmWaterCircuit = 3029,
    HeatingCircuit = 3030,
    MotionDetectorWithTemperatureBrightnessAndHumiditySensor = 4010,
    MotionDetector = 4011,
    SmokeDetector = 4012,
    FloodDetector = 4013,
    PresenceDetector = 4014,
    MotionDetectorWithTemperatureAndBrightnessSensor = 4015,
    SmokeDetectorWithTemperatureSensor = 4016,
    FloodDetectorWithTemperatureSensor = 4017,
    WatchDogDevice = 4018,
    LAG = 4019,
    OWU = 4020,
    Eurovac = 4021,
    OWWG3 = 4022,
    Europress = 4023,
    MinimumDetector = 4024,
    MaximumDetector = 4025,
    SmokeDetectorAndCODetector = 4026,
    Siren = 4027,
    MotionDetectorWithOpenCloseTemperatureAndBrightnessSensor = 4028,
    MotionDetectorWithBrightness = 4029,
    Doorbell = 4030,
    SmokeDetectorAndSiren = 4031,
    FloodDetectorWithTemperatureAndHumiditySensor = 4032,
    MinimumDetectorWithTemperatureSensor = 4033,
    MaximumDetectorWithTemperatureSensor = 4034,
    PresenceDetectorWithTemperatureAndBrightnessSensor = 4035,
    CODetector = 4036,
    InovaAlarmSystem = 5000,
    InovaDetector = 5001,
    InovaSiren = 5002,
    InovaCommand = 5003,
    InovaTransmitter = 5004,
    InovaReciever = 5005,
    InovaKoala = 5006,
    InovaInternalTransmitter = 5007,
    InovaControlPanel = 5008,
    InovaInputOutputExtension = 5009,
    InovaMotionDetectorWithVOD = 5010,
    InovaMotionDetector = 5011,
    WashingMachine = 6000,
    TumbleDryer = 6001,
    Dishwasher = 6002
}

export enum NodeState {
    None = 0,
    Available = 1,
    Unavailable = 2,
    UpdateInProgress = 3,
    WaitingForAttributes = 4,
    Initializing = 5,
    UserInteractionRequired = 6,
    PasswordRequired = 7,
    HostUnavailable = 8,
    DeleteInProgress = 9,
    CosiConnected = 10,
    Blocked = 11,
    WaitingForWakeup = 12,
    RemoteNodeDeleted = 13
}

export enum AttributeType {
    None = 0,
    OnOff = 1,
    DimmingLevel = 2,
    CurrentEnergyUse = 3,
    AccumulatedEnergyUse = 4,
    Temperature = 5,
    TargetTemperature = 6,
    RelativeHumidity = 7,
    BatteryLevel = 8,
    StatusLED = 9,
    WindowPosition = 10,
    Brightness = 11,
    FloodAlarm = 12,
    Siren = 13,
    OpenClose = 14,
    Position = 15,
    SmokeAlarm = 16,
    BlackoutAlarm = 17,
    CurrentValvePosition = 18,
    BinaryInput = 19,
    CO2Level = 20,
    Pressure = 21,
    Level = 22,
    Color = 23,
    Saturation = 24,
    MotionAlarm = 25,
    MotionSensitivity = 26,
    MotionInsensitivity = 27,
    MotionAlarmCancelationDelay = 28,
    WakeUpInterval = 29,
    TamperAlarm = 30,
    WarmWaterTemperature = 31,
    WarmWaterTargetTemperature = 32,
    LinkQuality = 33,
    InovaAlarmSystemState = 34,
    InovaAlarmGroupState = 35,
    InovaAlarmIntrusionState = 36,
    InovaAlarmErrorState = 37,
    InovaAlarmDoorState = 38,
    InovaAlarmExternalSensor = 39,
    ButtonState = 40,
    Hue = 41,
    ColorTemperature = 42,
    HardwareRevision = 43,
    FirmwareRevision = 44,
    SoftwareRevision = 45,
    LEDState = 46,
    LEDStateWhenOn = 47,
    LEDStateWhenOff = 48,
    TargetTemperatureOffset = 49,
    SavingFactor = 50,
    TotalVoltage = 51,
    HighTemperatureAlarm = 52,
    HighTemperatureAlarmTreshold = 53,
    LowTemperatureAlarm = 54,
    LowTemperatureAlarmTreshold = 55,
    TamperSensitivity = 56,
    TamperAlarmCancelationDelay = 57,
    BrightnessReportInterval = 58,
    TemperatureReportInterval = 59,
    MotionAlarmIndicationMode = 60,
    LEDBrightness = 61,
    TamperAlarmIndicationMode = 62,
    SwitchType = 63,
    TemperatureOffset = 64,
    AccumulatedWaterUse = 65,
    AccumulatedWaterUseLastMonth = 66,
    CurrentDate = 67,
    LeakAlarm = 68,
    BatteryLowAlarm = 69,
    MalfunctionAlarm = 70,
    LinkQualityAlarm = 71,
    Mode = 72,
    HeatingProgram = 73,
    WarmWaterProgram = 74,
    Calibration = 75,
    PresenceAlarm = 76,
    MinimumAlarm = 77,
    MaximumAlarm = 78,
    OilAlarm = 79,
    WaterAlarm = 80,
    InovaAlarmInhibition = 81,
    InovaAlarmEjection = 82,
    InovaAlarmCommercialRef = 83,
    SerialNumber = 84,
    RadiatorThermostatSummerMode = 85,
    InovaAlarmOperationMode = 86,
    AutomaticMode = 87,
    PollingInterval = 88,
    FeedTemperature = 89,
    DisplayOrientation = 90,
    ManualOperation = 91,
    DeviceTemperature = 92,
    Sonometer = 93,
    AirPressure = 94,
    OutdoorRelativeHumidity = 95,
    IndoorRelativeHumidity = 96,
    OutdoorTemperature = 97,
    IndoorTemperature = 98,
    VentilationLevel = 99,
    VentilationMode = 100,
    RainFall = 101,
    IntakeMotorRevs = 102,
    ExhaustMotorRevs = 103,
    OperatingHours = 104,
    InovaAlarmSilentAlert = 105,
    InovaAlarmPreAlarm = 106,
    InovaAlarmDeterrenceAlarm = 107,
    InovaAlarmWarning = 108,
    InovaAlarmFireAlarm = 109,
    UpTime = 110,
    DownTime = 111,
    ShutterBlindMode = 112,
    ShutterSlatPosition = 113,
    ShutterSlatTime = 114,
    RestartDevice = 115,
    SoilMoisture = 116,
    WaterPlantAlarm = 117,
    MistPlantAlarm = 118,
    FertilizePlantAlarm = 119,
    CoolPlantAlarm = 120,
    HeatPlantAlarm = 121,
    PutPlantIntoLightAlarm = 122,
    PutPlantIntoShadeAlarm = 123,
    ColorMode = 124,
    TargetTemperatureLow = 125,
    TargetTemperatureHigh = 126,
    HVACMode = 127,
    Away = 128,
    HVACState = 129,
    HasLeaf = 130,
    SetEnergyConsumption = 131,
    COAlarm = 132,
    RestoreLastKnownState = 133,
    LastImageReceived = 134,
    UpDown = 135,
    RequestVOD = 136,
    InovaDetectorHistory = 137,
    SurgeAlarm = 138,
    LoadAlarm = 139,
    OverloadAlarm = 140,
    VoltageDropAlarm = 141,
    ShutterOrientation = 142,
    OverCurrentAlarm = 143,
    SirenMode = 144,
    AlarmAutoStopTime = 145,
    WindSpeed = 146,
    WindDirection = 147,
    ComfortTemperature = 148,
    EcoTemperature = 149,
    ReduceTemperature = 150,
    ProtectTemperature = 151,
    InovaSystemTime = 152,
    InovaCorrespondentProtocol = 153,
    InovaCorrespondentID = 154,
    InovaCorrespondentListen = 155,
    InovaCorrespondentNumber = 156,
    InovaCallCycleFireProtection = 157,
    InovaCallCycleIntrusion = 158,
    InovaCallCycleTechnicalProtect = 159,
    InovaCallCycleFaults = 160,
    InovaCallCycleDeterrence = 161,
    InovaCallCyclePrealarm = 162,
    InovaPSTNRings = 163,
    InovaDoubleCallRings = 164,
    InovaPIN = 165,
    InovaPUK = 166,
    InovaMainMediaSelection = 167,
    RainFallLastHour = 168,
    RainFallToday = 169,
    IdentificationMode = 170,
    ButtonDoubleClick = 171,
    SirenTriggerMode = 172,
    UV = 173,
    SlatSteps = 174,
    EcoModeConfig = 175,
    ButtonLongRelease = 176,
    VisualGong = 177,
    AcousticGong = 178,
    SurveillanceOnOff = 179,
    StorageAlarm = 181,
    PowerSupplyAlarm = 182,
    NetatmoHome = 183,
    NetatmoPerson = 184,
    NetatmoLastEventPersonId = 185,
    NetatmoLastEventTime = 186,
    NetatmoLastEventType = 187,
    NetatmoLastEventIsKnownPerson = 188,
    NetatmoLastEventIsArrival = 189,
    PresenceTimeout = 190,
    KnownPersonPresence = 191,
    UnknownPersonPresence = 192,
    Current = 193,
    Frequency = 194,
    Voltage = 195,
    PresenceAlarmCancelationDelay = 196,
    PresenceAlarmDetectionDelay = 197,
    PresenceAlarmThreshold = 198,
    NetatmoThermostatMode = 199,
    NetatmoRelayBoilerConnected = 200,
    NetatmoRelayMac = 201,
    NetatmoThermostatModeTimeout = 202,
    NetatmoThermostatNextChange = 203,
    NetatmoThermostatPrograms = 204,
    HomeeMode = 205,
    ColorWhite = 206,
    MovementAlarm = 207,
    MovementSensitivity = 208,
    VibrationAlarm = 209,
    VibrationSensitivity = 210,
    AverageEnergyUse = 211,
    BinaryInputMode = 212,
    DeviceStatus = 213,
    DeviceRemainingTime = 214,
    DeviceStartTime = 215,
    DeviceProgram = 216,
    ButtonPressed3Times = 223,
    ButtonPressed4Times = 224,
    ButtonPressed5Times = 225,
    RepeaterMode = 226,
    AutoOffTime = 227,
    CO2Alarm = 228,
    InputEndpointConfiguration = 229,
    GustSpeed = 230,
    GustDirection = 231,
    LockState = 232,
    AeotecSmartPlugLEDState = 233,
    AlarmDuration = 234,
    DewPoint = 235,
    Gesture = 236,
    GestureSequenceLearningMode = 237,
    GestureSequence = 238,
    TotalCurrentEnergyUse = 239,
    TotalAccumulatedEnergyUse = 240,
    SunsetTime = 241,
    SunriseTime = 242,
    CurrentLocalWeatherCondition = 243,
    CurrentLocalTemperature = 244,
    CurrentLocalHumidity = 245,
    ForecastLocalWeatherCondition = 246,
    ForecastLocalTempMin = 247,
    ForecastLocalTempMax = 248,
    Armed = 249,
    Floodlight = 250,
    HumanDetected = 251,
    VehicleDetected = 252,
    AnimalDetected = 253,
    VacationMode = 254,
    BlinkInterval = 255,
    OtherMotionDetected = 256,
    IRCodeNumber = 257,
    HeatingMode = 258,
    DisplayAutoOffTime = 259,
    Backlight = 260,
    OpenWindowDetectionSensibility = 261,
    CurrentLocalWindSpeed = 262,
    CurrentLocalGustSpeed = 263,
    PowerOutputGrid = 264,
    PowerInputGrid = 265,
    PowerPV = 266,
    PowerLoad = 267,
    PowerOutputBattery = 268,
    PowerInputBattery = 269,
    RelativeAutonomy = 270,
    RelativeSelfConsumption = 271,
    TotalCurrent = 272,
    EnergyStorageLevel = 273,
    TotalEnergyLoad = 274,
    TotalEnergyProduction = 275,
    TotalEnergyOutputGrid = 276,
    TotalEnergyInputGrid = 277,
    TotalEnergyStored = 278,
    TotalEnergyRestored = 279,
    ReplaceFilterAlarm = 289,
    UpDownRemote = 300,
    Dawn = 301,
    RainfallIntensity = 302,
    Impulse = 304,
    LightImpulse = 305,
    OpenPartialImpulse = 306,
    ExternalBinaryInput = 309,
    ButtonPressedLong = 310,
    MemoryUsage = 311,
    ProcessorUtilization = 312,
    UsedStorage = 313,
    ExternalTemperature = 315,
    FloorTemperature = 316,
    CurrentElectricityPrice = 317,
    HighestElectricityPrice = 318,
    LowestElectricityPrice = 319,
    CurrentEnergyConsumption = 320,
    CurrentCosts = 321,
    SlatMinAngle = 322,
    SlatMaxAngle = 323,
    MotorRotation = 324,
    EndPositionConfiguration = 325,
    AutomaticModeImpulse = 326,
    BrieflyOpenImpulse = 327,
    PermanentlyOpenImpulse = 328,
    WindThreshold = 329,
    SlatRotationImpulse = 337
}

export enum AttributeState {
    None = 0,
    Normal = 1,
    WaitingForWakeUp = 2,
    WaitingForValue = 3,
    WaitingForAcknowledge = 4,
    Inactive = 5,
    Ignored = 6,
    Unavailable = 7
}

export enum AttributeChangedBy {
    None = 0,
    Itself = 1,
    User = 2,
    Homeegram = 3,
    AI = 6
}

export enum AttributeBasedOn {
    Events = 1 << 0,
    Interval = 1 << 1,
    Polling = 1 << 2
}

export enum NodeProtocol {
    ZWave = 1,
    ZigBee = 2,
    EnOcean = 3,
    HTTPAVM = 8,
    HTTPNetatmo = 9,
    HTTPCCU2 = 13,
    HTTPUPnP = 14,
    HTTPNuki = 15,
    HTTPSEMS = 16,
    BiSecur = 19,
    HTTPWolf = 20,
    ExternalHomee = 21,
    CentronicPlus = 22,
    WMS = 23,
    HTTPMyStrom = 24
}

export enum CubeType {
    none = 0,
    homeeZWave = 1,
    homeeZigBee = 2,
    homeeEnOcean = 3,
    homeeWMbus = 4,
    homeeHomematic = 5,
    hagerKNXRF = 6,
    hagerInova = 7,
    homeeBrain = 8,
    homeeZWaveBridge = 9,
    homeeLoRa = 10,
    homeeBiSecur = 11,
    kameIOCube = 12,
    homeeWMS = 14,
    homeeEcoStar = 15,
    afrisoEnOcean = 150,
    ESTMKZWave = 151,
    PuMEnOcean = 152,
    ESTMKZWaveBridge = 153,
    VARIA3ZWave = 154
}
