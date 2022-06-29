interface Rating {
	mu: number;
	sigma: number;
}

type Model = "PlackettLuce" | "ThurstoneMosteller";

interface OptionOrdinal {
	z?: number;
}

interface OptionRating extends OptionOrdinal {
	mu?: number;
	sigma?: number;
}

interface OptionProbability {
	beta?: number;
	rank?: number[];
}

interface OptionRate extends OptionProbability {
	model?: Model;
	score?: number[];
	epsilon?: number;
	gamma?: (c: number, sigmaSq: number, options?: OptionRate) => number;
}

interface OpenSkill {
	Settings: {
		DefaultModel: Model;
	};
	Ordinal(this: void, rating: Rating, options?: OptionOrdinal): number;
	Rating(this: void, mu?: number, sigma?: number, options?: OptionRating): Rating;
	Rate(this: void, teams: Rating[][], options?: OptionRate): number[][][];
	WinProbability(this: void, teams: Rating[][], options?: OptionProbability): number[];
	DrawProbability(this: void, teams: Rating[][], options?: OptionProbability): number;
}

// create a value from our type
declare const OpenSkill: OpenSkill;

export = OpenSkill;
