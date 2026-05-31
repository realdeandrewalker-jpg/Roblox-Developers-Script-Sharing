import { typ_pst_4y } from "./types";

export const dmy_p_list_v4: typ_pst_4y[] = [
  {
    id: "p1-9x",
    ttl_nm: "Roblox Leaderstats & Save Coins",
    dsc_txt: "Saves player Coins and Stage using DataStoreService. Server-authoritative and thread-safe.",
    scp_typ: "Script",
    vte_num: 154,
    tgs: ["DataStore", "Leaderstats", "Server", "Coins"],
    tms: "2026-05-31T12:00:20Z",
    aut_g_nm: "Luau_Pro_7a",
    cl_vts: ["u2", "u5"],
    cmts: [
      {
        id: "c1-a2",
        aut_nm: "Dev_Obby_9",
        txt: "Very clean datastore script. Simple and fits standard template perfectly.",
        tms: "2026-05-31T12:30:10Z"
      },
      {
        id: "c1-b3",
        aut_nm: "LuaCoder32",
        txt: "Remember to enable Studio API access or getAsync will fail with 403 error!",
        tms: "2026-05-31T13:02:11Z"
      }
    ],
    cod_cn: `local Players = game:GetService("Players")
local DataStoreService = game:GetService("DataStoreService")
local CoinsStore = DataStoreService:GetDataStore("CoinsSave_v1")

local function onPlayerAdded(player)
	local leaderstats = Instance.new("Folder")
	leaderstats.Name = "leaderstats"
	leaderstats.Parent = player

	local coins = Instance.new("IntValue")
	coins.Name = "Coins"
	coins.Value = 0
	coins.Parent = leaderstats

	local success, savedCoins = pcall(function()
		return CoinsStore:GetAsync(tostring(player.UserId))
	end)

	if success and savedCoins then
		coins.Value = savedCoins
	end
end

local function onPlayerRemoving(player)
	local leaderstats = player:FindFirstChild("leaderstats")
	if leaderstats then
		local coins = leaderstats:FindFirstChild("Coins")
		if coins then
			pcall(function()
				CoinsStore:SetAsync(tostring(player.UserId), coins.Value)
			end)
		end
	end
end

Players.PlayerAdded:Connect(onPlayerAdded)
Players.PlayerRemoving:Connect(onPlayerRemoving)`
  },
  {
    id: "p2-3b",
    ttl_nm: "Realistic Smooth Day/Night Cycle",
    dsc_txt: "Runs on Task scheduler. Calculates celestial minutes correctly without lagging server. Smooth tweening.",
    scp_typ: "Script",
    vte_num: 89,
    tgs: ["Lighting", "Loop", "Environment", "Tween"],
    tms: "2026-05-31T08:15:30Z",
    aut_g_nm: "Studio_Mage_9x",
    cl_vts: ["u1"],
    cmts: [
      {
        id: "c2-a1",
        aut_nm: "BuildMaster_v9",
        txt: "This lightning adjustment looks super natural. Using Task.wait is much cheaper.",
        tms: "2026-05-31T09:20:00Z"
      }
    ],
    cod_cn: `local Lighting = game:GetService("Lighting")
local CYCLE_SPEED = 0.05

local function startTimeCycle()
	while true do
		local currentMinutes = Lighting:GetMinutesAfterMidnight()
		Lighting:SetMinutesAfterMidnight(currentMinutes + CYCLE_SPEED)
		task.wait(0.01)
	end
end

task.spawn(startTimeCycle)`
  },
  {
    id: "p3-4z",
    ttl_nm: "Client-Side Raycast Gun System",
    dsc_txt: "Calculates direction from viewport camera and fires remote event. Excellent for multiplayer shooters.",
    scp_typ: "LocalScript",
    vte_num: 210,
    tgs: ["Raycast", "Gun", "Mouse", "Client", "Weapon"],
    tms: "2026-05-30T15:20:00Z",
    aut_g_nm: "FPS_Blox_1x",
    cl_vts: [],
    cmts: [
      {
        id: "c3-x1",
        aut_nm: "CombatCoder9",
        txt: "Does this require filtering enabled? Yes, also need to validate gun range server side!",
        tms: "2026-05-30T16:05:00Z"
      }
    ],
    cod_cn: `local Players = game:GetService("Players")
local UserInputService = game:GetService("UserInputService")
local ReplicatedStorage = game:GetService("ReplicatedStorage")

local player = Players.LocalPlayer
local camera = workspace.CurrentCamera
local shootRemote = ReplicatedStorage:WaitForChild("ShootBullet")

local function onShoot()
	local mouseLocation = UserInputService:GetMouseLocation()
	local cameraRay = camera:ViewportPointToRay(mouseLocation.X, mouseLocation.Y)
	
	local raycastParams = RaycastParams.new()
	raycastParams.FilterType = Enum.RaycastFilterType.Exclude
	raycastParams.FilterDescendantsInstances = {player.Character}
	
	local raycastResult = workspace:Raycast(cameraRay.Origin, cameraRay.Direction * 500, raycastParams)
	if raycastResult then
		local hitInstance = raycastResult.Instance
		local hitPosition = raycastResult.Position
		print("Hit:" .. hitInstance.Name)
		shootRemote:FireServer(hitInstance, hitPosition)
	end
end`
  },
  {
    id: "p4-a1",
    ttl_nm: "Pet Follower Lerp Mechanics",
    dsc_txt: "Hovering pet follower positioning with beautiful Sin wave bobbing. Place inside Pet object.",
    scp_typ: "LocalScript",
    vte_num: 124,
    tgs: ["Pet", "Lerp", "Math", "Sine", "Client"],
    tms: "2026-05-30T10:00:00Z",
    aut_g_nm: "PetDesigner2",
    cl_vts: ["u4"],
    cmts: [],
    cod_cn: `local Players = game:GetService("Players")
local RunService = game:GetService("RunService")

local player = Players.LocalPlayer
local petModel = script.Parent
local offset = Vector3.new(3, 2, 3)

local function updatePetPos()
	local character = player.Character
	if character and character:FindFirstChild("HumanoidRootPart") then
		local rootPart = character.HumanoidRootPart
		local targetCFrame = rootPart.CFrame * CFrame.new(offset)
		
		local sinus = math.sin(os.clock() * 3) * 0.5
		local bobbingCFrame = targetCFrame * CFrame.new(0, sinus, 0)
		
		petModel:PivotTo(petModel:GetPivot():Lerp(bobbingCFrame, 0.1))
	end
end

RunService.RenderStepped:Connect(updatePetPos)`
  },
  {
    id: "p5-m2",
    ttl_nm: "Custom Fast-Load ModuleScript",
    dsc_txt: "Returns mathematical vectors for 3D trajectory calculation. Highly reusable math tool.",
    scp_typ: "ModuleScript",
    vte_num: 72,
    tgs: ["ModuleScript", "Math", "Physics", "Vector"],
    tms: "2026-05-29T18:40:11Z",
    aut_g_nm: "MathOverlord",
    cl_vts: [],
    cmts: [],
    cod_cn: `local TrajectoryMath = {}

function TrajectoryMath.calculateTimeOfFlight(distance, speed)
	return distance / speed
end

function TrajectoryMath.getTrajectoryY(startX, distance, gravity, angle, speed)
	local theta = math.rad(angle)
	local term1 = math.tan(theta) * distance
	local term2 = (gravity * (distance ^ 2)) / (2 * (speed ^ 2) * (math.cos(theta) ^ 2))
	return startX + term1 - term2
end

return TrajectoryMath`
  }
];
