import { IFlashCard } from "@/lib/definitions";
import { EAnswer } from "@/lib/enums";
import { shuffle } from "lodash";
import { aws_questions as aws_cloud_journey } from "@/data/aws_cloud_journey";
import { aws_questions as aws_compute } from "@/data/aws_compute";
import { aws_questions as aws_global_infrastructure } from "@/data/aws_global_infrastructure";
import { aws_questions as aws_storage_and_databases } from "@/data/aws_storage_and_databases";
import { aws_questions as aws_migration_innovation } from "@/data/aws_migration_innovation";
import { aws_questions as aws_monitoring_and_analytics } from "@/data/aws_monitoring_and_analytics";
import { aws_questions as aws_pricing_support } from "@/data/aws_pricing_support";
import { aws_questions as aws_practice_exam } from "@/data/aws_practice_exam";
import { aws_questions as aws_security } from "@/data/aws_security";
import { aws_questions as aws_intro } from "@/data/aws_intro";
import { aws_questions as aws_networking } from "@/data/aws_networking";
import { aws_questions as info_cards } from "@/data/info_cards";

export const aws_questions: IFlashCard[] = [
  ...aws_practice_exam,
  ...aws_intro,
  ...aws_compute,
  ...aws_global_infrastructure,
  ...aws_networking,
  ...aws_storage_and_databases,
  ...aws_security,
  ...aws_monitoring_and_analytics,
  ...aws_pricing_support,
  ...aws_migration_innovation,
  ...aws_cloud_journey,
  // ...info_cards,
];

export default aws_questions;
