terraform {
  required_providers {
    vercel = {
      source = "vercel/vercel"
      version = "~> 0.3"
    }
  }
}

resource "vercel_project" "flashcards" {
  name      = "terraform-vercel-flashcards"
  framework = "nextjs"
  team_id = "team_GnpaVWcwH3sqBaAQte5TRV9S"
  git_repository = {
    type = "github"
    repo = "KevinFreistroffer/FlashCards-NextJS"
  }
}

provider "vercel" {
  # Or omit this for the api_token to be read
  # from the VERCEL_API_TOKEN environment variable
  api_token = "LH3uFXp4AeNPrivTW3e1DUlI"

  # Optional default team for all resources
  # team = "your_team_slug_or_id"
}

resource "vercel_project_domain" "example" {
  project_id = vercel_project.flashcards.id
  domain = "https://flash-cards-next-js.vercel.app"
}


