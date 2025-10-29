# Hexagonal Architecture & Rich Domain Rules

## Bounded Context Structure
- When creating new bounded contexts, follow this structure:
  - src/{context-name}/package-info.ts (extends BusinessContext or SharedKernel)
  - src/{context-name}/domain/models/ (rich domain entities with business logic)
  - src/{context-name}/domain/services/ (domain services for complex business rules)
  - src/{context-name}/application/services/ (use cases and application services)
  - src/{context-name}/infrastructure/primary/ (Vue components, controllers)
  - src/{context-name}/infrastructure/secondary/ (repositories, external adapters)

## Layer Dependency Rules
- Domain layer: ONLY depend on other domain models and SharedKernel
- Application layer: ONLY depend on domain layer, define repository interfaces
- Infrastructure primary: ONLY depend on application layer (UI, controllers)
- Infrastructure secondary: Implement application interfaces (repositories, APIs)
- NEVER import infrastructure in domain or application layers
- NEVER have primary adapters depend on secondary adapters

## Rich Domain Model Requirements
- Domain entities MUST contain business logic, not just data
- Use methods to encapsulate state changes and enforce invariants
- Validate business rules in domain constructors and methods
- Avoid anemic domain models (data containers without behavior)
- Use value objects for complex attributes with validation
- Domain services for business logic spanning multiple entities

## File Organization
- Vue components go in infrastructure/primary/ only
- Follow naming: {ContextName}Page.vue, {ContextName}Page.component.ts
- Separate .vue, .component.ts, .html, .css files
- Repository interfaces in application/repositories/
- Repository implementations in infrastructure/secondary/repositories/
- Always create package-info.ts for new contexts

## Testing Compliance
- Run npm run test:unit to verify architecture compliance
- Ensure HexagonalArchTest.spec.ts passes for all new code
- Test domain logic in isolation
- Mock repositories in application layer tests

## Naming Conventions
- Contexts: kebab-case directories, PascalCase classes with Context suffix
- Interfaces: PascalCase with 'I' prefix (IUserRepository)
- Vue components: PascalCase with type suffix (UserProfilePage.vue)

## Anti-Patterns to Reject
- Anemic domain models (just getters/setters)
- Business logic in Vue components or controllers
- Infrastructure imports in domain/application layers
- God objects with multiple responsibilities
- Layer violations detected by arch-unit-ts tests
