export const photosByCategoryQuery = `
  *[_type == "photo" && category == $category] | order(order asc) {
    _id,
    image,
    alt
  }
`;

export const allVideosQuery = `
  *[_type == "video"] | order(order asc) {
    _id,
    title,
    description,
    instagramUrl
  }
`;

export const allTestimonialsQuery = `
  *[_type == "testimonial"] | order(order asc) {
    _id,
    quote,
    name,
    role
  }
`;
